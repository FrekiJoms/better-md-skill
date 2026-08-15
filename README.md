# Better-md-skill

An intelligent Markdown documentation engineering skill for OpenCode. It creates, formats, restructures, improves, audits, and validates Markdown — READMEs, API docs, tutorials, specifications, and changelogs — with CommonMark and GitHub Flavored Markdown awareness, markdownlint-inspired checks, GitHub documentation style, and visual README design.

This is not a Markdown beautifier. It understands structure, semantics, standards, GitHub conventions, accessibility, validation, and visual design — and it knows when to leave a document alone.

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
- **Accessibility** — alt text, heading structure, inclusive language, descriptive links
- **Modular reference architecture** — seven conditional reference modules; only relevant standards are loaded

## Installation

The skill lives in `skills/better-md-skill/`. Install it with one of these options (both verified against the OpenCode documentation):

### Option A: Point OpenCode at this repository (recommended)

Add the repository's `skills` directory to your OpenCode configuration. In your global config (`~/.config/opencode/opencode.json`) or project config (`opencode.json`):

```json
{
  "$schema": "https://opencode.ai/config.json",
  "skills": {
    "paths": ["C:/path/to/better-md-skill/skills"]
  }
}
```

OpenCode scans the configured paths recursively for `**/SKILL.md`.

### Option B: Copy the skill into a standard location

Copy the `better-md-skill` folder to one of OpenCode's discovered skill directories:

```text
~/.config/opencode/skills/better-md-skill/   (global)
.opencode/skills/better-md-skill/            (project)
```

OpenCode also auto-loads skills from `~/.claude/skills/` and `~/.agents/skills/` if you prefer those locations.

After installing, restart OpenCode — configuration is loaded at startup and is not hot-reloaded.

## Usage

Once installed, the skill appears in the `skill` tool's available list and triggers on Markdown work. Ask OpenCode to:

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