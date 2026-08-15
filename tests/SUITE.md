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

## Cross-cutting expectations (apply to every case)

1. **Integrity**: content, code, commands, identifiers, file paths, version numbers, and URLs unchanged unless the case requires fixing them.
2. **No fabrication**: no invented URLs, icons, badges, image paths, or facts.
3. **Cleaner than original**: the result renders correctly and is not worse than the input.
4. **Minimal intervention**: the skill does not rewrite documents that are already good (cases 09, 24 prove this).

## Recording results

Copy this table and mark each row pass/fail with a one-line note:

| # | Result | Note |
| --- | --- | --- |
| 01 | | |
| 02 | | |
| ... | | |