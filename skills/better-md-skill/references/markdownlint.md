# markdownlint-inspired checks

Authoritative source: <https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md>

Load this reference whenever you modify, audit, or validate any Markdown file. The checks below are **inspired by** markdownlint (MD001–MD059): apply them by inspection — do not claim to have run the real tool unless you actually did.

## Severity guidance

- **Syntax/rendering errors** (the doc breaks or renders wrong): always fix.
- **Consistency errors** (mixed styles): fix when the document is inconsistent within itself; leave alone when the document is uniformly styled differently from the default convention.
- **Style preferences** (line length, ordered-list numbering): fix only when it improves the document without churn; never refactor an already-consistent document to chase defaults.

## Heading rules

| Rule | Check |
|---|---|
| MD001 | Heading levels increment by exactly one at a time — no skipped levels |
| MD003 | One heading style per document (prefer ATX `#`) |
| MD018/MD019 | Exactly one space after the `#` |
| MD022 | Blank lines around headings |
| MD023 | Headings start at column 1 (no indentation) |
| MD024 | No duplicate heading text (exception: changelogs with repeated `### Features` — allow when `siblings_only` reasoning applies) |
| MD025 | Exactly one H1 (top-level) per document |
| MD026 | No trailing punctuation (`.,;:!`) in headings — `?` is acceptable |
| MD036 | Emphasis must not be used as a heading substitute |
| MD041 | Document starts with an H1 (an image-as-heading `<h1><img></h1>` pattern is acceptable on GitHub) |
| MD043 | Optional: required heading structure (only when the project defines one) |

## List rules

| Rule | Check |
|---|---|
| MD004 | Consistent bullet character (`-`, `*`, or `+`) |
| MD005 | Same-level list items share the same indentation |
| MD007 | Nested lists indented consistently (2 spaces is the common convention) |
| MD029 | Ordered list prefixes: all `1.` or sequential `1. 2. 3.` — pick one per document |
| MD030 | One space after the list marker |
| MD032 | Blank lines around lists |

## Whitespace rules

| Rule | Check |
|---|---|
| MD009 | No trailing spaces (2 trailing spaces only as a deliberate hard break) |
| MD010 | No hard tabs (replace with spaces) |
| MD012 | No multiple consecutive blank lines |
| MD013 | Line length: prose ≤ 80 chars; never break URLs/paths/standalone links (exception applies) |
| MD047 | File ends with exactly one newline |

## Code rules

| Rule | Check |
|---|---|
| MD014 | No `$` prefixes on shell commands unless output is shown alongside |
| MD031 | Blank lines around fenced code blocks |
| MD038 | No padding spaces inside inline code spans |
| MD040 | Fenced code blocks have a language identifier (`text` for plain text) |
| MD046 | Fenced style is consistent (no mixing fences and indented blocks) |
| MD048 | Consistent fence character (prefer backticks) |

## Link and image rules

| Rule | Check |
|---|---|
| MD011 | No reversed link syntax `(text)[url]` |
| MD034 | Bare URLs wrapped in `<...>` when a hard link is intended (GFM auto-links anyway — see `github-gfm.md`) |
| MD039 | No spaces inside link text |
| MD042 | No empty links (`[]()`, `[text](#)`) |
| MD045 | All images have alt text |
| MD051 | Link fragments (`#anchor`) match generated heading anchors |
| MD052 | Reference links use defined labels |
| MD053 | No unused or duplicate link reference definitions |
| MD054 | Consistent link style (inline vs reference) per document |
| MD059 | Descriptive link text — never "click here", "here", "link", "more" |

## Table rules

| Rule | Check |
|---|---|
| MD055 | Consistent pipe style (leading/trailing pipes all present or all absent) |
| MD056 | Consistent column count across rows |
| MD058 | Blank lines around tables |

## Emphasis rules

| Rule | Check |
|---|---|
| MD037 | No spaces inside emphasis markers |
| MD049/MD050 | Consistent emphasis/strong markers (prefer asterisks) |

## Application notes

- **GitHub Docs exceptions**: GitHub's own docs disable some rules (e.g., line length in specific contexts, `search-replace` blocks). When auditing GitHub documentation, prefer GitHub's style guide (`documentation-style.md`) over strict markdownlint defaults.
- **Do not "fix"** long code lines, long table cells, or URLs — they are exempt by design.
- **Do not "fix"** a document that is already consistent, even if it uses a non-default convention (e.g., `*` bullets, `1.` numbered lists, no leading table pipes). Consistency within the document wins.
- Changelogs legitimately repeat subheadings (`### Features` under each version) — do not flag or rename them.

## Checklist

- [ ] All syntax-affecting rules pass (rendering is correct)
- [ ] The document is internally consistent (styles unify within the file)
- [ ] No gratuitous style churn on an already-consistent document