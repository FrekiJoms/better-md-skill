# GitHub Flavored Markdown (GFM)

Authoritative sources:

- GFM spec: <https://github.github.com/gfm/>
- GitHub basic writing and formatting syntax: <https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax>

Load this reference only when the document targets GitHub (a GitHub-hosted README, issue, discussion, or wiki page).

## What GFM adds beyond CommonMark

GFM is a superset of CommonMark. GitHub renders all CommonMark constructs, plus:

| Feature | Syntax | Notes |
|---|---|---|
| Tables | `\| a \| b \|` + delimiter row | Need a header row and a delimiter row of `---`. Column alignment via colons (`:---`, `:---:`, `---:`). |
| Task lists | `- [ ]` / `- [x]` | Works in issues, PRs, and READMEs rendered on GitHub. Only `[x]`/`[X]` marks done. |
| Strikethrough | `~~text~~` | |
| Autolinks | `https://example.com` | Bare URLs are auto-linked in GFM (unlike CommonMark). Also `www.` and email addresses. |
| Footnote references | `[^1]` with `[^1]: note` at bottom | Rendered as numbered footnotes. |
| Alerts | `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]` | GitHub-only blockquote syntax. Rendered as colored callouts. Must be the first text in the blockquote. |
| Emoji shortcodes | `:rocket:` | Render as emoji on GitHub. Not portable. |
| Mention / issue references | `@user`, `#123`, `owner/repo#456`, `SHA` | Auto-link on GitHub only. |
| Relative links | `[docs](docs/guide.md)`, `[logo](./assets/logo.svg)` | Resolve against the repository on GitHub. |
| Mermaid and Math | ` ```mermaid ` fences, `$...$` / `$$...$$` | Rendered in GitHub Markdown preview and READMEs. |
| Syntax highlighting | ` ```language ` fences | GitHub uses Linguist; ` ```text ` for plain text. |

## GFM rules to apply

### Tables

- A GFM table needs a header row and a delimiter row; every cell in the delimiter row is at least three `-` characters (padding colons allowed).
- Keep column counts consistent across rows (markdownlint MD056).
- Choose a pipe style and keep it consistent in the document: `leading_and_trailing` (GitHub docs style) or `no_leading_or_trailing` (common in READMEs). Never mix.
- Keep cell contents simple: no block content inside cells. `<br>` is the standard line-break workaround in tables.
- Surround tables with blank lines (MD058).

### Task lists

- `- [ ]` for incomplete, `- [x]` (or `- [X]`) for complete. Use exactly one space between brackets.
- Task lists are only interactive in issues/PRs; in READMEs they render statically but are still conventional.

### Alerts

- Syntax: `> [!NOTE]` on the first line of a blockquote, followed by `> ` lines.
- Use sparingly: at most one alert per section; never consecutive alerts. If the content is longer than a couple of sentences or needs a list, use a section heading instead.
- Pick the right type: `NOTE` (extra context), `TIP` (recommendation/best practice), `IMPORTANT` (must-know), `WARNING` (risk, destructive), `CAUTION` (dangerous/destructive, data loss).
- Alerts are GitHub-only. For CommonMark-portable documents, use plain blockquotes or nothing.

### Links

- GFM auto-links bare URLs — no need for `<...>` angle brackets (CommonMark does not auto-link; see `commonmark.md`).
- Use relative links for intra-repo references; they work on GitHub and in forks.
- Link text should be descriptive, never "click here" or "link" (markdownlint MD059).

### Code

- Always specify a language after the opening fence (MD040): ` ```js `, ` ```tsx `, ` ```bash `, ` ```text `.
- Use `text` for plain output blocks.
- Do not prefix shell commands with `$` unless you also show output (MD014).

### Images

- Relative image paths (`./docs/images/feature.png`) render on GitHub and travel with the repo. Prefer them over absolute repo URLs.
- Always include descriptive alt text (MD045).

## What NOT to assume

- GFM features do not render on GitLab, npm, or most static-site generators. If the target renderer is not GitHub, load `commonmark.md` instead and drop GitHub-only features.
- Alert syntax changed over time (`[!NOTE]` inside a blockquote is the current form; older `**Note:**` headings are legacy and should be converted only when the document is GitHub-targeted).
- GitHub heading anchors are generated from heading text (lowercase, spaces → hyphens, punctuation stripped, duplicates get `-1`, `-2`, …). When renaming headings, check for broken fragment links (MD051).

## Checklist

- [ ] Tables have header + delimiter rows and consistent column counts
- [ ] Pipe style is consistent across all tables
- [ ] Alerts used sparingly with the correct type keyword
- [ ] Task list markers use `[ ]` / `[x]` with one space
- [ ] All code fences have language identifiers
- [ ] No `$` command prefixes without shown output
- [ ] Image references are relative where possible and have alt text
- [ ] No GitHub-only syntax in documents that must stay portable