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

**Framework CSS moderne utilisant les techniques les plus avant-gardistes**

[![License: MIT](https://img.shields.io/badge/License-MIT-violet.svg)](https://opensource.org/licenses/MIT)
[![CSS](https://img.shields.io/badge/CSS-Modern-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)

</div>

## Fonctionnalites

- **Espace colorimetrique OKLCH** - Couleurs perceptuellement uniformes
- **30+ Themes** - Dark, Cyberpunk, Aurora, Hacker, 8-bits, et bien plus
- **Coloration syntaxique** - Variables CSS pour les blocs de code
- **@property** - Proprietes CSS personnalisees typees
- **CSS Nesting natif** - Aucun preprocesseur requis
- **Container Queries** - Responsivite au niveau des composants
- **Typographie fluide** - Mise a l'echelle avec `clamp()`
- **Syntaxe couleurs relatives** - Manipulation dynamique des couleurs
- **Selecteurs modernes** - `:has()`, `:is()`, `:where()`
- **Proprietes logiques** - Support RTL integre
- **Accessibilite** - Respecte `prefers-reduced-motion`, `prefers-contrast`

## Installation

```bash
git clone https://github.com/yrbane/lunar-aurora.git
```

Copiez le dossier `src/` dans votre projet et importez les fichiers CSS :

```html
<!DOCTYPE html>
<html lang="fr" data-theme="dark">
<head>
    <link rel="stylesheet" href="path/to/lunar-aurora/src/aurora.css">
</head>
<body>
    <div class="la-container">
        <h1 class="la-h1">Bienvenue sur Lunar Aurora !</h1>
        <button class="la-btn primary">Commencer</button>
    </div>
</body>
</html>
```

## Structure

```
src/
├── aurora.css          # Bundle principal (importe tout)
├── aurora-blog.css     # Bundle blog optimise
├── aurora-admin.css    # Bundle admin optimise
├── tokens.css          # Design tokens (20 KB)
├── themes.css          # 30+ themes (52 KB)
├── reset.css           # Reset CSS moderne (12 KB)
├── typography.css      # Typographie (14 KB)
├── layout.css          # Grilles, flexbox (20 KB)
├── components.css      # Boutons, cartes, formulaires (34 KB)
├── animations.css      # Animations (13 KB)
├── utilities.css       # Classes utilitaires (25 KB)
├── blog.css            # Composants blog (50 KB)
├── admin.css           # Composants admin (39 KB)
└── theme-switcher.js   # Switcher de theme JS
```

## Themes

Changez de theme via l'attribut `data-theme` sur `<html>` :

```html
<html data-theme="cyberpunk">
```

### Themes disponibles

| Categorie | Themes |
|-----------|--------|
| **Base** | `light`, `dark` |
| **Couleurs** | `cyberpunk`, `aurora`, `ocean`, `forest`, `sunset`, `lavender` |
| **Minimal** | `mono`, `mono-dark` |
| **Retro** | `8bits`, `8bits-dark`, `bubble`, `bubble-dark`, `galaxian`, `galaxian-light` |
| **Tech** | `geek`, `geek-dark`, `hacker`, `hacker-light` |
| **Nature** | `eco`, `eco-dark` |
| **Nostalgie** | `win95`, `win95-dark`, `bsod`, `bsod-light`, `mario`, `mario-dark`, `web90`, `web90-dark` |

### Variables de theme

Chaque theme definit couleurs, polices et proprietes visuelles :

```css
[data-theme="cyberpunk"] {
    color-scheme: dark;
    --la-hue-primary: 300;
    --la-hue-secondary: 180;
    --la-primary: oklch(65% 0.35 var(--la-hue-primary));
    --la-hero-image: url('...');
    --la-icon-logo: 'electric_bolt';
    --la-font-sans: 'Rajdhani', 'Orbitron', sans-serif;
    --la-radius-factor: 0.5;
}
```

## Coloration syntaxique

Variables CSS integrees pour les blocs de code :

```css
:root {
    /* Blocs de code */
    --la-code-bg: oklch(98% 0.005 var(--la-hue-primary));
    --la-code-text: oklch(30% 0.02 var(--la-hue-primary));
    --la-code-lang: oklch(55% 0.2 142);
    --la-code-lang-glow: oklch(55% 0.2 142 / 50%);
    --la-code-border: oklch(85% 0.01 var(--la-hue-primary));
    --la-code-inline-bg: oklch(94% 0.01 var(--la-hue-primary));

    /* Syntaxe */
    --la-syntax-keyword: oklch(50% 0.2 300);
    --la-syntax-string: oklch(45% 0.15 142);
    --la-syntax-function: oklch(50% 0.18 270);
    --la-syntax-comment: oklch(55% 0.02 var(--la-hue-primary));
    --la-syntax-variable: oklch(55% 0.15 30);
    --la-syntax-number: oklch(50% 0.18 210);
    --la-syntax-operator: oklch(55% 0.22 25);
    --la-syntax-class: oklch(55% 0.18 45);
    --la-syntax-property: oklch(50% 0.18 210);
    --la-syntax-tag: oklch(50% 0.2 142);
}
```

## Theme Switcher

Utilisez le switcher JavaScript pour changer de theme interactivement :

```html
<script src="path/to/theme-switcher.js"></script>

<script>
// Usage programmatique
ThemeSwitcher.setTheme('cyberpunk');
ThemeSwitcher.getTheme(); // 'cyberpunk'

// Initialisation automatique
ThemeSwitcher.init();
</script>
```

Le theme est sauvegarde dans `localStorage` sous la cle `lunar-theme`.

## Convention de nommage

Toutes les classes utilisent le prefixe `la-` :

```css
.la-container   /* Layout */
.la-card        /* Composants */
.la-btn         /* Boutons */
.la-h1          /* Typographie */
.la-flex        /* Utilitaires */
.la-animate-*   /* Animations */
```

## Variables CSS

Les variables utilisent le prefixe `--la-` :

```css
:root {
    /* Teintes */
    --la-hue-primary: 250;
    --la-hue-secondary: 180;
    --la-hue-accent: 35;

    /* Couleurs */
    --la-primary: oklch(55% 0.2 var(--la-hue-primary));
    --la-secondary: oklch(60% 0.15 var(--la-hue-secondary));
    --la-accent: oklch(70% 0.18 var(--la-hue-accent));

    /* Surfaces */
    --la-surface-0: oklch(100% 0 0);
    --la-surface-1: oklch(98% 0.005 var(--la-hue-primary));
    --la-surface-2: oklch(96% 0.008 var(--la-hue-primary));

    /* Texte */
    --la-text: oklch(15% 0.02 var(--la-hue-primary));
    --la-text-secondary: oklch(40% 0.02 var(--la-hue-primary));
    --la-text-muted: oklch(55% 0.01 var(--la-hue-primary));

    /* Espacement */
    --la-space-1: 0.25rem;
    --la-space-2: 0.5rem;
    --la-space-4: 1rem;
    --la-space-8: 2rem;

    /* Typographie */
    --la-font-sans: 'Inter', system-ui, sans-serif;
    --la-font-mono: 'JetBrains Mono', monospace;
    --la-text-base: 1rem;

    /* Bordures */
    --la-radius-sm: 0.25rem;
    --la-radius-md: 0.5rem;
    --la-radius-lg: 1rem;
    --la-radius-factor: 1;  /* Multiplicateur global */
}
```

## Composants

### Boutons

```html
<button class="la-btn">Default</button>
<button class="la-btn primary">Primary</button>
<button class="la-btn secondary">Secondary</button>
<button class="la-btn success">Success</button>
<button class="la-btn danger">Danger</button>
<button class="la-btn ghost">Ghost</button>
<button class="la-btn sm">Small</button>
<button class="la-btn lg">Large</button>
```

### Cartes

```html
<div class="la-card">
    <div class="la-card-header">Titre</div>
    <div class="la-card-body">Contenu</div>
    <div class="la-card-footer">Actions</div>
</div>

<a href="#" class="la-card interactive">Carte cliquable</a>
```

### Badges

```html
<span class="la-badge">Default</span>
<span class="la-badge primary">Primary</span>
<span class="la-badge success">Success</span>
<span class="la-badge warning">Warning</span>
<span class="la-badge danger">Danger</span>
```

### Formulaires

```html
<div class="la-form-group">
    <label class="la-label">Label</label>
    <input type="text" class="la-input" placeholder="...">
    <span class="la-form-hint">Aide contextuelle</span>
</div>

<textarea class="la-textarea" rows="4"></textarea>
<select class="la-select">...</select>
```

## Utilitaires

### Flexbox

```html
<div class="la-flex">...</div>
<div class="la-flex la-flex-col">...</div>
<div class="la-flex la-items-center la-justify-between">...</div>
<div class="la-flex la-gap-4">...</div>
```

### Espacement

```html
<div class="la-m-4">margin</div>
<div class="la-p-4">padding</div>
<div class="la-mt-8">margin-top</div>
<div class="la-px-6">padding horizontal</div>
```

### Texte

```html
<p class="la-text-sm">Petit</p>
<p class="la-text-lg">Grand</p>
<p class="la-text-center">Centre</p>
<p class="la-text-muted">Attenue</p>
<p class="la-font-bold">Gras</p>
```

## Accessibilite

Lunar Aurora respecte les preferences utilisateur :

```css
/* Contraste eleve */
@media (prefers-contrast: more) {
    :root {
        --la-text: oklch(5% 0 0);
        --la-border: oklch(50% 0.02 var(--la-hue-primary));
    }
}

/* Contraste reduit */
@media (prefers-contrast: less) {
    :root {
        --la-text: oklch(35% 0.02 var(--la-hue-primary));
    }
}

/* Mouvement reduit */
@media (prefers-reduced-motion: reduce) {
    :root {
        --la-transition: none;
        --la-duration-base: 0ms;
    }
}
```

## Support navigateurs

Lunar Aurora utilise des fonctionnalites CSS modernes :

| Navigateur | Version minimum |
|------------|-----------------|
| Chrome | 111+ |
| Firefox | 117+ |
| Safari | 16.4+ |
| Edge | 111+ |

## Projets lies

- [Lunar Quanta](https://github.com/yrbane/lunar-quanta) - Framework PHP
- [Lunar Template](https://github.com/yrbane/lunar-template) - Moteur de templates

## Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de details.

---

<div align="center">
Fait avec amour pour l'ecosysteme Lunar
</div>
