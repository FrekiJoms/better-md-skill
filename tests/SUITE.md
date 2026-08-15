# Test suite — case list

One row per fixture. Expected behavior states what the skill **must** do, **must not** do, or may do.

| # | Fixture | Type | Expected behavior |
| --- | --- | --- | --- |
| 01 | `01-bad-headings.md` | Edit | Fix skipped heading levels, missing blank lines around headings, and trailing heading punctuation. No prose rewrites. |
| 02 | `02-multiple-h1.md` | Edit | Collapse to exactly one H1; demote the second H1 to H2 (or merge into the title). No content loss. |
| 03 | `03-broken-lists.md` | Edit | Unify bullet markers, fix indentation and blank lines, one space after markers. Preserve item text exactly. |
| 04 | `04-bad-table.md` | Edit | Fix inconsistent column counts and missing blank lines; unify pipe style. Preserve all cell content. |
| 05 | `05-missing-code-language.md` | Edit | Add language identifiers to all fences; use `text` for plain output. Never alter code contents. |
| 06 | `06-broken-links.md` | Edit | Fix reversed link syntax, empty links, and undefined reference definitions. Must NOT invent replacement URLs. |
| 07 | `07-bad-whitespace.md` | Edit | Remove trailing spaces and hard tabs, collapse multiple blank lines, ensure exactly one final newline. |
| 08 | `08-poor-readme.md` | Edit | Restructure into a standard README pattern (description, features, installation, usage). Preserve every fact; reword only to fix structure. |
| 09 | `09-good-readme.md` | Audit | Make **no changes** (or only trivial fixes). Must recognize an already-good document and say so. |
| 10 | `10-api-documentation.md` | Edit | Preserve signatures and identifiers byte-for-byte; fix structural issues only; handle a long document without truncation or loss. |
| 11 | `11-tutorial.md` | Edit | Keep the numbered step structure; fix only syntax/whitespace issues. No step reordering. |
| 12 | `12-specification.md` | Edit | Keep numbered requirements intact; fix structure only. |
| 13 | `13-changelog.md` | Edit | Do NOT deduplicate repeated `### Added`/`### Fixed` subheadings across versions. Fix only real syntax problems. |
| 14 | `14-github-alerts.md` | Audit | Recognize alerts as intentional GitHub syntax; do not convert or remove them. |
| 15 | `15-commonmark-only.md` | Edit | As a portable document: no GFM features introduced; GitHub-only syntax (if any) flagged or removed. |
| 16 | `16-github-specific.md` | Edit | GitHub-targeted: GFM features (tables, task lists, alerts) validated and corrected where malformed; not stripped. |
| 17 | `17-tech-icons.md` | Improve | Offer/add a visual stack row for the real technologies listed, using only verified URL patterns; no extra technologies. |
| 18 | `18-badges.md` | Improve | Suggest a restrained badge row; badges must be truthful; no fabricated owner/repo dynamic badges. |
| 19 | `19-screenshots.md` | Audit | Image references must keep alt text; no replacement of relative paths with invented URLs. |
| 20 | `20-existing-assets.md` | Improve | Discover and prefer `assets/logo.svg` over external asset URLs. |
| 21 | `21-light-dark-logos.md` | Improve | Use the `<picture>` theme-aware pattern with relative paths; do not invent logo files that do not exist. |
| 22 | `22-excessive-visuals.md` | Edit | Reduce excessive decoration (banners, emoji dividers, redundant badges) to a restrained level without losing meaning. |
| 23 | `23-invalid-external-assets.md` | Audit | Flag broken/unverifiable external image URLs; never fabricate replacements; remove or report rather than invent. |
| 24 | `24-already-good-commonmark.md` | Audit | Portable, already-good document: no changes, no GFM features added. |
| 25 | `25-dashboard-screenshot.md` | Improve | Dashboard section needs a visual: leave a specific `VISUAL SUGGESTION [SCREENSHOT]` right after the Dashboard paragraph — with what to show, which details, and why. No fake image reference. |
| 26 | `26-architecture-diagram.md` | Improve | Architecture needs a diagram: leave a specific `VISUAL SUGGESTION [ARCHITECTURE]` after the components/data-flow content. No invented diagram URL. |
| 27 | `27-tutorial-gui-screenshots.md` | Improve | GUI tutorial steps (installer wizard, profile screen, connections form) each get a specific `SCREENSHOT` suggestion with fields to highlight. Plain CLI steps get none. |
| 28 | `28-workflow-diagram.md` | Improve | Multi-step pipeline gets a `VISUAL SUGGESTION [WORKFLOW]` showing validation → fulfillment → completion, including the exception path. |
| 29 | `29-existing-screenshots.md` | Audit | Existing screenshots already cover the visuals: NO new suggestions for those sections. |
| 30 | `30-existing-tech-icons.md` | Audit | Existing tech icon row already covers the stack: NO `TECH_STACK` suggestion, no duplicate icons. |
| 31 | `31-no-visual-opportunities.md` | Audit | Simple CLI tool: NO suggestions anywhere; report `Visual Review: No additional visuals recommended.` |
| 32 | `32-broken-image-reference.md` | Edit | Remove/replace the broken image reference (file does not exist); may convert it into a `VISUAL SUGGESTION [SCREENSHOT]`. Never keep a broken ref, never fake a path. |
| 33 | `33-poor-alt-text.md` | Edit | Fix/add meaningful alt text on the existing image; do NOT add duplicate suggestions for sections the image already covers. |
| 34 | `34-multiple-visual-opportunities.md` | Improve | Leave four distinct suggestions (WORKFLOW, SCREENSHOT/UI_PREVIEW, ARCHITECTURE, SCREENSHOT) each at the correct location, each specific; none vague or bottom-dumped. |
| 35 | `35-capability-no-visuals.md` | Improve | Run in an environment with no visual tooling: suggestion mode. A specific `VISUAL SUGGESTION` at the Preview section; report states suggestions were inserted. |
| 36 | `36-capability-with-visuals.md` | Improve | Run in an environment with capture + asset creation and user consent: create the real asset, verify it exists, then reference it with alt text. Must NOT leave a suggestion for a created asset. |
| 37 | `37-reading-psychology-wall-of-text.md` | Edit | Walls of text restructured: chunked paragraphs, goal-first headings (no "Introduction"/"Overview" filler), lists/tables where they fit. No content loss. |
| 38 | `38-reading-psychology-crowding.md` | Edit | Decorative marks cut (excessive bold, emoji, ALL CAPS, `!!!`), heading punctuation fixed, inline code limited to real identifiers. Distinct elements look distinct. |
| 39 | `39-reading-psychology-comparison-table.md` | Edit | The plan comparison becomes a table (storage, transfer, support, limits, backups); prose chunks stay short. No invented plan facts. |
| 40 | `40-reading-psychology-consistent-patterns.md` | Edit | Same content type uses the same pattern everywhere (procedures numbered, lists introduced); one name per thing (`config` vs `settings` unified); duplicate install instructions consolidated. No content loss. |
| 41 | `41-hve-style-readme.md` | Audit | Enhanced project-scale README (frontmatter, purpose paragraph, scope CAUTION, Where to Start, Choose Your Path, goal-first navigation tables): already good — make no changes (or only trivial fixes). |
| 42 | `42-goal-first-navigation.md` | Edit | Add a goal-first Navigate table (`| Goal | Go here |`) for the documented intents, a Choose Your Path section (new user → getting started, team lead → standards, contributor → plugin API), and Where to Start steps. Preserve every fact; no invented doc paths beyond the ones already referenced. |

## Cross-cutting expectations (apply to every case)

1. **Integrity**: content, code, commands, identifiers, file paths, version numbers, and URLs unchanged unless the case requires fixing them.
2. **No fabrication**: no invented URLs, icons, badges, image paths, or facts.
3. **Cleaner than original**: the result renders correctly and is not worse than the input.
4. **Minimal intervention**: the skill does not rewrite documents that are already good (cases 09, 24 prove this).
5. **Visual review always runs**: every case ends with a Visual Review outcome (report or suggestion set), even when nothing is recommended (case 31).
6. **Suggestions are invisible and local**: every `VISUAL SUGGESTION` is an HTML comment placed immediately after the content it illustrates — never at the document bottom (case 34 proves multiple placements).
7. **No duplication**: no suggestion where an existing visual already covers the need (cases 29, 30, 33).

## Recording results

Copy this table and mark each row pass/fail with a one-line note:

| # | Result | Note |
| --- | --- | --- |
| 01 | | |
| 02 | | |
| ... | | |