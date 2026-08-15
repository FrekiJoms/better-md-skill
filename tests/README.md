# Test suite

This directory tests the behavior of `better-md-skill` against realistic fixtures. Because a skill is instruction-driven, the suite is a **manual/agent-driven test harness**: each fixture is fed to the skill (loaded via the `skill` tool or by an agent instructed to follow it), and the result is checked against the expectation in `SUITE.md`.

## Running the suite

### Prerequisites

- OpenCode with the `better-md-skill` skill available (see the repository root `README.md`).
- The repository checked out locally.

### Procedure

1. Read `tests/SUITE.md` to load the full case list.
2. For each case, present the fixture to the skill with the command from the case row, e.g.:

   > Audit this Markdown without changing it: `tests/fixtures/01-bad-headings.md`

   or for editing cases:

   > Improve this document: `tests/fixtures/01-bad-headings.md`

3. Compare the skill's output against the **expected behavior** column.
4. Record pass/fail in a copy of the results table.

### Pass criteria

A case passes when:

- All expected changes were made (or all expected non-changes were skipped).
- No content, code, identifiers, or URLs were altered unintentionally (integrity check).
- No fabricated URLs, icons, badges, or assets were introduced.
- The document renders correctly and is cleaner than the original.

## Coverage

The fixtures exercise the capability matrix:

| Capability | Fixtures |
| --- | --- |
| Syntax fixing | 01–07 |
| Heading hierarchy | 01, 02 |
| Lists / tables / fences | 03, 04, 05 |
| Links / whitespace | 06, 07 |
| Document types | 08, 10–13, 15, 16 |
| Already-good handling | 09, 24 |
| Renderer awareness | 15, 16 |
| Visual assets | 17–23 |
| Visual suggestion — screenshots | 25, 27, 32, 34 |
| Visual suggestion — diagrams | 26, 28, 34 |
| Visual suggestion — no duplication | 29, 30, 33 |
| Visual suggestion — nothing needed | 31 |
| Visual suggestion — broken refs | 32 |
| Capability detection | 35, 36 |
| Reading psychology | 37–40 |
| Enhanced README pattern | 41, 42 |
| SVG asset authoring | 43, 44 |
| Main README full pattern | 45, 47 |
| No README pattern in non-README docs | 46 |
| Tech Stack evidence gating | 48, 49 |
| Existing images kept as-is | 50 |
| Content preservation | all (integrity check applies everywhere) |
| Large documents | 10 (API reference is deliberately long) |