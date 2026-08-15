---
name: better-md-skill
description: Improve, restructure, format, audit, and validate Markdown documents — READMEs, API docs, tutorials, specifications, changelogs, and technical documentation — using CommonMark and GitHub Flavored Markdown conventions, markdownlint-inspired checks, GitHub documentation style, and visual README design (technology icons, badges, screenshots, theme-aware logos). Use when creating or editing Markdown files, improving or polishing a GitHub README, auditing Markdown quality without changing it, fixing Markdown syntax, structure, tables, lists, links, or whitespace, or adding appropriate visual elements to documentation.
license: MIT
compatibility: claude-code, opencode, codex, gemini-cli, cursor, github-copilot, agents-standard
metadata:
  renderers: github, commonmark, gitlab, generic
  document-types: readme, api, tutorial, how-to, reference, specification, architecture, changelog, requirements, sop, troubleshooting, knowledge-base
---

# Better-md-skill

An intelligent Markdown documentation engineering skill. It understands structure, semantics, standards, GitHub conventions, accessibility, validation, and visual README design. It knows when to improve something, when to leave something alone, and when to ask for clarification.

This is **not** a Markdown beautifier. Never optimize for appearance at the expense of correctness, meaning, accessibility, maintainability, or portability.

## Core principles

1. **Preserve meaning.** Never lose, reorder, or reword content in a way that changes what the author said. Facts, identifiers, code, URLs, and names are sacred.
2. **Correctness first.** Priority: correctness → structure → readability → accessibility → useful visuals → decoration.
3. **Minimal intervention.** A high-quality formatter recognizes when no significant changes are necessary. If a document is already good, say so and stop.
4. **No fabrication.** Never invent URLs, icon URLs, badge URLs, image paths, assets, or facts. If something needs verification, verify it or leave it alone.
5. **Adapt, don't template.** Match the document type, target renderer, audience, and existing structure. Never blindly apply one template.
6. **GitHub-aware, CommonMark-safe.** Use GitHub Flavored Markdown (GFM) features only when the document targets GitHub. Keep portable documents portable.

## When to use

Use this skill when the user asks you to create, improve, restructure, format, audit, or validate Markdown — especially GitHub READMEs, API documentation, tutorials, specifications, changelogs, how-tos, or knowledge-base articles.

Do **not** use it for non-Markdown content, or when the user only wants a quick edit with no quality checks.

## Workflow

### Step 1: Detect target renderer

GitHub, GitLab, generic CommonMark, static-site generator, plain file? This drives everything downstream.

### Step 2: Detect document type

README, API reference, tutorial, how-to, reference, specification, architecture, design, changelog, requirements, SOP, troubleshooting, knowledge-base?

### Step 3: Inspect existing Markdown

Read the entire document first. Do not edit what you have not read.

### Step 4: Inspect existing repository assets

Look for `assets/`, `docs/images/`, `images/`, `.github/assets/`, logos, icons, screenshots, and theme variants. Existing assets are preferred over external URLs and affect visual recommendations.

### Step 5: Analyze structure and content

- **Audience**: end users, developers, maintainers, contributors?
- **Purpose**: what is this document trying to achieve?
- **Existing hierarchy**: what heading structure already exists? Is it sound?
- **Content relationships**: what links, images, lists, tables, code, and alerts exist?
- **Existing visual design**: logos, badges, icons, screenshots already present?

### Step 6: Improve the Markdown

First, load only the relevant references — never all of them, never none when needed:

| Target / situation | Load |
|---|---|
| GitHub README or GitHub-hosted doc | `github-gfm`, `documentation-style`, `markdownlint`, `document-patterns`, `visual-assets`, `validation` |
| Portable / CommonMark-only doc | `commonmark`, `documentation-style`, `markdownlint`, `validation` |
| Any document where structure is a core concern | `document-patterns` |
| Visual review (always, as the final pass) | `visual-assets` |
| Always, at the end | `validation` |

Do not apply irrelevant rules. A portable CommonMark document must not receive GitHub-only features (alerts, task lists, emoji shortcodes, etc.).

Then apply the decision rules below and edit with diff-oriented minimalism: many small, targeted edits over a full rewrite; preserve the author's voice; keep technical identifiers, command names, file paths, API signatures, and code exactly as they are; preserve existing links, images, and assets unless they are broken or the user asked to change them; never change code inside fenced blocks except clear formatting whitespace (and only when asked); re-read the whole document after significant restructuring. If the document is already well-formed, make **no changes** and report that.

### Step 7: Validate the Markdown

Run the validation gate from `references/validation.md`. Never skip it.

### Step 8: Review visual opportunities

Run the Visual Asset Review from `references/visual-assets.md` — **after** the improvement pass, because improved structure can reveal visual opportunities that were not obvious before.

For each section, ask: "Would a visual asset make this section significantly easier to understand?"

- **No** → do nothing.
- **Yes + the agent can create/insert the asset** → create or insert it, only when the user asked for visuals and the tools/permissions allow.
- **Yes + the agent cannot create/insert the asset** → insert a precise `VISUAL SUGGESTION` comment at the exact location.

### Step 9: Validate asset references and accessibility

Every image reference must point at a file that actually exists; every real image needs meaningful alt text. No fake paths, no invented URLs, no broken links.

### Step 10: Final validation and report

One final Markdown validation pass, then return the improved document plus a concise Visual Review report.

## Decision-making rules

**Change when:**

- Heading hierarchy is broken (skipped levels, multiple H1s, missing blanks around headings).
- Lists, tables, or code fences are malformed or inconsistent.
- Whitespace is wrong (trailing spaces, hard tabs, multiple consecutive blank lines, missing final newline).
- Links or image references are broken, reversed, empty, or undefined.
- Code fences lack a language identifier.
- The document type is unclear or the structure fights the document type.
- A GitHub README would genuinely benefit from appropriate visual elements (see `visual-assets`).
- GitHub-specific syntax is used in a CommonMark-only document (or the reverse: the document targets GitHub and the author is clearly fighting GFM to avoid it).

**Leave alone when:**

- The document is already consistent, correct, and clear.
- The style choice is defensible even if it is not your preference (e.g., `1.` vs `1. 2. 3.` ordered lists, asterisk vs dash bullets — only unify when inconsistent within one document).
- Content is long lines with no whitespace (URLs, paths) — do not break them.
- A "wrong" choice is actually intentional convention (e.g., duplicate `### Features` headings in changelogs, raw HTML in highly customized READMEs).

**Ask the user when:**

- Target renderer is ambiguous and it changes the outcome (GFM vs portable).
- Visual additions are suggested but the user's intent is unclear (add icons? badges? a logo?).
- You would need to delete, rename, or substantially reword content.
- You would need to fabricate a URL, asset, or fact to proceed.

## Preservation rules

- No content loss. Ever. Re-read the document after editing.
- No reordering of paragraphs, list items, or sections without a structural reason that you state.
- No renaming of anchors/headings that would break internal or external links, unless you also fix the links.
- No alteration of code, commands, identifiers, file paths, or technical values.
- No fabricated or "placeholder-looking-real" URLs, images, icons, or badges. If an asset is missing, either reference an existing repo asset, use a documented real URL pattern, or leave a `VISUAL SUGGESTION` comment — never invent an asset or a path for one.

## Output behavior

- Report what you changed and why, briefly.
- State the document type and target renderer you assumed (e.g., "Assumed GitHub README, GFM").
- If you made no changes, say the document already meets the standards and why.
- If you validated but could not (e.g., could not fetch a URL), say what remains unverified.
- End with a concise Visual Review report:
  - No visuals needed: `Visual Review: No additional visuals recommended.`
  - Suggestions added: list the opportunities and state that the suggestions were inserted at the relevant locations.

## Visual assets

For GitHub-targeted documents, recognize when visual elements would genuinely improve the document: technology icons, stack logos, project logos, badges, screenshots, demo GIFs, architecture diagrams, theme-aware images. Load `references/visual-assets.md` before adding anything. Never add decoration for its own sake, and never exceed the project's existing visual identity.

**Visual Asset Review** (always, as the final pass): after the Markdown improvement and validation passes, review the document for places where a screenshot, image, diagram, GIF, video preview, or other visual would significantly improve comprehension. Detect the agent's actual visual capabilities — screenshot capture, image generation, upload, repository asset creation, browser access. Do not assume capabilities.

- If the agent genuinely has a capability **and** the user wants the visual created, create or insert it, then verify the file exists before referencing it.
- If the agent cannot create or insert the asset, leave a precise, invisible `VISUAL SUGGESTION [TYPE]:` HTML comment exactly where the visual belongs, describing what to show, which details, and why.
- **Never fake the asset**: no invented paths, no fake image references, no nonexistent URLs, no claims that an image exists. The final Markdown must be valid either way — with real assets when possible, with actionable suggestions otherwise.

## Reference modules

Detailed standards live in `references/`. Load them conditionally (see Step 6):

- `github-gfm.md` — GitHub Flavored Markdown specifics
- `commonmark.md` — CommonMark core and portability
- `markdownlint.md` — markdownlint-inspired checks (MD001–MD059)
- `documentation-style.md` — GitHub documentation style guide distilled
- `document-patterns.md` — structure patterns per document type
- `visual-assets.md` — icons, badges, logos, screenshots, theme-aware images, and visual asset suggestions
- `validation.md` — the post-edit validation gate

## Examples

`examples/` contains model documents: `README.md`, `API.md`, `tutorial.md`, `specification.md`, `changelog.md`. Consult them when a document type is unfamiliar or when the user wants a "best-in-class" version of a type.

## Final rule

Do not optimize Markdown for appearance at the expense of correctness, meaning, accessibility, maintainability, or portability. When in doubt: preserve, verify, and ask.