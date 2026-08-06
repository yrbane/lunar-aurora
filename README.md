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
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()

</div>

## ✨ Fonctionnalités

- **Espace colorimétrique OKLCH** - Couleurs perceptuellement uniformes et syntaxe relative
- **30+ Thèmes** - Dark, Cyberpunk, Aurora, Hacker, 8-bits, et bien plus
- **Build System Moderne** - Vite + PostCSS pour une expérience développeur optimale
- **Icônes SVG Autonomes** - Aucune dépendance à Google Fonts, icônes stylisables via CSS
- **Composants JS Headless** - Tabs, Accordéons, Modales accessibles et légers
- **CSS Nesting & Layers** - Architecture propre et sans conflits
- **Container Queries** - Responsivité au niveau des composants
- **Propriétés Logiques** - Support RTL (Right-to-Left) natif

## 🚀 Démarrage

### Installation via NPM

```bash
npm install lunar-aurora
```

### Import dans votre projet

Si vous utilisez un bundler (Vite, Webpack...) :

```js
// Dans votre point d'entrée JS (main.js)
import 'lunar-aurora/dist/aurora.min.css';
import LunarAurora from 'lunar-aurora';

// Initialise les composants interactifs
LunarAurora.init();
```

### Utilisation via CDN (Prototypage)

```html
<link rel="stylesheet" href="https://unpkg.com/lunar-aurora@latest/dist/aurora.min.css">
<script type="module" src="https://unpkg.com/lunar-aurora@latest/dist/aurora.js"></script>
```

## 🛠️ Développement

Cloner le dépôt et installer les dépendances :

```bash
git clone https://github.com/yrbane/lunar-aurora.git
cd lunar-aurora
npm install
```

Lancer le serveur de développement (avec Hot Reload) :

```bash
npm run dev
```

Construire pour la production :

```bash
npm run build
```

Lancer la documentation :

```bash
npm run docs:dev
```

## 📦 Structure

```
lunar-aurora/
├── dist/                   # Fichiers de production
│   ├── aurora.min.css      # Bundle CSS minifié
│   └── aurora.js           # Bundle JS (ESM)
├── src/                    # Code source
│   ├── themes/             # Définitions des thèmes
│   ├── js/                 # Composants JS (Tabs, Modal...)
│   ├── aurora.css          # Point d'entrée CSS
│   ├── icons.css           # Système d'icônes SVG
│   └── ...
├── examples/               # Page de démo
└── docs/                   # Documentation (VitePress)
```

## 🎨 Thèmes

Changez de thème via l'attribut `data-theme` sur `<html>` ou via JavaScript.

```html
<html data-theme="cyberpunk">
```

```js
import LunarAurora from 'lunar-aurora';

// Changer de thème
LunarAurora.Themes.setTheme('ocean');

// Obtenir le thème actuel
const current = LunarAurora.Themes.getTheme();
```

## 🧩 Composants

Le framework inclut des composants purement CSS et des composants interactifs (JS).

- **Boutons, Badges, Avatars, Chips** (CSS pur)
- **Cartes** (CSS pur — élevée, contourée, verre dépoli, cliquable)
- **Formulaires** — champs, listes, cases, radios, **interrupteurs** (CSS pur)
- **Tableaux de données** (CSS pur — densités, zébrage, en-tête figé, colonnes triables)
- **Statistiques & états vides** (CSS pur — tuiles de KPI avec tendance, écrans « rien à afficher »)
- **Navigation** — fil d'Ariane, pagination (CSS pur)
- **Retours utilisateur** — alertes, notifications éphémères, barres de progression (CSS pur)
- **Surcouches** — infobulles, menus déroulants sur `<details>` natif (CSS pur)
- **Tabs** (JS + Accessibilité)
- **Accordéons** (JS + Accessibilité)
- **Modales** (JS + `<dialog>` natif)

Voir la [documentation complète](https://yrbane.github.io/lunar-aurora/) pour plus de détails.

## 🌍 Navigateurs Supportés

Lunar Aurora utilise des fonctionnalités CSS modernes (Layers, Nesting, OKLCH).

| Navigateur | Version minimum |
|------------|-----------------|
| Chrome     | 112+            |
| Firefox    | 117+            |
| Safari     | 16.5+           |
| Edge       | 112+            |

## Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">
Fait avec 💜 pour l'écosystème Lunar
</div>