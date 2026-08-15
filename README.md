# Better-md-skill

An AI skill that makes your Markdown documents clear, correct, and easy to read — READMEs, API docs, tutorials, specifications, and changelogs, in any SKILL.md-capable agent (Claude Code, OpenCode, Codex, Gemini CLI, Cursor, GitHub Copilot, and 30+ more).

It follows the [Agent Skills open standard](https://agentskills.io/), so the same files work everywhere with no per-agent edits.

It is not a beautifier. It fixes structure, preserves meaning, verifies claims, and leaves good documents alone.

## What you get

| You | What the skill does for you |
| --- | --- |
| User of an AI agent | Clean, correct, scannable documents on demand — without rewriting your content |
| Developer | A skill you can extend, test, and contribute to, with a 40-case fixture suite |
| Maintainer | Documents that follow GitHub conventions, verify their own links and assets, and never contain fake URLs or images |

## Install in one minute

Copy `skills/better-md-skill/` into your agent's skill directory. Supported targets:

| Agent | Personal skill directory |
| --- | --- |
| OpenCode | `~/.config/opencode/skills/` (also auto-loads `~/.claude/skills/` and `~/.agents/skills/`) |
| Claude Code | `~/.claude/skills/` |
| Agent Skills standard | `~/.agents/skills/` |
| Codex CLI | `~/.codex/skills/` |
| Gemini CLI | `~/.gemini/skills/` |
| GitHub Copilot | `~/.config/github-copilot/skills/` |
| Cursor | `.cursor/skills/` in each project (no global directory) |

Three ways to install:

1. Directly from GitHub via npm (recommended) — installs the skill into all supported agents automatically (postinstall hook)

```bash
npm install -g github:FrekiJoms/better-md-skill
```
2. From a local checkout via the skills CLI
```bash
npx skills add ./better-md-skill --skill better-md-skill -g --copy -y
```

3. From GitHub via the skills CLI
```bash
npx skills add FrekiJoms/better-md-skill --skill better-md-skill -g --copy -y
```

The npm route installs the package and runs its `postinstall` hook, which copies `skills/better-md-skill/` into every supported agent's personal skill directory — no extra steps. From a checkout you can run the same installer manually:

```bash
npm run install:skills          # install to all supported agents
npm run install:skills:dry      # preview without writing
node scripts/install.mjs --agents opencode claude-code
node scripts/install.mjs --list
```

For OpenCode you can also point `skills.paths` at this repository in `opencode.json` (scanned recursively for `**/SKILL.md`).

Restart the agent's session after installing — skills are not hot-reloaded.

## Use it

Ask your agent, for example:

```text
Improve this README using Better-md-skill.
```

```text
Audit this Markdown without changing it.
```

```text
Improve the structure but preserve all content.
```

```text
Make this GitHub README more polished and add appropriate technology icons.
```

The skill picks the right rules for the document type and target renderer (GitHub vs portable CommonMark), then reports what it changed, why, and what remains unverified.

## What it improves

- **Structure** — heading hierarchy, lists, tables, code fences, links, whitespace, fixed per document type
- **Readability** — headings that lead with the reader's goal, chunked prose, restrained emphasis (evidence-based; see `references/reading-psychology.md`)
- **GitHub readiness** — GFM tables, task lists, alerts, relative links, Mermaid, theme-aware images; portable documents stay portable
- **Validation** — a post-edit gate that checks integrity, accessibility, and anti-fabrication
- **Visual design** — verified tech icons, truthful badges, logos, screenshots, diagrams
- **Visual suggestions** — where a screenshot, diagram, or GIF would help but the agent cannot create it, it leaves a precise invisible `VISUAL SUGGESTION` comment in place (below)

## How visual suggestions work

After improving a document, the skill reviews it for visual opportunities. If the current agent cannot create or insert screenshots, images, or other assets, it places a precise, invisible HTML comment exactly where the asset belongs — never at the bottom, never a fake image reference:

```md
## Dashboard

The dashboard provides an overview of sales, revenue, and recent transactions.

<!-- VISUAL SUGGESTION [SCREENSHOT]:
Recommended file: `assets/screenshots/dashboard-overview.png`

Add a screenshot of the main dashboard here.
Show the sidebar, KPI cards, revenue chart, and recent transactions.
Purpose: Provide a visual overview of the application's primary interface.
-->
```

The comment names the asset type (`SCREENSHOT`, `DIAGRAM`, `ARCHITECTURE`, `WORKFLOW`, `GIF`, `VIDEO`, `UI_PREVIEW`, `BEFORE_AFTER`, `CHART`, `ILLUSTRATION`, `LOGO`, `TECH_STACK`), what to show, which details, why, and sometimes a filename or alt text. A human or a visual-capable agent can act on it later. If the agent genuinely has the tools and you asked for visuals, it creates the asset, verifies it exists, then references it.

## How it stays honest

After every edit, the skill re-reads the document and checks:

- Heading hierarchy (single H1, no skipped levels, blank lines around headings)
- Lists, tables, and code fences (consistency, indentation, column counts, language identifiers)
- Whitespace (no trailing spaces, no hard tabs, single final newline)
- Links and image references (well-formed, defined, resolvable, alt text present)
- GitHub-specific syntax (tables, task lists, alerts)
- Content integrity (no lost, reordered, or reworded content; code byte-identical)
- No fabrication (every URL, icon, badge, and asset is real, verified, or documented as a pattern)

## How it works

Eight reference modules are loaded conditionally — only the rules the document needs:

```
skills/better-md-skill/
├── SKILL.md                    Core behavior: workflow, decision rules, preservation rules
└── references/
    ├── github-gfm.md           GitHub Flavored Markdown specifics
    ├── commonmark.md           CommonMark core and portability
    ├── markdownlint.md         markdownlint-inspired checks (MD001–MD059)
    ├── documentation-style.md  GitHub documentation style guide distilled
    ├── reading-psychology.md   How humans read: chunking, crowding, visual noise
    ├── document-patterns.md    Structure patterns per document type
    ├── visual-assets.md        Icons, badges, logos, screenshots, theme-aware images
    └── validation.md           The post-edit validation gate
```

A portable CommonMark document never receives GitHub-only rules; a GitHub README gets the full GFM plus visuals treatment.

## See it in action

Model documents in `skills/better-md-skill/examples/`:

- `README.md`, `API.md`, `tutorial.md`, `specification.md`, `changelog.md`

## Test it

`tests/` holds a 40-case fixture suite: bad headings, broken lists, bad tables, missing code languages, broken links, poor and good READMEs, all supported document types, GitHub alerts, CommonMark vs GFM awareness, technology icons, badges, screenshots, existing assets, light/dark logos, excessive decoration, invalid external assets, visual suggestions, and reading-psychology cases. See `tests/README.md` for how to run it.

## Contribute

1. Fork the repository.
2. Add or improve a fixture in `tests/` for any behavioral change — every capability claim should be covered by a case.
3. Keep reference modules focused and sourced: cite the authoritative standard each rule comes from.
4. Never add fabricated URLs, icons, badges, or assets to examples or fixtures.
5. Run the suite (see `tests/README.md`) before opening a pull request.

## License

MIT — see [LICENSE](./LICENSE).