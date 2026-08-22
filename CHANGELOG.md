# Changelog

Toutes les modifications notables de Lunar Aurora sont documentées dans ce fichier.

Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et le projet suit [SemVer](https://semver.org/lang/fr/).

> **Note de reconstitution** : ce fichier a été créé le 2026-08-22 à partir du journal Git, car aucun changelog n'existait au moment des publications 1.0.0 à 1.2.0. Les dates indiquées sont celles du commit qui a fait passer `package.json` à la version correspondante — elles ne reflètent pas nécessairement une date de publication distincte.

## 1.2.2 — 2026-08-22 · « Premières conventions »

### Ajouté
- `docs/GUIDELINES.md` : premières règles de conventions du projet (dépendances runtime, audit de sécurité `npm audit`, architecture CSS en cascade layers), désormais référencé depuis le README.

## 1.2.1 — 2026-08-22 · « Mémoire du projet »

### Ajouté
- Changelog bilingue (`CHANGELOG.md` / `CHANGELOG.en.md`) reconstituant l'historique complet des versions précédentes.

## 1.2.0 — 2026-08-06

### Ajouté
- Dix nouveaux composants CSS : cartes, statistiques (tuiles de KPI avec tendance), écrans d'état vide, navigation (fil d'Ariane, pagination), retours utilisateurs (alertes/toasts éphémères, barres de progression, interrupteurs), surcouches (infobulles, menus déroulants sur `<details>`).

## 1.1.0 — 2026-08-06

### Ajouté
- Composant tableau de données (densités, zébrage, en-tête figé, colonnes triables).

## 1.0.0 — 2025-12-06

Première version publique du framework. Cette version a regroupé plusieurs mois de développement (décembre 2025 à avril 2026) sans changelog intermédiaire.

### Ajouté
- Cœur du framework : tokens de design en espace colorimétrique OKLCH, architecture CSS en cascade layers (`@layer reset, tokens, themes, typography, layout, components, icons, utilities, animations`), reset CSS, typographie fluide (`clamp()`).
- 30+ thèmes commutables via l'attribut `data-theme`, dont 10 thèmes rétro/geek (8-bits, Bubble Bobble, Galaxian, Mario, Windows 95, BSOD...), avec switcher de thème interactif et persistance `localStorage`.
- Système d'icônes SVG autonome, en remplacement de la dépendance à Google Fonts / Material Icons.
- Propriétés logiques CSS (`margin-inline-start`, `inset-inline-end`...) pour un support RTL natif.
- Composants JS headless accessibles : Tabs (navigation clavier ARIA), Accordéons, Modales (`<dialog>` natif), alertes/toasts fermables.
- Module d'utilitaires étendus (gap, transitions, hover, glassmorphism, composants « recette »).
- Système de build Vite + PostCSS (`postcss-preset-env`, `cssnano`) générant `dist/aurora.min.css`.
- Documentation VitePress dans `docs/`.
- Pages de démonstration dans `examples/` : landing, getting-started, composants, documentation.
- Boutons et badges avec variantes et tailles étendues.

### Corrigé
- Switcher de thème utilisant désormais les variables CSS de façon cohérente sur toutes les pages, au lieu de valeurs codées en dur.
- Mise à jour forcée du halo « mooncat » au changement de thème.
- Nommage des classes utilitaires `gap` harmonisé avec le préfixe `la-`.
- Variables du mode sombre inlinées dans `themes.css` (au lieu d'un import externe).
- Remplacement de `__dirname` (non disponible en ESM) dans la configuration Vite.

### Modifié
- Nommage des animations keyframes standardisé avec le préfixe `la-` (ex. `q-fade-in` → `la-fade-in`).
- Pages de démonstration refactorées pour consommer le framework Lunar Aurora plutôt que du CSS ad hoc.
