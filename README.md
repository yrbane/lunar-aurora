# Lunar Aurora

<div align="center">

```
██╗     ██╗   ██╗███╗   ██╗ █████╗ ██████╗
██║     ██║   ██║████╗  ██║██╔══██╗██╔══██╗
██║     ██║   ██║██╔██╗ ██║███████║██████╔╝
██║     ██║   ██║██║╚██╗██║██╔══██║██╔══██╗
███████╗╚██████╔╝██║ ╚████║██║  ██║██║  ██║
╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝

 █████╗ ██╗   ██╗██████╗  ██████╗ ██████╗  █████╗
██╔══██╗██║   ██║██╔══██╗██╔═══██╗██╔══██╗██╔══██╗
███████║██║   ██║██████╔╝██║   ██║██████╔╝███████║
██╔══██║██║   ██║██╔══██╗██║   ██║██╔══██╗██╔══██║
██║  ██║╚██████╔╝██║  ██║╚██████╔╝██║  ██║██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
```

**A disruptive CSS framework using the most avant-garde techniques**

[![License: MIT](https://img.shields.io/badge/License-MIT-violet.svg)](https://opensource.org/licenses/MIT)
[![CSS](https://img.shields.io/badge/CSS-Modern-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)

</div>

## Features

- **OKLCH Color Space** - Perceptually uniform colors for consistent design
- **30+ Themes** - Dark, Cyberpunk, Aurora, Hacker, 8-bits, and many more
- **Code Syntax Highlighting** - Built-in variables for code blocks
- **@property** - Type-safe registered CSS custom properties
- **Native CSS Nesting** - No preprocessor required
- **Container Queries** - Component-level responsiveness
- **Fluid Typography** - Smooth scaling with `clamp()`
- **Relative Color Syntax** - Dynamic color manipulation
- **Modern Selectors** - `:has()`, `:is()`, `:where()`
- **Logical Properties** - Built-in RTL support
- **Accessibility** - Respects `prefers-reduced-motion`, `prefers-contrast`

## Installation

### NPM

```bash
npm install lunar-aurora
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/lunar-aurora/src/aurora.css">
```

### Download

Download the [latest release](https://github.com/yrbane/lunar-aurora/releases) and include in your project.

## Quick Start

```html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <link rel="stylesheet" href="path/to/aurora.css">
</head>
<body>
    <div class="la-container">
        <h1 class="la-h1 la-gradient-text">Hello Lunar Aurora!</h1>
        <button class="la-btn primary">Get Started</button>
    </div>
</body>
</html>
```

## Bundles

| Bundle | Description |
|--------|-------------|
| `aurora.css` | Core framework only |
| `aurora-blog.css` | Core + Blog components |
| `aurora-admin.css` | Core + Admin dashboard components |

## Modules

| Module | Description | Size |
|--------|-------------|------|
| `tokens.css` | Design tokens, CSS variables | 20 KB |
| `themes.css` | 30+ themes, dark mode, code syntax | 52 KB |
| `reset.css` | Modern CSS reset | 12 KB |
| `typography.css` | Fonts, headings, prose | 14 KB |
| `layout.css` | Grid, flex, containers | 20 KB |
| `components.css` | Buttons, cards, forms | 34 KB |
| `animations.css` | Keyframes, transitions | 13 KB |
| `utilities.css` | Atomic helper classes | 25 KB |
| `blog.css` | Blog-specific components | 50 KB |
| `admin.css` | Admin dashboard components | 39 KB |

## Themes

Switch themes by setting `data-theme` on the `<html>` element:

```html
<html data-theme="cyberpunk">
```

### Available Themes

| Category | Themes |
|----------|--------|
| **Base** | `light`, `dark` |
| **Colors** | `cyberpunk`, `aurora`, `ocean`, `forest`, `sunset`, `lavender` |
| **Minimal** | `mono`, `mono-dark` |
| **Retro** | `8bits`, `8bits-dark`, `bubble`, `bubble-dark`, `galaxian`, `galaxian-light` |
| **Tech** | `geek`, `geek-dark`, `hacker`, `hacker-light` |
| **Nature** | `eco`, `eco-dark` |
| **Nostalgia** | `win95`, `win95-dark`, `bsod`, `bsod-light`, `mario`, `mario-dark`, `web90`, `web90-dark` |

### Theme Variables

Each theme defines colors, fonts, and visual properties:

```css
[data-theme="cyberpunk"] {
    --la-hue-primary: 300;
    --la-primary: oklch(65% 0.35 var(--la-hue-primary));
    --la-hero-image: url('...');
    --la-icon-logo: 'electric_bolt';
    --la-font-sans: 'Rajdhani', 'Orbitron', sans-serif;
    --la-radius-factor: 0.5;
}
```

## Code Syntax Highlighting

Built-in CSS variables for code blocks and syntax highlighting:

```css
:root {
    /* Code blocks */
    --la-code-bg: oklch(98% 0.005 ...);
    --la-code-text: oklch(30% 0.02 ...);
    --la-code-lang: oklch(55% 0.2 142);
    --la-code-lang-glow: oklch(55% 0.2 142 / 50%);

    /* Syntax colors */
    --la-syntax-keyword: oklch(50% 0.2 300);
    --la-syntax-string: oklch(45% 0.15 142);
    --la-syntax-function: oklch(50% 0.18 270);
    --la-syntax-comment: oklch(55% 0.02 ...);
    --la-syntax-variable: oklch(55% 0.15 30);
    --la-syntax-number: oklch(50% 0.18 210);
}
```

## Theme Switcher

Include the theme switcher JavaScript for interactive theme selection:

```html
<script src="path/to/theme-switcher.js"></script>
```

```javascript
// Programmatic usage
ThemeSwitcher.setTheme('cyberpunk');
ThemeSwitcher.getTheme(); // 'cyberpunk'
```

## Class Naming Convention

All classes use the `la-` prefix:

```css
.la-container  /* Layout */
.la-btn        /* Components */
.la-h1         /* Typography */
.la-flex       /* Utilities */
.la-animate-*  /* Animations */
```

## CSS Variables

Core variables use the `--la-` prefix:

```css
:root {
    /* Colors */
    --la-primary: oklch(62% 0.25 262);
    --la-secondary: oklch(60% 0.15 180);
    --la-accent: oklch(70% 0.18 35);

    /* Surfaces */
    --la-surface-0: oklch(100% 0 0);
    --la-surface-1: oklch(98% 0.005 ...);

    /* Spacing */
    --la-space-4: 1rem;
    --la-space-8: 2rem;

    /* Typography */
    --la-text-base: 1rem;
    --la-font-sans: 'Inter', sans-serif;

    /* Borders */
    --la-radius-md: 0.5rem;
    --la-radius-factor: 1;
}
```

## Accessibility

Lunar Aurora respects user preferences:

```css
/* High contrast mode */
@media (prefers-contrast: more) { ... }

/* Low contrast mode */
@media (prefers-contrast: less) { ... }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
    :root {
        --la-transition: none;
    }
}
```

## Browser Support

Lunar Aurora uses cutting-edge CSS features. Supported browsers:

- Chrome 111+
- Firefox 117+
- Safari 16.4+
- Edge 111+

## Documentation

Full documentation coming soon at [lunar-aurora.dev](https://lunar-aurora.dev)

## Related Projects

- [Lunar Quanta](https://github.com/yrbane/lunar-quanta) - PHP Framework
- [Lunar Template](https://github.com/yrbane/lunar-template) - Template Engine

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

<div align="center">
Made with love for the Lunar ecosystem
</div>
