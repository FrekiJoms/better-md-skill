# Document patterns

Structural patterns for the document types this skill supports. Load this reference when creating a new document or when a document's structure does not fit its type. Adapt to the document — never blindly apply a template.

## How to use

1. Identify the document type (below).
2. Check the existing structure against the pattern.
3. Restructure only when the deviation hurts readers; state your reason.

## README

Purpose: get a visitor from zero to productive in under a minute.

- `# Project name` (H1, often with a logo image above/inside it)
- One-sentence description under the title
- Badges (optional, restrained) and/or tech-stack icons
- **Features** — what it does, in scannable bullets
- **Installation** — minimal steps from nothing to running
- **Usage** — the fastest useful example; a small code block beats prose
- **API / Configuration** — only if the project exposes one
- **Documentation** — links to deeper docs (API reference, tutorials)
- **Contributing** — link to CONTRIBUTING.md
- **License** — link or short text

Rules: no wall-of-text intros, no marketing fluff, no redundant "what is X" for famous technologies. Screenshots belong near the top (after features) where they show the thing working.

### README, enhanced (project-scale)

The baseline pattern above gets visitors productive. For project-scale repositories — multiple docs, teams, operational tooling — add these structures (the pattern behind high-quality large-scale READMEs):

- **Frontmatter** (optional, when the repo has a docs culture): YAML frontmatter with `title`, `description`, `keywords`, etc. GitHub renders it as a metadata table at the top of the page.
- **Badge row** directly under the H1: CI status, license, docs, quality. Only real, verified badges — never fabricated CI or release badges.
- **Purpose paragraph**: one paragraph — what it is, when to use it, what it provides. Follow with one "Use it when…" sentence and a short "It provides:" bullet list.
- **Scope callout**: a `CAUTION` or `NOTE` stating what the project is and is not (stable platform vs. rapidly evolving framework). Honest scoping builds trust and prevents misuse.
- **Where to Start**: numbered steps from zero to first useful result, then `TIP` callouts for alternative entry points (CLI, plugin, extension).
- **Choose Your Path**: one short entry per reader persona — new user, team lead, contributor — each with exactly one link. Never a paragraph per persona.
- **Navigate This Repository**: a two-column goal table (`| Goal | Go here |`) mapping every reader intent to its exact path. This is the single highest-value navigation pattern; keep every row a verb-first goal.
- **Documentation**: a guide table (`| Guide | Description |`) for deeper docs, plus a docs-site link when one exists.
- **Operational sections** (labels, workflows, governance, security): short tables, only when the repo actually has them.
- **Contributing**: link to the guide, open issues, and discussions — three links, no prose.
- **License**: link, plus short paragraphs only for license clarifications (third-party content).
- **Footer**: optional one-line signature; never a fake "crafted by" claim.

Rules: every table is goal-first (reader intent → destination); one link per intent, never repeated; badges truthful; callouts sparse (one scope CAUTION plus TIPs); each section earns its place — omit sections the repo does not need.

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