# Validation

The post-edit validation gate. Load and run this after every modification of a Markdown document — never skip it, even for tiny edits.

## Procedure

### 1. Re-read the resulting document

Read the complete edited file, not just the diff. The document is the source of truth.

### 2. Structural validation

- **Heading hierarchy**: exactly one H1; no skipped levels; blank lines around headings; headings at column 1; unique headings at each level (except intentional changelog patterns).
- **Lists**: consistent markers; consistent indentation; blank lines around lists; one space after markers; procedures numbered.
- **Code fences**: all fences closed; language identifiers present; consistent fence style; blank lines around fences; code inside fences unchanged.
- **Tables**: header + delimiter rows; consistent column counts; consistent pipe style; blank lines around tables.
- **Whitespace**: no trailing spaces; no hard tabs; no multiple consecutive blank lines; file ends with exactly one newline.

### 3. Link and reference validation

- Inline links well-formed; no reversed syntax; no empty destinations.
- Reference definitions all used, all defined, none duplicated.
- Fragment links (`#anchor`) match generated heading anchors — recheck when headings were renamed.
- Relative links point at files that exist in the repository.
- No bare URLs where the renderer would not auto-link them (portable documents).

### 4. Image and asset validation

- Every image has alt text.
- Image paths point at existing files (relative paths checked against the repo).
- External image/icon/badge URLs use documented patterns (Devicon, Simple Icons, Shields.io, official assets) or were verified live.
- No fabricated assets or URLs — if an asset cannot be confirmed, either remove the reference, use a verified alternative, or report the gap.

### 5. Renderer-specific validation

- **GitHub target**: tables, task lists, alerts, and strikethrough used correctly; Mermaid/math only if appropriate; relative links resolve inside the repo.
- **CommonMark/portable target**: no GFM-only constructs remain.
- Unknown renderer: validate as CommonMark; flag GFM features for the user's confirmation.

### 6. Content-integrity validation

- No content lost, reordered, or reworded beyond the agreed scope.
- Code, commands, identifiers, file paths, version numbers, URLs, and proper names are byte-identical to the original where they appear unchanged.
- Meaning is preserved: a reader who knew the original recognizes the edited document.

### 7. Fabrication check

- Every URL, icon, badge, image path, technology claim, and fact was either present in the original, verified, or documented as a placeholder pattern. Anything else must be removed or flagged.

### 8. Quality verdict

The result must be **cleaner than the original**:

- If the edit fixed problems without introducing new ones — pass.
- If the edit made no meaningful change to an already-good document — pass (minimal intervention is success).
- If the edit introduced churn, decoration, or uncertainty — redo or report.

## Report format

After validation, report briefly:

1. Assumed document type and renderer.
2. What changed and why.
3. What was verified vs. left unverified.
4. Anything that needs user confirmation (ambiguous renderer, asset gaps, content decisions).

## Hard failures

Stop and fix before delivering if any of these are true:

- Content was lost or meaning changed.
- Code blocks were altered unintentionally.
- A URL, icon, badge, or asset was fabricated.
- The document renders worse than the original.