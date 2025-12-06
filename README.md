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
- **@property** - Type-safe registered CSS custom properties
- **Native CSS Nesting** - No preprocessor required
- **Container Queries** - Component-level responsiveness
- **Fluid Typography** - Smooth scaling with `clamp()`
- **Relative Color Syntax** - Dynamic color manipulation
- **Modern Selectors** - `:has()`, `:is()`, `:where()`
- **Logical Properties** - Built-in RTL support
- **8 Themes** - Dark, Cyberpunk, Ocean, Forest, Sunset, Mono, Aurora, Lavender

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
| `themes.css` | Color themes, dark mode | 18 KB |
| `reset.css` | Modern CSS reset | 12 KB |
| `typography.css` | Fonts, headings, prose | 14 KB |
| `layout.css` | Grid, flex, containers | 20 KB |
| `components.css` | Buttons, cards, forms | 23 KB |
| `animations.css` | Keyframes, transitions | 13 KB |
| `utilities.css` | Atomic helper classes | 25 KB |
| `blog.css` | Blog-specific components | 32 KB |
| `admin.css` | Admin dashboard components | 39 KB |

## Themes

Switch themes by setting `data-theme` on the `<html>` element:

```html
<html data-theme="cyberpunk">
```

Available themes:
- `light` (default)
- `dark`
- `cyberpunk`
- `ocean`
- `forest`
- `sunset`
- `mono`
- `aurora`
- `lavender`

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
    --la-primary: oklch(62% 0.25 262);
    --la-space-4: 1rem;
    --la-text-base: 1rem;
    --la-radius-md: 0.5rem;
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
