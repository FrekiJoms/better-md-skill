# Visual assets

Load this reference before adding, recommending, or auditing visual elements in GitHub READMEs and other GitHub-targeted documents: technology icons, stack logos, project logos, badges, screenshots, GIFs, SVGs, architecture diagrams, demo images, theme-aware images — **and visual asset suggestions** when the agent cannot produce real assets.

This reference has three parts:

1. **Visual asset suggestions** — the suggestion system for assets the agent cannot create (screenshots, diagrams, GIFs, video previews).
2. **Adding real assets** — rules for icons, badges, logos, screenshots, diagrams, theme-aware images.
3. **Verification** — checking that every asset reference is real.

---

# Part 1: Visual asset suggestions

## When to run the review

Always, as the final pass of the workflow: **after** the Markdown improvement and validation passes. The improved structure may reveal visual opportunities that were not obvious before.

Ask internally, per section: "Would a visual asset make this section significantly easier to understand?"

- **No** → do nothing.
- **Yes + the asset is a banner, logo, icon set, or simple diagram** → **author a real SVG file** in the repository, verify it exists, then reference it (see "Authoring SVG assets"). SVG is text; most agents can write it.
- **Yes + the agent can create/insert the asset** (screenshots via capture, images via generation, uploads) → create or insert it, only when the user asked for visuals and the tools/permissions allow (see Part 2).
- **Yes + the agent cannot create/insert the asset** → insert a precise `VISUAL SUGGESTION` comment at the exact location (photographs, screenshots, GIFs, videos, complex illustrations).

## The critical rule

> If a visual would significantly improve the documentation, either add it when the agent genuinely has the capability to do so, or leave a precise, actionable suggestion exactly where the visual belongs. **Never fake the asset.**

Without screenshot capture, image generation, image upload, repository asset creation, or a browser tool, the agent must NOT:

- Pretend a screenshot exists
- Invent an image path or filename
- Create a fake Markdown image reference (`![X](./fake.png)`)
- Use a nonexistent URL
- Claim an image was added
- Insert broken image links

## Suggestion format

HTML comments render invisibly on GitHub and in most renderers. Place the suggestion **immediately after the content it illustrates** — never all at the bottom of the document.

```md
<!-- VISUAL SUGGESTION [TYPE]:
Add a screenshot of [specific subject] here.
Show [specific elements/details].
Purpose: [why this visual would help the reader].
-->
```

Type comes from this set: `SCREENSHOT`, `DIAGRAM`, `ARCHITECTURE`, `WORKFLOW`, `GIF`, `VIDEO`, `UI_PREVIEW`, `BEFORE_AFTER`, `CHART`, `ILLUSTRATION`, `LOGO`, `TECH_STACK`.

## Specificity requirements

A suggestion must answer four questions:

1. **What** should be shown?
2. **Where** should it be captured from?
3. **What details** should be visible?
4. **Why** is the visual useful?

Never write vague suggestions:

```md
<!-- VISUAL SUGGESTION:
Add a screenshot here.
-->
```

Always be specific:

```md
<!-- VISUAL SUGGESTION [SCREENSHOT]:
Add a screenshot of the login page here.
Show the email/password fields, the login button, and the "Forgot password" link.
Purpose: Give users a visual preview of the authentication interface.
-->
```

## Context-based inference

Infer the appropriate visual from the surrounding Markdown:

| Context | Suggested visual |
| --- | --- |
| UI documentation / dashboard / interface section | `SCREENSHOT` or `UI_PREVIEW` of that exact screen |
| Installation with a GUI installer | `SCREENSHOT` of the configuration screen, highlighting fields users must configure (not needed for plain CLI installs) |
| Architecture explanation | `ARCHITECTURE` diagram of the components and their relationships |
| Multi-step workflow or process | `WORKFLOW` diagram from input through processing to output |
| Before/after comparison, migration, refactor | `BEFORE_AFTER` images |
| Data, metrics, statistics | `CHART` or annotated `SCREENSHOT` |
| Complex CLI output hard to follow in text | `SCREENSHOT` or `GIF` of the terminal |
| Feature that is much clearer in motion | `GIF` or `VIDEO` |
| Project identity missing from the header | `LOGO` |
| Tech stack that would scan better visually | `TECH_STACK` icons (see Part 2) |

## High-value vs poor candidates

Suggest only high-value visuals:

- Good: complex UI, dashboards, application interfaces, architecture, workflows, complicated processes, before/after comparisons, feature demonstrations, visual configuration, data visualization, game or mobile interfaces, hard-to-follow CLI output.
- Poor: simple explanations, short paragraphs, basic installation commands, simple API definitions, trivial configuration, content already perfectly explained by text, every section of a README.

**Quality over quantity.** If a section is clear without a visual, leave it alone.

## Filename suggestions

A suggestion may include a recommended filename, but it must clearly indicate the file does not yet exist — never turn it into an image reference:

```md
<!-- VISUAL SUGGESTION [SCREENSHOT]:
Recommended file: `assets/screenshots/dashboard-overview.png`

Add a screenshot of the main dashboard here.
Show the sidebar, KPI cards, revenue chart, and recent transactions.
Purpose: Provide a visual overview of the application's primary interface.
-->
```

Do NOT create the Markdown image reference until the file actually exists.

## Accessibility in suggestions

When useful, suggest what the eventual alt text should communicate:

```md
<!-- VISUAL SUGGESTION [SCREENSHOT]:
Add a screenshot of the analytics dashboard here.

Suggested alt text:
"Analytics dashboard showing revenue statistics, sales trends, and recent transactions."

Show the KPI cards, chart, and recent transaction table.
Purpose: Help readers understand the dashboard layout.
-->
```

## Do not duplicate existing visuals

Before suggesting a visual, inspect the document and repository. If a section already contains a screenshot, diagram, image, GIF, or video that fulfills the need, do not recommend another. An existing image that clearly does not fulfill the requirement (wrong subject, broken, decorative only) may be flagged for replacement instead.

## Capability detection

Determine what the current agent can actually do:

- Can inspect repository files
- Can create Markdown
- Can **author SVG text files** — banners, simple logos, icons, simple diagrams (nearly always true: SVG is text)
- Can create image files (PNG/JPEG rendering)
- Can generate images
- Can capture screenshots
- Can access a browser
- Can upload images
- Can modify repository assets
- Can modify a GitHub repository

Do not assume capabilities. But do not under-assume either: writing an SVG file is file writing, and any agent that can write Markdown can author one.

## Authoring SVG assets

SVG is text — when the document is GitHub-targeted and a banner, logo, icon set, or simple diagram is missing, **create a real SVG file** instead of suggesting one. This is the preferred path; `VISUAL SUGGESTION` is for assets the agent genuinely cannot produce (photographs, screenshots, GIFs, videos, complex illustrations).

Rules:

- Save the asset in the repository (`assets/banner.svg`, `assets/logo.svg`, `assets/icons/<name>.svg`), verify it exists, then reference it. Never reference before the file is confirmed.
- **Banner**: `width="1200" height="300"`, matching `viewBox`, one tasteful gradient or solid color, white text, font stack (`Segoe UI, Arial, sans-serif`), `role="img"` and a descriptive `aria-label`. Render centered: `<p align="center"><img src="./assets/banner.svg" alt="..." width="100%"></p>`.
- **Logo**: simple — two colors max, `viewBox="0 0 512 512"`, geometric shapes.
- **Icons**: one per feature is overkill; a single restrained set (max 4–6) or none.
- **Simple diagrams** (flow, architecture): only when a Mermaid fence would not render (non-GitHub targets); prefer Mermaid on GitHub.
- No trademark mimicry: never imitate an existing brand's logo; never create a project identity the author did not ask for — if the project's identity is unknown, create a neutral banner or ask.
- Respect the decoration budget: one hero element (banner OR logo, not both).
- Keep the SVG hand-maintainable: small, readable, plain shapes — no embedded photos, no generated noise.

## Visual review report

Report the outcome to the user after the review:

```text
Visual Review: No additional visuals recommended.
```

or, when suggestions were added:

```text
Visual Review

3 visual opportunities identified:
1. Dashboard screenshot
2. Authentication flow diagram
3. Architecture diagram

The suggestions were inserted directly at the relevant locations in the Markdown.
```

Keep the report concise.

---

# Part 2: Adding real assets

## When visuals are appropriate

The priority ladder is correctness → structure → readability → accessibility → useful visuals → decoration. Visuals are never a substitute for good structure.

Add visuals when the document is GitHub-targeted and one of these applies:

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

## Adding screenshots

If the agent can capture a real interface and the user asked for screenshots:

1. Capture the relevant screenshot.
2. Save it with a descriptive kebab-case filename.
3. Place it in an appropriate repository asset directory (see "Asset organization").
4. Insert the correct Markdown image reference with meaningful alt text.
5. Verify the path — never reference a file before confirming it exists.

```md
![Application dashboard showing sales analytics](./assets/screenshots/dashboard.png)
```

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
- Never fabricate a logo; if the project has none, leave the header text-only or suggest a `LOGO` visual.

## Diagrams

- Mermaid fences render on GitHub: `` ```mermaid `` — use for architecture and flow diagrams in GitHub-targeted documents.
- ASCII diagrams are the portable alternative for CommonMark-only documents.
- Diagrams must be legible in monospace; never compress an architecture diagram into a single unreadable line.
- If the agent cannot render a diagram, use a `DIAGRAM`/`ARCHITECTURE`/`WORKFLOW` suggestion instead of a broken image.

## Asset organization

When suggesting or creating assets, recommend a consistent directory structure that fits the repository:

```text
assets/
├── images/
├── screenshots/
├── diagrams/
└── icons/
```

or:

```text
docs/
└── images/
    ├── screenshots/
    ├── diagrams/
    └── architecture/
```

Choose the structure that best fits the repository. Do not create unnecessary directories for one image.

## Decoration budget

- One hero element (logo or hero image) — not both, not three.
- Tech icons OR a tech-stack list — converting an existing list is optional, not mandatory.
- Badges: a single row, meaningful only.
- Excessive visual decoration (multiple banners, animated dividers, emoji-heavy section headers) should be reduced, not emulated.

---

# Part 3: Verification checklist

- [ ] Every suggestion is placed immediately after the content it illustrates — never dumped at the bottom
- [ ] Every suggestion is specific (what / where / details / why) and typed (`SCREENSHOT`, `ARCHITECTURE`, …)
- [ ] Suggestions are high-value only; existing visuals are respected and never duplicated
- [ ] No fake image references, invented paths, or nonexistent URLs anywhere
- [ ] Authored SVG assets exist on disk before being referenced; banners have `role="img"` + `aria-label`, sane dimensions and viewBox
- [ ] Image references appear only for files that were verified to exist
- [ ] Every URL used is a real, documented pattern or a verified live URL
- [ ] Every technology in an icon row is actually in the project
- [ ] Every badge is truthful; no fabricated owner/repo
- [ ] Every real image has alt text and a sane width
- [ ] Theme-aware logos handled with `<picture>` and relative paths
- [ ] Asset directories are consistent with the repository layout
- [ ] Total decoration is within budget; the README is still readable