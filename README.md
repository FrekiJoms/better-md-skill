---
title: Better-md-skill
description: Markdown documentation engineering skill for AI coding agents — creates, improves, restructures, audits, and validates READMEs, API docs, tutorials, and changelogs across every SKILL.md-compatible agent
author: FrekiJoms
ms.date: 2026-08-15
ms.topic: overview
keywords:
  - markdown
  - agent-skills
  - readme
  - documentation
  - gfm
  - commonmark
  - markdownlint
estimated_reading_time: 3
---

## Better-md-skill

[![License](https://img.shields.io/github/license/FrekiJoms/better-md-skill)](./LICENSE)
[![Top Language](https://img.shields.io/github/languages/top/FrekiJoms/better-md-skill)](https://github.com/FrekiJoms/better-md-skill)
[![Agent Skills](https://img.shields.io/badge/Agent%20Skills-standard-blue)](https://agentskills.io/)

Better-md-skill is a Markdown documentation engineering skill for AI coding agents. It creates, improves, restructures, audits, and validates Markdown — READMEs, API docs, tutorials, specifications, and changelogs — with CommonMark and GitHub Flavored Markdown awareness, markdownlint-inspired checks, GitHub documentation style, evidence-based reading psychology, and visual README design.

Use it when you want AI-assisted Markdown work to be correct, readable, and standards-aligned. It provides:

* Structured workflows for every document type — with diff-oriented, meaning-preserving edits
* A validation gate that verifies links, assets, and content integrity — and never fabricates
* Evidence-based readability rules — goal-first headings, chunked prose, restrained emphasis
* Visual asset suggestions — precise invisible comments where screenshots or diagrams belong

> [!CAUTION]
> Better-md-skill is an opinionated quality standard, not a beautifier. It deliberately leaves good documents alone, never rewrites content beyond structure, and refuses to invent URLs, icons, badges, or image paths. Treat it as a standards layer on top of your agent, not a content author.

## Where to Start

1. Install the skill into your agent (see [Install](#install)).
2. Restart your agent's session — skills are loaded at session start.
3. Open a document and ask your agent:

```text
Improve this README using Better-md-skill.
```

> [!TIP]
> For a check without changes:
>
> ```text
> Audit this Markdown without changing it.
> ```
>
> The skill reports what it changed, why, and what remains unverified.

## Choose Your Path

* New to the skill: Start with [Install](#install) and [Use it](#use-it) to improve your first document.
* Evaluating it: Run the [test suite](tests/README.md) — 42 cases covering every capability.
* Extending it: Read the [Contributing Guide](#contributing) and add a fixture for any behavioral change.

## Navigate This Repository

| Goal | Go here |
| --- | --- |
| Install into your agent | [Install](#install) |
| Improve a document | [Use it](#use-it) |
| See what the skill improves | [What it improves](#what-it-improves) |
| Understand visual suggestions | [How visual suggestions work](#how-visual-suggestions-work) |
| Check how validation works | [How it stays honest](#how-it-stays-honest) |
| See the architecture | [How it works](#how-it-works) |
| Read model documents | [See it in action](#see-it-in-action) |
| Run the test suite | [Test it](#test-it) |
| Contribute | [Contributing](#contributing) |

## Install

The skill follows the [Agent Skills open standard](https://agentskills.io/), so the same files work in any SKILL.md-capable agent: Claude Code, OpenCode, Codex, Gemini CLI, Cursor, GitHub Copilot, and 30+ more.

```bash
npm install -g https://github.com/FrekiJoms/better-md-skill/archive/refs/heads/main.tar.gz
```

The `postinstall` hook copies `skills/better-md-skill/` into every supported agent's personal skill directory. The tarball URL is recommended over the `github:owner/repo` shorthand, whose git-dependency packaging is unreliable on some npm 11.x versions.

| Agent | Personal skill directory |
| --- | --- |
| OpenCode | `~/.config/opencode/skills/` (also auto-loads `~/.claude/skills/` and `~/.agents/skills/`) |
| Claude Code | `~/.claude/skills/` |
| Agent Skills standard | `~/.agents/skills/` |
| Codex CLI | `~/.codex/skills/` |
| Gemini CLI | `~/.gemini/skills/` |
| GitHub Copilot | `~/.config/github-copilot/skills/` |
| Cursor | `.cursor/skills/` in each project (no global directory) |

> [!TIP]
> Alternative installs:
>
> ```bash
> # From a local checkout via the skills CLI
> npx skills add ./better-md-skill --skill better-md-skill -g --copy -y
>
> # From GitHub via the skills CLI
> npx skills add FrekiJoms/better-md-skill --skill better-md-skill -g --copy -y
>
> # From a checkout, manually
> npm run install:skills          # install to all supported agents
> npm run install:skills:dry      # preview without writing
> node scripts/install.mjs --agents opencode claude-code
> node scripts/install.mjs --list
> ```
>
> For OpenCode you can also point `skills.paths` at this repository in `opencode.json` (scanned recursively for `**/SKILL.md`). Restart the agent's session after installing — skills are not hot-reloaded.

## Use it

Ask your agent, for example:

```text
Improve this README using Better-md-skill.
```

```text
Improve the structure but preserve all content.
```

```text
Make this GitHub README more polished and add appropriate technology icons.
```

The skill picks the right rules for the document type and target renderer (GitHub vs portable CommonMark), then reports what it changed, why, and what remains unverified.

## What it improves

* **Structure** — heading hierarchy, lists, tables, code fences, links, whitespace, fixed per document type
* **Readability** — headings that lead with the reader's goal, chunked prose, restrained emphasis (evidence-based; see `references/reading-psychology.md`)
* **GitHub readiness** — GFM tables, task lists, alerts, relative links, Mermaid, theme-aware images; portable documents stay portable
* **Validation** — a post-edit gate that checks integrity, accessibility, and anti-fabrication
* **Visual design** — verified tech icons, truthful badges, logos, screenshots, diagrams
* **Visual suggestions** — where a screenshot, diagram, or GIF would help but the agent cannot create it, it leaves a precise invisible `VISUAL SUGGESTION` comment in place (below)

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

* Heading hierarchy (single H1, no skipped levels, blank lines around headings)
* Lists, tables, and code fences (consistency, indentation, column counts, language identifiers)
* Whitespace (no trailing spaces, no hard tabs, single final newline)
* Links and image references (well-formed, defined, resolvable, alt text present)
* GitHub-specific syntax (tables, task lists, alerts)
* Content integrity (no lost, reordered, or reworded content; code byte-identical)
* No fabrication (every URL, icon, badge, and asset is real, verified, or documented as a pattern)

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

## Documentation

| Guide | Description |
| --- | --- |
| [See it in action](#see-it-in-action) | Model documents for every supported type |
| [Test it](#test-it) | 42-case fixture suite and how to run it |
| [Tests reference](tests/README.md) | Test harness usage and capability matrix |
| [Test cases](tests/SUITE.md) | Expected behavior per fixture |
| [License](./LICENSE) | MIT |

## See it in action

Model documents in `skills/better-md-skill/examples/`:

* `README.md` — a model GitHub README
* `API.md` — a model API reference
* `tutorial.md` — a model tutorial
* `specification.md` — a model specification
* `changelog.md` — a model Keep a Changelog changelog

## Test it

`tests/` holds a 42-case fixture suite: bad headings, broken lists, bad tables, missing code languages, broken links, poor and good READMEs, all supported document types, GitHub alerts, CommonMark vs GFM awareness, technology icons, badges, screenshots, existing assets, light/dark logos, excessive decoration, invalid external assets, visual suggestions, and reading-psychology cases. See `tests/README.md` for how to run it.

## Contributing

1. Read the [test harness docs](tests/README.md) to understand how behavior is verified.
2. Add or improve a fixture in `tests/` for any behavioral change — every capability claim should be covered by a case.
3. Keep reference modules focused and sourced: cite the authoritative standard each rule comes from.
4. Never add fabricated URLs, icons, badges, or assets to examples or fixtures.
5. Run the suite before opening a pull request.

## License

[MIT](./LICENSE) — see [LICENSE](./LICENSE) for the full text.