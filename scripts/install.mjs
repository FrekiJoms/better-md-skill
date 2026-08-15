#!/usr/bin/env node
/**
 * better-md-skill cross-agent installer
 *
 * Copies skills/better-md-skill into the personal skill directory of every
 * supported coding agent, so the same SKILL.md works everywhere without
 * modification (Agent Skills open standard, agentskills.io).
 *
 * The installer is self-sufficient: it first looks for the skill source next
 * to this script (checkout or registry install). If the source is missing —
 * which happens when npm packs a git dependency without the full tree — it
 * downloads the skill directly from GitHub and extracts it. Either way the
 * skill ends up installed in every supported agent.
 *
 * Usage:
 *   node scripts/install.mjs           install to all agents
 *   node scripts/install.mjs --dry-run show what would happen (no download)
 *   node scripts/install.mjs --agents opencode claude-code
 *   node scripts/install.mjs --list    list supported agents and their paths
 *   node scripts/install.mjs --uninstall
 *                                      remove the skill from all agents (best-effort,
 *                                      never fails — safe for npm preuninstall)
 *
 * Env:
 *   BETTER_MD_SKILL_SOURCE_URL   override the download fallback URL
 */

import { createGunzip } from "node:zlib";
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { get } from "node:https";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HOME = homedir();
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const LOCAL_SOURCE = path.resolve(SCRIPT_DIR, "..", "skills", "better-md-skill");
const FALLBACK_URL =
  process.env.BETTER_MD_SKILL_SOURCE_URL ||
  "https://codeload.github.com/FrekiJoms/better-md-skill/tar.gz/HEAD";

const AGENTS = [
  { name: "opencode", dir: path.join(HOME, ".config", "opencode", "skills") },
  { name: "claude-code", dir: path.join(HOME, ".claude", "skills") },
  { name: "agents-standard", dir: path.join(HOME, ".agents", "skills") },
  { name: "codex", dir: path.join(HOME, ".codex", "skills") },
  { name: "gemini-cli", dir: path.join(HOME, ".gemini", "skills") },
  { name: "github-copilot", dir: path.join(HOME, ".config", "github-copilot", "skills") },
];

function parseArgs(argv) {
  const dry = argv.includes("--dry-run");
  const list = argv.includes("--list");
  const uninstall = argv.includes("--uninstall");
  const agentsIdx = argv.indexOf("--agents");
  const only = agentsIdx >= 0 ? argv.slice(agentsIdx + 1) : [];
  return { dry, list, uninstall, only };
}

function skillDirFor(agent) {
  return path.join(agent.dir, "better-md-skill");
}

function copySkill(agent, source, dry) {
  const target = skillDirFor(agent);
  if (dry) {
    console.log(`[dry-run] would copy to ${target}`);
    return true;
  }
  mkdirSync(target, { recursive: true });
  cpSync(source, target, { recursive: true, force: true });
  const ok = existsSync(path.join(target, "SKILL.md"));
  console.log(
    ok
      ? `[ok] ${agent.name} -> ${target}`
      : `[fail] ${agent.name} -> ${target} (SKILL.md missing after copy)`,
  );
  return ok;
}

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`download failed: HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
    }).on("error", reject);
  });
}

function gunzip(buffer) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    createGunzip()
      .on("data", (c) => chunks.push(c))
      .on("end", () => resolve(Buffer.concat(chunks)))
      .on("error", reject)
      .end(buffer);
  });
}

function untar(archive, target) {
  let offset = 0;
  let found = 0;
  while (offset + 512 <= archive.length) {
    const header = archive.subarray(offset, offset + 512);
    const name = header.subarray(0, 100).toString("utf8").replace(/\0.*$/, "");
    const size = parseInt(
      header.subarray(124, 136).toString("utf8").replace(/\0.*$/, "").trim() || "0",
      8,
    );
    const type = String.fromCharCode(header[156] || 48);
    offset += 512;
    const padded = Math.ceil(size / 512) * 512;
    if (name && name.endsWith("/")) {
      offset += padded;
      continue;
    }
    if (type === "x" || type === "g") {
      offset += padded;
      continue;
    }
    const match = name.match(/^[^/]+\/skills\/better-md-skill\/(.+)$/);
    if (match) {
      const file = path.join(target, match[1]);
      mkdirSync(path.dirname(file), { recursive: true });
      writeFileSync(file, archive.subarray(offset, offset + size));
      found++;
    }
    offset += padded;
  }
  if (found === 0 || !existsSync(path.join(target, "SKILL.md"))) {
    throw new Error("no skills/better-md-skill found in downloaded archive");
  }
}

async function downloadSkillSource() {
  console.log(`[download] fetching skill source from ${FALLBACK_URL}`);
  const tarball = await fetchBuffer(FALLBACK_URL);
  const archive = await gunzip(tarball);
  const target = path.join(SCRIPT_DIR, "..", ".skill-tmp");
  rmSync(target, { recursive: true, force: true });
  mkdirSync(target, { recursive: true });
  try {
    untar(archive, target);
  } catch (err) {
    rmSync(target, { recursive: true, force: true });
    throw err;
  }
  return target;
}

function removeSkill(agent, dry) {
  const target = skillDirFor(agent);
  if (!existsSync(target)) {
    if (!dry) console.log(`[skip] ${agent.name} (not installed)`);
    return true;
  }
  if (dry) {
    console.log(`[dry-run] would remove ${target}`);
    return true;
  }
  try {
    rmSync(target, { recursive: true, force: true });
    console.log(`[ok] ${agent.name} removed -> ${target}`);
  } catch (err) {
    console.error(`[fail] ${agent.name} -> ${target} (${err.message})`);
    return false;
  }
  return true;
}

function uninstallAll(dry, targets) {
  if (dry) {
    console.log(`[dry-run] would uninstall from ${targets.length} agents`);
  } else {
    console.log(`[uninstall] removing better-md-skill from ${targets.length} agents`);
  }
  let removed = 0;
  for (const agent of targets) {
    if (removeSkill(agent, dry)) removed++;
  }
  if (!dry) {
    console.log(`[done] uninstalled from ${removed}/${targets.length} agents.`);
  }
}

async function main() {
  const { dry, list, uninstall, only } = parseArgs(process.argv.slice(2));

  if (list) {
    console.log("Supported agents and their personal skill directories:");
    for (const agent of AGENTS) {
      console.log(`  ${agent.name.padEnd(16)} ${agent.dir}`);
    }
    return;
  }

  const targets = only.length > 0 ? AGENTS.filter((a) => only.includes(a.name)) : AGENTS;

  if (uninstall) {
    try {
      uninstallAll(dry, targets);
    } catch (err) {
      console.error(`[error] ${err.message}`);
    }
    return;
  }

  let source = LOCAL_SOURCE;
  let downloaded = false;
  if (!existsSync(source)) {
    if (dry) {
      console.log(
        `[dry-run] local skill source missing; would download from ${FALLBACK_URL}`,
      );
      return;
    }
    source = await downloadSkillSource();
    downloaded = true;
  }

  console.log(dry ? `[dry-run] source: ${source}` : `[install] source: ${source}`);

  let installed = 0;
  for (const agent of targets) {
    if (copySkill(agent, source, dry)) installed++;
  }

  if (downloaded) {
    rmSync(path.dirname(source), { recursive: true, force: true });
  }

  console.log(
    dry
      ? `[dry-run] ${installed}/${targets.length} agents would be updated.`
      : `[done] ${installed}/${targets.length} agents updated.`,
  );
  if (!dry) {
    console.log("Restart each agent's session for the skill to load.");
  }
}

main();