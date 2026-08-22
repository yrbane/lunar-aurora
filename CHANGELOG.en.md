# Changelog

All notable changes to Lunar Aurora are documented in this file.

The format is inspired by [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows [SemVer](https://semver.org/).

> **Reconstruction note**: this file was created on 2026-08-22 from the Git log, since no changelog existed at the time of the 1.0.0 to 1.2.0 releases. Dates reflect the commit that bumped `package.json` to the matching version — they do not necessarily represent a separate release date.

## 1.2.1 — 2026-08-22 · "Project memory"

### Added
- Bilingual changelog (`CHANGELOG.md` / `CHANGELOG.en.md`) reconstructing the full history of previous versions.
- `docs/GUIDELINES.md`: first set of project conventions (dependencies, security audit, CSS layers architecture).

## 1.2.0 — 2026-08-06

### Added
- Ten new CSS components: cards, stats (KPI tiles with trend), empty states, navigation (breadcrumb, pagination), user feedback (dismissible alerts/toasts, progress bars, switches), overlays (tooltips, `<details>`-based dropdowns).

## 1.1.0 — 2026-08-06

### Added
- Data table component (densities, striping, sticky header, sortable columns).

## 1.0.0 — 2025-12-06

First public release of the framework. This version bundled several months of development (December 2025 to April 2026) with no intermediate changelog.

### Added
- Framework core: OKLCH color-space design tokens, CSS cascade layers architecture (`@layer reset, tokens, themes, typography, layout, components, icons, utilities, animations`), CSS reset, fluid typography (`clamp()`).
- 30+ switchable themes via the `data-theme` attribute, including 10 retro/geek themes (8-bit, Bubble Bobble, Galaxian, Mario, Windows 95, BSOD...), with an interactive theme switcher and `localStorage` persistence.
- Standalone SVG icon system, replacing the Google Fonts / Material Icons dependency.
- CSS logical properties (`margin-inline-start`, `inset-inline-end`...) for native RTL support.
- Accessible headless JS components: Tabs (ARIA keyboard navigation), Accordions, Modals (native `<dialog>`), dismissible alerts/toasts.
- Extended utilities module (gap, transitions, hover, glassmorphism, "recipe" components).
- Vite + PostCSS build system (`postcss-preset-env`, `cssnano`) generating `dist/aurora.min.css`.
- VitePress documentation in `docs/`.
- Demo pages in `examples/`: landing, getting-started, components, documentation.
- Buttons and badges with extended variants and sizes.

### Fixed
- Theme switcher now consistently uses CSS variables across all pages instead of hardcoded values.
- Forced update of the "mooncat" halo on theme change.
- `gap` utility class naming aligned with the `la-` prefix.
- Dark mode variables inlined into `themes.css` (instead of an external import).
- Replaced `__dirname` (unavailable in ESM) in the Vite configuration.

### Changed
- Keyframe animation naming standardized with the `la-` prefix (e.g. `q-fade-in` → `la-fade-in`).
- Demo pages refactored to consume the Lunar Aurora framework instead of ad hoc CSS.
