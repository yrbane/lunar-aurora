# Roadmap: Lunar Aurora v1.1.0 "Aurora Ascending"

Ce document trace la feuille de route pour la version 1.1.0 du framework. L'objectif est de moderniser la stack technique, améliorer l'accessibilité native (RTL), l'indépendance (Icônes) et l'expérience développeur (Build system).

## 📅 Milestone: v1.1.0 Modernization & Scalability

### 🏗️ 1. Infrastructure & Build System
**Priorité : Haute** | **Statut : À faire**

Actuellement, le projet sert des fichiers CSS bruts. Nous devons introduire une étape de build pour la minification, le pré-traitement et l'optimisation.

**Tâches (Issue #1) :**
- [ ] Initialiser `package.json` et installer **Vite**.
- [ ] Configurer **PostCSS** (avec `postcss-preset-env`) pour la compatibilité navigateur.
- [ ] Configurer un script de build pour générer `dist/aurora.min.css` et `dist/aurora.js`.
- [ ] Mettre en place un environnement de développement (`npm run dev`) avec Hot Module Replacement (HMR).

### 🌍 2. Support Internationalisation (RTL)
**Priorité : Haute** | **Statut : À faire**

Remplacer les propriétés physiques par des propriétés logiques pour supporter nativement les langues s'écrivant de droite à gauche (Arabe, Hébreu).

**Tâches (Issue #2) :**
- [ ] Refactoriser `margin-left`/`right` -> `margin-inline-start`/`end`.
- [ ] Refactoriser `padding-left`/`right` -> `padding-inline-start`/`end`.
- [ ] Refactoriser `left`/`right` (positionnement) -> `inset-inline-start`/`end`.
- [ ] Refactoriser `border-left`/`right` -> `border-inline-start`/`end`.
- [ ] Vérifier les propriétés `text-align`.

### 🎨 3. Système d'Icônes Autonome
**Priorité : Moyenne** | **Statut : À faire**

Supprimer la dépendance à Google Fonts (Material Icons) pour améliorer la performance et la confidentialité (GDPR).

**Tâches (Issue #3) :**
- [ ] Choisir un set d'icônes SVG Open Source (Recommandé : **Lucide** ou **Phosphor**).
- [ ] Intégrer les SVGs via un sprite ou une solution CSS in-line optimisée.
- [ ] Mettre à jour `examples/index.html` pour utiliser la nouvelle syntaxe d'icônes.
- [ ] Supprimer le lien `<link>` vers Google Fonts.

### ⚡ 4. Refactoring des Animations
**Priorité : Faible** | **Statut : À faire**

Harmoniser la nomenclature des keyframes pour correspondre au préfixe du framework.

**Tâches (Issue #4) :**
- [ ] Renommer les keyframes `q-*` (ex: `q-fade-in`) en `la-*` (ex: `la-fade-in`).
- [ ] Mettre à jour toutes les références dans `src/animations.css`.
- [ ] Vérifier qu'aucune animation n'est cassée dans la démo.

### 🧩 5. Composants JavaScript "Headless"
**Priorité : Moyenne** | **Statut : À faire**

Fournir la logique JS minimale pour les composants interactifs, sans imposer de style bloquant (séparation préoccupation).

**Tâches (Issue #5) :**
- [ ] Créer une structure modulaire JS (`src/js/`).
- [ ] Implémenter **Tabs** (Onglets) accessibles (gestion clavier ARIA).
- [ ] Implémenter **Accordion/Collapse**.
- [ ] Implémenter **Modal/Dialog**.
- [ ] Implémenter **Dismissible Alerts**.
- [ ] Mettre à jour le bundle JS global pour inclure ces modules.

### 📚 6. Documentation
**Priorité : Moyenne** | **Statut : À faire**

Remplacer le fichier unique HTML par un véritable site de documentation.

**Tâches (Issue #6) :**
- [ ] Initialiser **VitePress** dans le dossier `docs/`.
- [ ] Migrer le contenu de `examples/index.html` vers des fichiers Markdown/MDX.
- [ ] Créer une page par composant (Boutons, Cartes, Formulaires...).
- [ ] Créer un guide "Getting Started".

---

**Convention de commit :**
Utiliser [Conventional Commits](https://www.conventionalcommits.org/) (ex: `feat: add vite config`, `refactor: switch to logical props`).
