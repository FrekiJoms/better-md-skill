# Changelog

A model changelog following Keep a Changelog conventions. Repeated subheadings across versions are intentional — never deduplicate them.

All notable changes to this project are documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `--json` output format for machine-readable results

### Fixed

- Watch mode missed files added to new subdirectories

## [2.0.0] - 2026-01-15

### Added

- Plugin lifecycle with `transform` hook
- Watch mode with debounce

### Changed

- Minimum Node.js version raised to 20

### Removed

- Built-in template engine

## [1.0.0] - 2025-06-01

### Added

- Markdown to HTML conversion
- GFM extension support
- Recursive directory processing

[Unreleased]: https://github.com/OWNER/example-cli/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/OWNER/example-cli/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/OWNER/example-cli/releases/tag/v1.0.0