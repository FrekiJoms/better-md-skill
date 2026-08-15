# Reading psychology

How humans actually read technical documents — and what that means for Markdown structure and style.

Evidence base: visual attention span research (Awadh et al., 2022, *Frontiers in Psychology*, <https://pmc.ncbi.nlm.nih.gov/articles/PMC9723150/>). Readers identify elements in parallel, but the span is limited; crowding and visual complexity slow identification; reducing visual load frees attention for comprehension.

Load this reference for every document with human-facing prose — READMEs, guides, tutorials, API descriptions, changelogs. It works alongside `documentation-style.md` and `document-patterns.md`.

## The model

1. **Limited parallel span.** Readers process a small number of elements at once. Small, distinct chunks are read faster and understood better than continuous dense text.
2. **Crowding hurts.** Elements close together and visually similar interfere with each other. Separation and distinctness are not decoration — they are recognition aids.
3. **Complex forms slow identification.** Characters and elements that look alike are confused and take longer to identify. Make distinct things look distinct.
4. **Every mark costs attention.** Bold, italics, emoji, symbols, ALL CAPS, and excessive inline code all consume the same limited attention — attention that otherwise goes to meaning.
5. **Fluency frees comprehension.** The less effort reading costs, the more attention remains for understanding. Structure exists to reduce effort.

## Rules

### 1. Lead with the reader's goal

Every heading and first sentence should state what the reader gets: `Install`, `Run`, `Deploy`, `Troubleshoot`. Not `Introduction to`, `Overview of`, `About the` — those add a processing step without information.

### 2. Chunk before you write

- One idea per paragraph; paragraphs of two to four sentences.
- Prefer lists and tables over prose walls. Comparisons belong in tables (parallel processing); procedures in numbered lists.
- Break long sections into subheadings when they exceed roughly seven lines of prose.

### 3. Make distinct things look distinct

- Clear heading levels: one H1, no skipped levels, sentence case.
- One consistent marker style per list type.
- Tables for anything with columns of comparable values; never reword a table into prose.

### 4. Reduce crowding

- Blank lines between elements; never run headings, lists, or code tight against text.
- Keep code sample lines short (about 60 characters).
- Keep tables narrow: few columns, short cells. A wall of cells is a wall of text.

### 5. Cut decorative marks

- Bold: at most five contiguous words, sparse.
- No emoji as meaning carriers; no ALL CAPS runs; no repeated punctuation (`!!!`, `???`).
- Inline code only for identifiers, commands, and paths — not for emphasis.
- One restrained badge row; no animated dividers.

### 6. Be predictable

Same content type, same pattern, everywhere in the document:

- Procedures always numbered; lists always introduced by a sentence.
- Consistent heading phrasing: all sentence case, all noun phrases or all questions.
- One name per thing — never alternate between `config`, `configuration file`, and `settings` for the same item.

### 7. Write short

Short sentences, familiar words, one clause per idea. Every sentence should earn its place; if removing a sentence loses nothing, remove it.

## Checklist

- [ ] Every heading states what the reader gets; no `Introduction`/`Overview` filler
- [ ] Prose is chunked: short paragraphs, lists, or tables where appropriate
- [ ] No wall of text longer than about seven lines without a subheading
- [ ] Distinct elements are visually distinct; markers and heading levels consistent
- [ ] Blank lines separate elements; code lines and table cells are short
- [ ] Decorative marks minimal: sparse bold, no emoji meaning, no ALL CAPS runs
- [ ] Same content type always uses the same pattern; one name per thing
- [ ] Sentences are short; nothing removable remains