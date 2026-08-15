# Better-md-skill

An intelligent Markdown documentation engineering skill for AI coding agents. It creates, formats, restructures, improves, audits, and validates Markdown — READMEs, API docs, tutorials, specifications, and changelogs — with CommonMark and GitHub Flavored Markdown awareness, markdownlint-inspired checks, GitHub documentation style, and visual README design.

This is not a Markdown beautifier. It understands structure, semantics, standards, GitHub conventions, accessibility, validation, and visual design — and it knows when to leave a document alone.

Built on the [Agent Skills open standard](https://agentskills.io/) (a `SKILL.md` with `name` + `description` frontmatter and plain-Markdown instructions), it works in any compliant agent: Claude Code, OpenCode, Codex, Gemini CLI, Cursor, GitHub Copilot, and 30+ more — the same files, no per-agent edits.

## Features

- **Markdown restructuring** — fix heading hierarchy, lists, tables, code fences, links, and whitespace
- **Documentation improvement** — structure documents to fit their type: README, API reference, tutorial, how-to, reference, specification, architecture, changelog, requirements, SOP, troubleshooting, knowledge-base
- **GitHub README optimization** — standard README structure, meaningful badges, restrained visual design
- **Markdown validation** — post-edit validation gate with integrity and anti-fabrication checks
- **GFM support** — tables, task lists, alerts, footnotes, relative links, Mermaid, theme-aware images
- **CommonMark awareness** — keeps portable documents portable; never injects GitHub-only syntax
- **markdownlint-inspired checks** — MD001–MD059 applied by inspection, with judgment about what to fix and what to leave
- **Technology icons** — verified Devicon / Simple Icons URL patterns for tech-stack rows
- **Badges** — truthful, restrained shields.io badges (static and dynamic patterns)
- **Visual README improvements** — logos, screenshots, diagrams, light/dark theme-aware assets
- **Visual asset suggestions** — after improving a document, it identifies where a screenshot, diagram, GIF, or video would significantly help, and leaves precise invisible `VISUAL SUGGESTION` comments exactly where the asset belongs when the agent cannot create it
- **Accessibility** — alt text, heading structure, inclusive language, descriptive links
- **Modular reference architecture** — seven conditional reference modules; only relevant standards are loaded

## Visual asset suggestions

Better-md-skill can identify visual opportunities in documentation. When the current agent cannot create or insert screenshots, images, or other assets, it places precise, invisible `VISUAL SUGGESTION` comments directly where those assets should be added — never at the bottom of the document, and never fake image references.

The skill first inspects the document and repository for existing assets, then runs a final Visual Asset Review after the Markdown improvement pass. Each suggestion names the asset type (`SCREENSHOT`, `DIAGRAM`, `ARCHITECTURE`, `WORKFLOW`, `GIF`, `VIDEO`, `UI_PREVIEW`, `BEFORE_AFTER`, `CHART`, `ILLUSTRATION`, `LOGO`, `TECH_STACK`), describes what to show and which details to capture, explains why the visual helps, and may recommend a filename or alt text.

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

The comment is an HTML comment, so it stays invisible when rendered on GitHub — a human or a visual-capable agent can act on it later. If the agent genuinely has screenshot capture or image generation **and** the user wants the visual, the skill may create the asset and verify it exists before referencing it. It never pretends to have created an image, never invents paths, and never inserts broken image links.

## Installation

The skill lives in `skills/better-md-skill/` and is standards-compliant, so any SKILL.md-capable agent can load it. Supported targets and their personal skill directories:

| Agent | Personal skill directory |
| --- | --- |
| OpenCode | `~/.config/opencode/skills/` (also auto-loads `~/.claude/skills/` and `~/.agents/skills/`) |
| Claude Code | `~/.claude/skills/` |
| Agent Skills standard | `~/.agents/skills/` |
| Codex CLI | `~/.codex/skills/` |
| Gemini CLI | `~/.gemini/skills/` |
| GitHub Copilot | `~/.config/github-copilot/skills/` |
| Cursor | `.cursor/skills/` in each project (no global directory) |

### Option 1: `npx skills` (recommended)

The [skills CLI](https://skills.sh) installs skills from GitHub or local paths into any agent:

```bash
# From a local checkout
npx skills add ./better-md-skill --skill better-md-skill -g --copy -y

# From GitHub (after publishing the repository)
npx skills add YOUR-GITHUB-USERNAME/better-md-skill --skill better-md-skill -g --copy -y
```

Target specific agents with `-a claude-code -a opencode -a codex ...` (run `npx skills --help` for the current list of supported agents).

### Option 2: npm package

The repository is an npm package (`npm i -g better-md-skill` once published). From a checkout, the bundled installer copies the skill into every supported agent's directory:

```bash
npm run install:skills          # install to all supported agents
npm run install:skills:dry      # preview without writing
node scripts/install.mjs --agents opencode claude-code
node scripts/install.mjs --list
```

### Option 3: Manual

Copy the `skills/better-md-skill/` folder into the personal skill directory of any agent from the table above, e.g.:

```bash
cp -r skills/better-md-skill ~/.config/opencode/skills/better-md-skill
```

For OpenCode specifically, you can alternatively point `skills.paths` at this repository in `opencode.json` (scanned recursively for `**/SKILL.md`).

After installing, restart each agent's session — skills are loaded at session start and are not hot-reloaded.

## Usage

Once installed, the skill appears in your agent's skill list and triggers on Markdown work. Ask your agent to:

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

The skill decides which reference modules to load based on the document type and target renderer (GitHub vs portable CommonMark), and it reports what it changed, why, and what remains unverified.

## How the skill validates Markdown

After every edit, the skill re-reads the document and checks:

- Heading hierarchy (single H1, no skipped levels, blank lines around headings)
- Lists, tables, and code fences (consistency, indentation, column counts, language identifiers)
- Whitespace (no trailing spaces, no hard tabs, single final newline)
- Links and image references (well-formed, defined, resolvable, alt text present)
- GitHub-specific syntax correctness (tables, task lists, alerts)
- Content integrity (no lost, reordered, or reworded content; code byte-identical)
- No fabrication (every URL, icon, badge, and asset is real, verified, or documented as a pattern)

See `tests/SUITE.md` for the full case list, including "already-good" documents where the skill must make no changes.

## Architecture

```
skills/better-md-skill/
├── SKILL.md                    Core behavior: workflow, decision rules, preservation rules
└── references/
    ├── github-gfm.md           GitHub Flavored Markdown specifics
    ├── commonmark.md           CommonMark core and portability
    ├── markdownlint.md         markdownlint-inspired checks (MD001–MD059)
    ├── documentation-style.md  GitHub documentation style guide distilled
    ├── document-patterns.md    Structure patterns per document type
    ├── visual-assets.md        Icons, badges, logos, screenshots, theme-aware images
    └── validation.md           The post-edit validation gate
```

References are loaded conditionally — a portable CommonMark document never receives GitHub-only rules, and a GitHub README gets the full GFM + visuals treatment.

## Examples

Model documents in `skills/better-md-skill/examples/`:

- `README.md` — a model GitHub README
- `API.md` — a model API reference
- `tutorial.md` — a model tutorial
- `specification.md` — a model specification
- `changelog.md` — a model Keep a Changelog changelog

## Tests

`tests/` contains a 24-case fixture suite covering bad headings, broken lists, bad tables, missing code languages, broken links, poor READMEs, good READMEs, all supported document types, GitHub alerts, CommonMark vs GFM renderer awareness, technology icons, badges, screenshots, existing assets, light/dark logos, excessive visual decoration, invalid external assets, and already-good documents. See `tests/README.md` for how to run it.

## Contributing

Contributions are welcome:

1. Fork the repository.
2. Add or improve a fixture in `tests/` for any behavioral change — every capability claim should be covered by a case.
3. Keep reference modules focused and sourced: cite the authoritative standard each rule comes from.
4. Never add fabricated URLs, icons, badges, or assets to examples or fixtures.
5. Run the suite (see `tests/README.md`) before opening a pull request.

## License

MIT — see [LICENSE](./LICENSE).