# Documentation style

Distilled from GitHub's documentation style guide: <https://docs.github.com/en/contributing/style-guide-and-content-model/style-guide>

Load this reference when improving, restructuring, or writing documentation prose — especially READMEs, API docs, tutorials, and how-tos. The goal is clarity and consistency, not literary style. Consistency and grammatical correctness matter less than clarity and meaning.

## Core approach

- Simple. Guidelines should be easy to apply to a range of scenarios.
- Decide by what is best for the reader, not by grammar rules alone.
- Focus on high-impact, high-value scenarios.

## Headers

- Headers describe the content under them, in sentence case (capitalize only the first word and proper nouns).
- Headers can be phrased as questions ("Why do I need this?").
- Start at H2 within an article (the title is the H1). Never skip levels.
- Every header at the same level must be unique.
- There must be text between a header and a subheader.

## Sentences and voice

- Use the second person and imperative mood for instructions: "Open the file."
- Prefer active voice.
- Use "must" only when a requirement is absolute; "can" for capability; "may" for permission.
- Avoid "please", "easily", "simply", "just" — they add noise.

## Lists

- Capitalize the first letter of each list item.
- Use periods at the end of list items only if the item is a complete sentence.
- Term-and-definition lists: `* `foo`: definition.`
- Unordered lists: alphabetize when order is irrelevant; order by importance when it matters. Use `*` for list items.
- Introduce lists with a descriptive sentence, not "the following" or "these": "SMS authentication is supported in these countries:" — not "There are several articles… See the following:"
- **Procedures are always numbered lists.** Give prerequisites before the procedure, not inside steps.
- Step structure: optional first ("Optionally, to…"), then reason/result, then location, then action: "Under your organization name, click **Settings**."

## Code

- Keep code sample lines to about 60 characters.
- Place explanatory text before the code block, not as comments inside it.
- Specify the language after the opening fence.
- Placeholders in ALL CAPS with kebab-case: `git init YOUR-REPOSITORY`. Explain what to replace.
- No `$` prompts before commands — they break copy-paste. If output is shown, comment it out:
  ```shell
  git lfs install
  # Git LFS initialized.
  ```
- Short command names: inline code. Complex commands: fenced blocks.
- File and directory names in backticks: `README.md`, `.github/workflows/`.
- In YAML examples, indent nested sequences with two spaces.

## Links

- Be frugal with links; only link what the reader needs.
- Use descriptive, meaningful link text — never "click here", "here", "more".
- Do not include punctuation inside a hyperlink: `[AUTOTITLE](/path/to/page).`
- Do not repeat the same link more than once in an article.
- Use the page's title as the link text.
- Optional/related links belong in a "Further reading" or "Next steps" section.

## Emphasis

- Use bold to emphasize a few words — sparingly, at most five contiguous words.
- Never use bold as the only way to convey meaning (accessibility).
- Use headings, not bold, to structure sections.

## Alerts

- Use alerts sparingly: at most one per section, never consecutive.
- Keep them concise — one or two sentences. Longer content belongs under a heading.
- Types: `NOTE` (extra context), `TIP` (best practice), `IMPORTANT` (must-know), `WARNING` (risk), `CAUTION` (dangerous/destructive). See `github-gfm.md` for syntax.

## Images

- Every image needs alt text (see "Accessibility" below).
- No animated GIFs in documentation (static screenshots preferred).
- Use screenshots only where they help; never use screenshots to convey commands or output.

## Placeholders

- ALL CAPS, kebab-case for multi-word placeholders. Explain what to replace it with.

## Accessibility

- Alt text for every image: express the core idea, 40–150 characters, ending with punctuation, not starting with "Image…" or "Graphic…".
- Use inclusive language: allowlist/denylist, not whitelist/blacklist; default branch, not master.
- Do not rely on color or formatting alone to convey meaning.
- Headings must make sense out of context (screen readers navigate by headings).

## Tone

- Be concise; every sentence should earn its place.
- Write for the reader's goal, not the product's features.
- Use the title of a section as the anchor for "see X later in this article" links.

## Checklist

- [ ] Sentence case headings, unique at each level, no skipped levels
- [ ] Procedures use numbered lists; prerequisites stated up front
- [ ] Code blocks: language specified, no `$` prompts, ALL-CAPS placeholders
- [ ] Links are descriptive, non-repetitive, punctuation outside the link
- [ ] Emphasis used sparingly; alerts used sparingly and correctly typed
- [ ] All images have meaningful alt text
- [ ] Inclusive, active, concise language