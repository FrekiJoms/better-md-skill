# CommonMark

Authoritative source: <https://spec.commonmark.org/>

Load this reference when the document must be portable: rendered by multiple renderers (GitLab, npm, static-site generators, editors, forums), stored in a repo used beyond GitHub, or explicitly CommonMark-only.

## Core principle

CommonMark is a plain, unambiguous Markdown spec. Anything beyond it (GFM tables, alerts, task lists, strikethrough, emoji shortcodes, footnotes) is an extension. A portable document must rely only on CommonMark core constructs.

## Core constructs

### Headings

- ATX headings: `#` through `######`, one space after the hashes. H1 is the document title — exactly one H1 (MD025).
- Setext headings (underlines) exist but prefer ATX for consistency.
- Do not skip levels (MD001): `#` → `##` → `###`.
- Surround headings with blank lines (MD022).
- Do not use trailing punctuation in headings (MD026).

### Paragraphs and line breaks

- Paragraphs are separated by blank lines. Line breaks inside a paragraph are soft wraps.
- Two trailing spaces create a hard line break — avoid unless deliberate; prefer blank lines.
- Never use tabs for indentation (MD010).

### Emphasis

- `*emphasis*` and `**strong**` are the portable forms. Underscores (`_text_`) are also CommonMark but can collide with identifiers; prefer asterisks.
- No spaces inside markers (`** bold **` is not emphasis — MD037).
- Do not use emphasis as a heading substitute (MD036); use real headings.

### Lists

- Unordered: `-`, `*`, or `+` — pick one style and stay consistent (MD004). Prefer `-`.
- Ordered: `1.` markers. Content will be numbered by the renderer regardless of the literal numbers; `1.` for every item is valid and diff-friendly, `1. 2. 3.` is also valid. Pick one convention per document.
- Indent nested items by 2–4 spaces, consistently (MD005, MD007). Content of a nested item aligns under the parent's text.
- Surround lists with blank lines (MD032).
- One space after the marker (MD030).

### Blockquotes

- `> ` prefix on each line; blank lines inside a quote use `>` alone.
- Only one space after `>` (MD027).
- A plain blockquote is portable. GFM alert syntax (`> [!NOTE]`) is **not** — see `github-gfm.md`.

### Code

- Fenced code blocks: three or more backticks (or tildes), consistent style (MD048). Indented code blocks (4 spaces) are CommonMark but avoid them — fences are explicit and safer.
- Add a language identifier when the content is code (` ```js `). If the document must not rely on GitHub's highlighter, the identifier is still harmless in CommonMark (it is part of the info string). For plain text, `text` is the convention on GitHub but not portable; omit the identifier only if the renderer cannot handle it — most modern CommonMark renderers ignore the info string.
- Inline code: single backticks; no padding spaces (MD038).

### Links

- Inline: `[text](https://example.com)` or `[text](relative/path.md)`.
- Reference: `[text][label]` with `[label]: https://example.com "title"` defined anywhere in the document. Useful for long URLs or repeated links.
- CommonMark does **not** auto-link bare URLs — `https://example.com` renders as plain text. Wrap in `<https://example.com>` for an explicit link, or use `[text](url)`.
- Escape brackets in link text when needed: `[text \[literal\] text](url)`.

### Images

- `![alt text](path)` — alt text is required for accessibility (MD045).
- Reference form works the same as links: `![alt][label]`.

### HTML

- Inline HTML is allowed by CommonMark and passes through. For maximum portability prefer pure Markdown; reserve HTML for genuinely HTML-only needs (alignment, `<kbd>`, `<details>`).

### Thematic breaks

- `---` with blank lines around it. Keep one consistent style (MD035).

## Escaping

- Escape characters that would otherwise be parsed: `\*literal\*`, `\[text\]`, `\#`, `\>`, `` \` ``.
- Do not over-escape; only escape when needed for correctness.

## Portability rules

- **No GitHub-only syntax** in a portable document: no tables, task lists, alerts, strikethrough, footnotes, emoji shortcodes, `@mentions`, `#issues`.
  - Tables: if the document needs tabular data and must be portable, consider a list or a definition list instead.
  - Task lists: use `- [ ]` only if every target renderer supports it; otherwise plain bullets.
  - Emoji: use Unicode emoji or nothing; `:shortcode:` is GitHub-only.
- **Line length**: keep prose lines reasonably short (80 chars is the common convention; see `markdownlint.md` MD013). Never break URLs or paths.
- **Final newline**: files must end with exactly one newline (MD047).
- **No trailing whitespace** (MD009).
- **One blank line** between blocks; never multiple (MD012).

## Checklist

- [ ] Exactly one H1; no skipped heading levels
- [ ] Consistent list markers and indentation
- [ ] No hard tabs, no trailing spaces, single final newline
- [ ] Code fences with language identifiers
- [ ] Links and images use CommonMark-safe syntax; bare URLs wrapped or linked
- [ ] No GFM-only constructs
- [ ] Files render identically on GitHub and non-GitHub renderers