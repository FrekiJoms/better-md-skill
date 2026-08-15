# Document patterns

Structural patterns for the document types this skill supports. Load this reference when creating a new document or when a document's structure does not fit its type. Adapt to the document — never blindly apply a template.

## How to use

1. Identify the document type (below).
2. Check the existing structure against the pattern.
3. Restructure only when the deviation hurts readers; state your reason.

## README

Purpose: get a visitor from zero to productive in under a minute.

### README, main (full — the deliverable when creating or improving a repo-root README)

When **creating or improving the main README** (`README.md` at the repository root), the full pattern below is the deliverable — not a stretch goal. Work through the **mandatory section checklist in this exact order**, then compare the result against `examples/README.md` (the concrete model of this pattern):

1. **Frontmatter** (optional, when the repo has a docs culture): YAML frontmatter with `title`, `description`, `keywords`, `ms.date`, `ms.topic`, `estimated_reading_time`. GitHub renders it as a metadata table at the top of the page.
2. **H1 + hero**: `# Project name`, then a centered banner (author a real SVG per `visual-assets` when one is missing).
3. **Badge row**: license, CI, docs, quality. Only real, verified badges — never fabricated CI or release badges; for a new project, static badges (license, "PRs welcome") are the honest default.
4. **Purpose paragraph**: one paragraph — what it is, when to use it, what it provides. Follow with one "Use it when…" sentence and a short "It provides:" bullet list.
5. **Scope callout**: a `CAUTION` or `NOTE` stating what the project is and is not. Honest scoping builds trust and prevents misuse.
6. **Where to Start**: numbered steps from zero to first useful result, then `TIP` callouts for alternative entry points.
7. **Choose Your Path**: one short entry per reader persona — new user, team lead, contributor — each with exactly one link. Never a paragraph per persona.
8. **Navigate This Repository**: a two-column goal table (`| Goal | Go here |`) mapping every reader intent to its exact path. This is the single highest-value navigation pattern; keep every row a verb-first goal and every cell an anchor link to the matching section.
9. **Tech Stack** (conditional): a restrained icon row (verified, documented icon URLs such as Devicon) near the top, right after the description.
10. **Features**: what it does, in scannable bullets.
11. **Install**: minimal steps from nothing to running.
12. **Quick Start**: the fastest useful example; a small code block beats prose.
13. **API / Configuration** (conditional — only if the project exposes one).
14. **Screenshots**: after the core sections; screenshots the agent cannot produce become `VISUAL SUGGESTION` comments at the exact location.
15. **Documentation**: a guide table (`| Guide | Description |`) for deeper docs, plus a docs-site link when one exists.
16. **Contact / About** (conditional — when the project has them): real addresses only — no invented emails or handles.
17. **Contributing**: link to the guide, open issues, and discussions — three links, no prose.
18. **License**: link or short text.

Rules: every table is goal-first (reader intent → destination); one link per intent, never repeated; link text is the section title (anchor links slugify GitHub headings); all anchors must resolve to real headings; badges truthful; callouts sparse (one scope CAUTION plus TIPs).

**Do not under-deliver**: stopping after improved prose, fixed lists, or a "polished draft" is a failure for a main README. Sections marked *conditional* are omitted only when the project genuinely lacks the content — then record the omission in your final report. Never fake content to fill a section.

**Support detection — degrade only when the context cannot support the full pattern** (non-GitHub renderer, no repo, no assets directory, no docs culture): drop the badge row if badges cannot be verified; drop the hero if no asset can be created; keep the goal table and Where to Start (they work in any renderer); fall back to the minimal README pattern below rather than emitting broken or fabricated parts. Never fake a section to fill the pattern.

### README, minimal (fallback)

For non-GitHub targets, internal quick docs, or when the full pattern is unsupported:

- `# Project name` (H1, often with a logo image above/inside it)
- One-sentence description under the title
- **Features** — what it does, in scannable bullets
- **Installation** — minimal steps from nothing to running
- **Usage** — the fastest useful example; a small code block beats prose
- **API / Configuration** — only if the project exposes one
- **Documentation** — links to deeper docs (API reference, tutorials)
- **Contributing** — link to CONTRIBUTING.md
- **License** — link or short text

Rules: no wall-of-text intros, no marketing fluff, no redundant "what is X" for famous technologies. Screenshots belong near the top (after features) where they show the thing working.

**Scope: the full README pattern applies only to the main README.** Other document types — API documentation, tutorials, how-tos, references, specifications, architecture docs, changelogs, requirements — keep their own patterns below and never receive README-only structures (badge rows, goal-navigation tables, persona sections, tech-stack icon rows). If a non-README document has grown README-style sections, do not add to them; report the drift and leave them alone unless the user asks.

## API documentation

Purpose: allow a developer to use an interface without reading source code.

Per endpoint / function / method:

- Signature in a fenced code block (language specified) — exact, copyable
- One-line description
- Parameters table: name | type | required | description
- Return value and type
- Error cases (when relevant)
- One complete example request + response
- Related endpoints (links)

Rules: signatures and identifiers are sacred — never reformat or "improve" them. Keep the parameter table column count consistent.

## Tutorial

Purpose: teach a complete task, end to end, with working results.

- `# Title` phrased as the outcome ("Build a CLI with Node.js")
- **Prerequisites** — exact versions and prior knowledge
- Numbered steps, one action each; each step ends with a verifiable result ("You should see…")
- Code blocks the reader can copy and run as written (no `$`, no placeholders left unexplained)
- **Next steps** at the end

Rules: never skip steps, never assume unstated state, keep steps ordered and numbered.

## How-to

Purpose: solve one specific problem quickly.

- Short title phrased as the task
- One or two sentences on when this is needed
- Prerequisites (one line)
- Numbered procedure
- Stop. No background essays, no alternatives unless asked.

## Reference

Purpose: complete, accurate listing (CLI flags, config keys, constants).

- Organized by category; alphabetical within category when order is irrelevant
- Tables or definition lists for items: name | default | meaning
- No tutorial prose

## Specification

Purpose: define behavior precisely and unambiguously.

- `# Title` + version + status (draft / stable)
- **Terminology** — define every term used
- **Requirements** numbered (R1, R2, …) so they can be referenced
- **Behavior** described deterministically: inputs, outputs, edge cases
- **Constraints** — non-functional requirements (performance, security, compatibility)
- **Out of scope** — explicitly what this spec does not cover
- **Change history** table or changelog section

Rules: imperative, precise language; no fluff; decisions must be traceable.

## Architecture / design document

- `# Title` + status + date
- **Context** — the problem and constraints
- **Goals / Non-goals**
- **Options considered** — alternatives with trade-offs
- **Decision** — what was chosen and why (links to ADRs when present)
- **Diagram** — ASCII, Mermaid (GitHub target only), or image
- **Consequences** — what this decision affects

## Changelog

Keep a Changelog convention: <https://keepachangelog.com/>

- `# Changelog` (H1); reverse chronological order, newest first
- `## [Unreleased]` at top, then `## [1.0.0] - YYYY-MM-DD`
- Change types as H3s: `### Added`, `### Changed`, `### Deprecated`, `### Removed`, `### Fixed`, `### Security`
- Repeated subheadings across versions are correct — do not rename or deduplicate
- Each version links to its diff when the repo is public: `[1.0.0]: https://github.com/owner/repo/compare/v0.9.0...v1.0.0`

## Requirements / SOP / Troubleshooting / Knowledge base

- **Requirements**: numbered requirements, priorities (must/should/could), acceptance criteria.
- **SOP**: purpose, scope, prerequisites, numbered steps with responsible roles, error handling, rollback.
- **Troubleshooting**: symptom → cause → fix, one problem per section, with a "still broken?" escalation path.
- **Knowledge base**: question or task title, short answer first, then detail, then related links.

## Cross-type rules

- Exactly one H1; hierarchy never skips levels; text between headings and subheadings.
- Facts, identifiers, commands, and code are never "improved" during restructuring.
- Preserve links and assets; update them only if they break.
- When in doubt about intent, ask rather than assume a template.