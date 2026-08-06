# Cartes

La carte regroupe un contenu autonome — un projet, un article, un réglage. C'est
le conteneur le plus courant d'une interface.

## Base

<div class="la-card la-mb-4" style="max-inline-size: 22rem;">
    <div class="la-card-header"><strong>lunar-aurora</strong></div>
    <div class="la-card-body">
        Framework CSS avant-gardiste : OKLCH, cascade layers, container queries.
    </div>
    <div class="la-card-footer"><span class="la-badge">CSS</span></div>
</div>

```html
<div class="la-card">
    <div class="la-card-header"><strong>lunar-aurora</strong></div>
    <div class="la-card-body">Framework CSS avant-gardiste…</div>
    <div class="la-card-footer"><span class="la-badge">CSS</span></div>
</div>
```

Les trois zones sont facultatives : une carte peut n'avoir qu'un `.la-card-body`.

## Variantes

```html
<div class="la-card elevated">…</div>     <!-- ombre portée -->
<div class="la-card outlined">…</div>     <!-- filet seul, sans ombre -->
<div class="la-card glass">…</div>        <!-- verre dépoli -->
<div class="la-card compact">…</div>      <!-- densité resserrée -->
```

## Carte cliquable

`interactive` signale que la carte entière mène quelque part : élévation au survol
et anneau de focus au clavier.

```html
<a class="la-card interactive" href="/projets/aurora">
    <div class="la-card-body">
        <strong>lunar-aurora</strong>
        <p>Framework CSS avant-gardiste.</p>
    </div>
</a>
```

Utilisez un `<a>` ou un `<button>`, pas un `<div>` avec un gestionnaire de clic :
la navigation clavier et les lecteurs d'écran en dépendent.

## Média

`.la-card-media` occupe toute la largeur, sans marge, en haut de la carte.

```html
<div class="la-card">
    <img class="la-card-media" src="capture.webp" alt="Aperçu du tableau de bord">
    <div class="la-card-body">…</div>
</div>
```

Une image décorative prend `alt=""` ; une image porteuse d'information décrit ce
qu'elle montre.

## Grille de cartes

Associez `.la-auto-grid` : les colonnes s'adaptent sans media query.

```html
<div class="la-auto-grid la-gap-4">
    <div class="la-card">…</div>
    <div class="la-card">…</div>
    <div class="la-card">…</div>
</div>
```
