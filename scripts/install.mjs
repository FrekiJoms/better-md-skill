#!/usr/bin/env node
/**
 * better-md-skill cross-agent installer
 *
 * Copies skills/better-md-skill into the personal skill directory of every
 * supported coding agent, so the same SKILL.md works everywhere without
 * modification (Agent Skills open standard, agentskills.io).
 *
 * Usage:
 *   node scripts/install.mjs           install to all agents
 *   node scripts/install.mjs --dry-run show what would happen
 *   node scripts/install.mjs --agents opencode claude-code
 *   node scripts/install.mjs --list    list supported agents and their paths
 */

import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";

const HOME = homedir();
const SKILL_SOURCE = path.resolve(
  import.meta.dirname,
  "..",
  "skills",
  "better-md-skill",
);

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
  const agentsIdx = argv.indexOf("--agents");
  const only = agentsIdx >= 0 ? argv.slice(agentsIdx + 1) : [];
  return { dry, list, only };
}

function skillDirFor(agent) {
  return path.join(agent.dir, "better-md-skill");
}

function copySkill(agent, dry) {
  const target = skillDirFor(agent);
  if (!existsSync(SKILL_SOURCE)) {
    console.error(`[skip] skill source not found: ${SKILL_SOURCE}`);
    return false;
  }
  if (dry) {
    console.log(`[dry-run] would copy to ${target}`);
    return true;
  }
  mkdirSync(target, { recursive: true });
  cpSync(SKILL_SOURCE, target, { recursive: true, force: true });
  const ok = existsSync(path.join(target, "SKILL.md"));
  console.log(
    ok
      ? `[ok] ${agent.name} -> ${target}`
      : `[fail] ${agent.name} -> ${target} (SKILL.md missing after copy)`,
  );
  return ok;
}

function main() {
  const { dry, list, only } = parseArgs(process.argv.slice(2));

  if (list) {
    console.log("Supported agents and their personal skill directories:");
    for (const agent of AGENTS) {
      console.log(`  ${agent.name.padEnd(16)} ${agent.dir}`);
    }
    return;
  }

  if (!existsSync(SKILL_SOURCE)) {
    console.error(`Skill source not found: ${SKILL_SOURCE}`);
    console.error("Run this script from the repository root.");
    process.exit(1);
  }

  const targets = only.length > 0 ? AGENTS.filter((a) => only.includes(a.name)) : AGENTS;

  if (dry) {
    console.log(`[dry-run] source: ${SKILL_SOURCE}`);
  } else {
    console.log(`[install] source: ${SKILL_SOURCE}`);
  }

  let installed = 0;
  for (const agent of targets) {
    if (copySkill(agent, dry)) installed++;
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