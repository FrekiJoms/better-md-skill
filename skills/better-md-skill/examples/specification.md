# Example CLI specification

A model specification document: precise, numbered requirements, defined terminology, and an explicit change history.

- **Version:** 2.0.0
- **Status:** Stable
- **Date:** 2026-01-15

## Terminology

| Term | Definition |
| --- | --- |
| Source document | A UTF-8 Markdown file with a `.md` extension |
| Build | The process of converting source documents to HTML |
| Watch mode | Continuous rebuild triggered by file changes |

## Scope

This specification defines the behavior of the Example CLI for converting Markdown to HTML. It covers the command-line interface, configuration, and plugin lifecycle.

## Out of scope

- Image optimization and asset pipelines
- Template engines beyond the built-in default

## Requirements

### R1: Input handling

- R1.1: The CLI MUST accept one or more input paths as positional arguments.
- R1.2: A directory input MUST be processed recursively for `.md` files.
- R1.3: Non-UTF-8 input MUST fail with `SyntaxError` and a nonzero exit code.

### R2: Conversion

- R2.1: Conversion MUST produce standards-compliant HTML5.
- R2.2: With `gfm: true` (default), GitHub Flavored Markdown extensions MUST be enabled.
- R2.3: Unknown Markdown constructs MUST be passed through without data loss.

### R3: Output

- R3.1: The output directory defaults to `dist/`.
- R3.2: The `--output` option MUST override the default.
- R3.3: Output files MUST preserve the source directory structure.

### R4: Watch mode

- R4.1: With `--watch`, changes to source documents MUST trigger a rebuild within 250 milliseconds.
- R4.2: Watch mode MUST exit with code 0 on `SIGINT`.

### R5: Plugins

- R5.1: Plugins MUST be CommonJS or ES modules exporting a default object.
- R5.2: A plugin named in the configuration MUST be loaded before the first build.
- R5.3: An unresolvable plugin path MUST fail the build with a clear error.

## Constraints

- C1: The CLI MUST run on Node.js 20 and later.
- C2: The CLI MUST have no runtime dependencies.
- C3: A conversion of a 1 MB document MUST complete in under 5 seconds on commodity hardware.

## Change history

| Version | Date | Change |
| --- | --- | --- |
| 2.0.0 | 2026-01-15 | Added plugin lifecycle (R5); removed template engine (out of scope) |
| 1.0.0 | 2025-06-01 | Initial stable specification |