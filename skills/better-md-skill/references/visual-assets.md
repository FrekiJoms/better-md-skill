# Visual assets

Load this reference before adding, recommending, or auditing visual elements in GitHub READMEs: technology icons, stack logos, project logos, badges, screenshots, GIFs, SVGs, architecture diagrams, demo images, and theme-aware images.

## When visuals are appropriate

Ask: does the visual help a visitor understand or trust the project faster? The priority ladder is correctness → structure → readability → accessibility → useful visuals → decoration. Visuals are never a substitute for good structure.

Add visuals when the README is GitHub-targeted and one of these applies:

- A tech stack worth scanning at a glance (icons)
- CI/build/version status worth showing (badges)
- A product that benefits from seeing it (screenshot/demo GIF)
- An architecture or flow worth diagramming
- An existing project identity (logo) that belongs in the header

Do **not** add everything automatically. Excessive decoration hurts readability and maintainability.

## Asset discovery first

Before introducing any external asset, inspect the repository for existing assets:

```text
assets/
docs/
docs/images/
images/
.github/
.github/assets/
```

and common files such as:

```text
logo.svg   logo.png   icon.svg   icon.png
```

Also check for theme variants (`logo-dark.svg`, `logo-light.svg`, `logo-dark-mode.svg`). Prefer existing project assets over external URLs. Do not replace an established visual identity without being asked.

## Technology icons

For a tech stack list like:

```md
## Tech Stack

- React
- TypeScript
- Node.js
- PostgreSQL
```

you may offer a visual stack row:

```html
<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="40" alt="React">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="40" alt="TypeScript">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="40" alt="Node.js">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="40" alt="PostgreSQL">
</p>
```

Rules:

- Only include technologies actually present in the project — never pad the stack.
- Use only documented, verified URL patterns:
  - Devicon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/<name>/<name>-original.svg` (see <https://devicon.dev/>)
  - Simple Icons: `https://cdn.simpleicons.org/<slug>` (see <https://simpleicons.org/>)
  - Shields.io: `https://img.shields.io/badge/<LABEL>-<VALUE>-<COLOR>` (see <https://shields.io/>)
  - Official technology assets (e.g., `https://nodejs.org/static/images/logo.svg` — verify first)
- Every `<img>` needs `alt` text and a `width` (40–64 px is typical for stack rows).
- Verify URLs when possible (HTTP 200). If you cannot verify, say so instead of guessing.

## Badges

- Place badges in a compact row under the title (or on the hero line).
- Use static shields.io badges for common states: `https://img.shields.io/badge/<LABEL>-<VALUE>-<COLOR>`.
- Use dynamic badges (`https://img.shields.io/github/v/release/owner/repo`) only with the project's real owner/repo — never fabricate a repository identity.
- Keep badges meaningful: version, build, license, downloads. Three to six max.
- Badge text and values must be truthful. No "100% awesome" filler badges.

## Screenshots and GIFs

- Reference local repo assets with relative paths: `![Screenshot of the dashboard](./docs/images/dashboard.png)`.
- Screenshots should show the product doing something; place them after the description or features, before installation.
- Prefer static screenshots in documentation; demo GIFs are acceptable in READMEs when they genuinely communicate motion (keep them small).
- Alt text is required and should convey what the image shows (see `documentation-style.md`).

## Logos and theme-aware images

- When a logo exists in the repo (or in the tech's official assets), prefer it.
- For logos that differ between light/dark themes, GitHub supports:
  ```html
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/logo-dark.svg">
    <img src="./assets/logo-light.svg" alt="Project logo">
  </picture>
  ```
- Relative paths keep theme-aware images working in forks and previews.
- Never fabricate a logo; if the project has none, leave the header text-only or offer to help create one.

## Diagrams

- Mermaid fences render on GitHub: `` ```mermaid `` — use for architecture and flow diagrams in GitHub-targeted documents.
- ASCII diagrams are the portable alternative for CommonMark-only documents.
- Diagrams must be legible in monospace; never compress an architecture diagram into a single unreadable line.

## Decoration budget

- One hero element (logo or hero image) — not both, not three.
- Tech icons OR a tech-stack list — converting an existing list is optional, not mandatory.
- Badges: a single row, meaningful only.
- Excessive visual decoration (multiple banners, animated dividers, emoji-heavy section headers) should be reduced, not emulated.

## Verification checklist

- [ ] Every URL used is a real, documented pattern or a verified live URL
- [ ] Every technology in an icon row is actually in the project
- [ ] Every badge is truthful; no fabricated owner/repo
- [ ] Every image has alt text and a sane width
- [ ] Existing repo assets preferred over external URLs
- [ ] Theme-aware logos handled with `<picture>` and relative paths
- [ ] Total decoration is within budget; the README is still readable