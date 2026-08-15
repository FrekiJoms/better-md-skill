# Changelog

All notable changes to this project are documented in this file.

## [Unreleased]

### Added

- Focus trap utility

### Fixed

- Theme token leak between instances

## [3.1.0] - 2026-02-10

### Added

- `ThemeHandle.setToken`
- Keyboard navigation defaults

### Fixed

- Memory leak in `destroy()`

## [3.0.0] - 2025-11-01

### Added

- Theme system with CSS variables
- `attach()` with batch rendering

### Removed

- Legacy `mount()` entry point

## [2.0.0] - 2025-04-15

### Changed

- Widgets now require explicit `render()` calls

### Fixed

- Click handler double-firing in Safari