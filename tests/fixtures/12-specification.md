# Widget Toolkit specification

- **Version:** 3.1.0
- **Status:** Draft
- **Date:** 2026-03-01

## Terminology

| Term | Definition |
| --- | --- |
| Widget | An encapsulated UI component managed by the toolkit |
| Theme | A named collection of design tokens |

## Scope

This specification defines widget creation, rendering, theming, and the event model.

## Out of scope

- Server-side rendering
- Native platform widgets

## Requirements

### R1: Widget creation

- R1.1: `createWidget` MUST return a widget instance.
- R1.2: The `tag` option MUST be a valid HTML tag name.
- R1.3: An invalid `tag` MUST throw `TypeError`.

### R2: Rendering

- R2.1: `render()` MUST return a detached `HTMLElement`.
- R2.2: Rendering MUST NOT attach the element to the document.
- R2.3: `attach()` MUST insert widgets into the container in order.

### R3: Theming

- R3.1: Themes MUST be registered by unique name.
- R3.2: Registering a duplicate theme name MUST throw `RangeError`.
- R3.3: Tokens MUST cascade to all widgets using the theme.

### R4: Events

- R4.1: The `mount` event MUST fire after attachment.
- R4.2: The `destroy` event MUST fire before listeners are removed.

## Constraints

- C1: The toolkit MUST run in all modern browsers without polyfills.
- C2: A page with 100 widgets MUST mount in under 200 milliseconds.

## Change history

| Version | Date | Change |
| --- | --- | --- |
| 3.1.0 | 2026-03-01 | Draft: event model (R4) |
| 3.0.0 | 2025-11-01 | Stable: theming (R3) |