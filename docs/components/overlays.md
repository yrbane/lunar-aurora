# Surcouches

Deux composants qui posent du contenu par-dessus la page : `.la-tooltip`, une
infobulle entièrement en CSS, et `.la-dropdown`, un menu bâti sur `<details>`.
Ni l'un ni l'autre n'exigent de JavaScript pour s'ouvrir, mais l'un comme
l'autre laissent une part du travail à l'intégration.

## Infobulle

`.la-tooltip` se pose sur l'élément déclencheur lui-même. Le libellé vient de
l'attribut `data-tooltip` et s'affiche au survol comme au focus clavier.

<div class="la-flex la-gap-4 la-mb-4" style="padding-block: 2rem;">
    <button class="la-btn la-tooltip" data-tooltip="Relancer la synchronisation avec le CRM" aria-describedby="tip-sync">Synchroniser</button>
    <span id="tip-sync" hidden>Relancer la synchronisation avec le CRM</span>
    <button class="la-btn la-tooltip" data-tooltip="Archiver le projet : il restera consultable en lecture seule" aria-describedby="tip-arch">Archiver</button>
    <span id="tip-arch" hidden>Archiver le projet : il restera consultable en lecture seule</span>
</div>

```html
<button class="la-btn la-tooltip"
        data-tooltip="Relancer la synchronisation avec le CRM"
        aria-describedby="tip-sync">Synchroniser</button>
<span id="tip-sync" hidden>Relancer la synchronisation avec le CRM</span>
```

La bulle ne dépasse jamais 16 rem ni la largeur du viewport : un long libellé
passe à la ligne au lieu de sortir de l'écran. Elle ne capte pas le pointeur,
donc elle ne vole jamais le clic à son déclencheur.

### Placements

Sans classe, la bulle s'affiche au-dessus. Trois classes déplacent l'ensemble
bulle et flèche : `bottom`, `start` (avant, donc à gauche en écriture
gauche-à-droite) et `end` (après).

<div class="la-flex la-gap-4 la-mb-4" style="padding-block: 3rem; flex-wrap: wrap;">
    <button class="la-btn la-tooltip" data-tooltip="Au-dessus (défaut)">Haut</button>
    <button class="la-btn la-tooltip bottom" data-tooltip="En dessous du déclencheur">Bas</button>
    <button class="la-btn la-tooltip start" data-tooltip="Avant le déclencheur">Avant</button>
    <button class="la-btn la-tooltip end" data-tooltip="Après le déclencheur">Après</button>
</div>

```html
<button class="la-tooltip" data-tooltip="…">Haut</button>          <!-- défaut -->
<button class="la-tooltip bottom" data-tooltip="…">Bas</button>
<button class="la-tooltip start" data-tooltip="…">Avant</button>
<button class="la-tooltip end" data-tooltip="…">Après</button>
```

Sous 30 rem, `start` et `end` reviennent au-dessus du déclencheur, centrés : une
bulle latérale déborderait presque toujours sur un écran étroit. La flèche
latérale, qui n'aurait plus de sens, est alors retirée.

### Survol et focus clavier

La révélation répond à trois conditions : `:hover`, `:focus-visible` sur le
déclencheur, et `:has(:focus-visible)` sur un enfant. Sans ce dernier cas,
l'infobulle resterait décorative pour qui navigue au clavier.

Quand le déclencheur n'est pas focusable — un `<span>`, une icône — enveloppez
un élément qui l'est :

```html
<span class="la-tooltip" data-tooltip="Score de couverture des tests unitaires">
    <button type="button" class="la-btn sm" aria-describedby="tip-cov">Couverture 87 %</button>
</span>
<span id="tip-cov" hidden>Score de couverture des tests unitaires</span>
```

### Rattachement sémantique

L'infobulle visuelle ne suffit pas aux lecteurs d'écran : ni `data-tooltip` ni le
contenu généré d'un `::after` ne sont restitués de façon fiable. Doublez toujours
le texte par un élément référencé en `aria-describedby`.

```html
<button class="la-tooltip" data-tooltip="Supprimer la ligne"
        aria-label="Supprimer la ligne"
        aria-describedby="tip-suppr">🗑</button>
<span id="tip-suppr" hidden>Supprimer la ligne</span>
```

Un élément porteur de `hidden` reste lisible via `aria-describedby` tout en
restant invisible à l'écran. C'est le repli le plus sûr, sans classe utilitaire.

Notez la distinction : `aria-label` nomme le bouton dont le contenu est un
pictogramme, `aria-describedby` le décrit. Un bouton textuel n'a besoin que du
second.

## Menu déroulant

`.la-dropdown` se pose sur un `<details>`. Le `<summary>` porte
`.la-dropdown-toggle` et devient le déclencheur ; le panneau est un
`.la-dropdown-menu` positionné en absolu. L'ouverture et la fermeture au clavier
comme à la souris viennent de l'élément natif, sans une ligne de JavaScript.

Le style du déclencheur vise `.la-dropdown > summary` : la classe
`.la-dropdown-toggle` n'ajoute rien d'elle-même, elle nomme le rôle de l'élément
et sert de point d'accroche à votre propre feuille ou à vos scripts.

<div class="la-mb-4" style="padding-block-end: 12rem;">
<details class="la-dropdown">
    <summary class="la-dropdown-toggle">Actions sur le déploiement</summary>
    <div class="la-dropdown-menu">
        <a class="la-dropdown-item" href="#">Voir les journaux</a>
        <a class="la-dropdown-item" href="#">Relancer la construction</a>
        <a class="la-dropdown-item" href="#">Promouvoir en production</a>
        <hr class="la-dropdown-divider">
        <a class="la-dropdown-item danger" href="#">Annuler le déploiement</a>
    </div>
</details>
</div>

```html
<details class="la-dropdown">
    <summary class="la-dropdown-toggle">Actions sur le déploiement</summary>
    <div class="la-dropdown-menu">
        <a class="la-dropdown-item" href="/deploiements/4812/journaux">Voir les journaux</a>
        <a class="la-dropdown-item" href="/deploiements/4812/relancer">Relancer la construction</a>
        <a class="la-dropdown-item" href="/deploiements/4812/promouvoir">Promouvoir en production</a>
        <hr class="la-dropdown-divider">
        <a class="la-dropdown-item danger" href="/deploiements/4812/annuler">Annuler le déploiement</a>
    </div>
</details>
```

Le triangle natif du `<summary>` est remplacé par un chevron qui pivote quand
l'attribut `open` apparaît : l'état ouvert ou fermé se lit sans recourir à la
couleur. Le panneau ne déborde jamais de l'écran, et une liste longue défile à
l'intérieur plutôt que de sortir de la fenêtre.

### Contenu du panneau

Quatre éléments composent un menu : `.la-dropdown-item` pour les entrées,
`.la-dropdown-divider` pour un trait de séparation, `.la-dropdown-label` pour un
intitulé de section, et rien d'autre n'est imposé.

<div class="la-mb-4" style="padding-block-end: 18rem;">
<details class="la-dropdown">
    <summary class="la-dropdown-toggle">Filtrer par statut</summary>
    <div class="la-dropdown-menu">
        <span class="la-dropdown-label">Cycle de vie</span>
        <button class="la-dropdown-item active" type="button">En cours</button>
        <button class="la-dropdown-item" type="button">En attente de validation</button>
        <button class="la-dropdown-item" type="button">Terminé</button>
        <hr class="la-dropdown-divider">
        <span class="la-dropdown-label">Archives</span>
        <button class="la-dropdown-item" type="button">Archivé cette année</button>
        <button class="la-dropdown-item" type="button" aria-disabled="true">Corbeille (vide)</button>
    </div>
</details>
</div>

```html
<div class="la-dropdown-menu">
    <span class="la-dropdown-label">Cycle de vie</span>
    <button class="la-dropdown-item active" type="button">En cours</button>
    <button class="la-dropdown-item" type="button">En attente de validation</button>
    <hr class="la-dropdown-divider">
    <span class="la-dropdown-label">Archives</span>
    <button class="la-dropdown-item" type="button" aria-disabled="true">Corbeille (vide)</button>
</div>
```

`.la-dropdown-divider` fonctionne sur un `<hr>` comme sur un
`<div role="separator">`.

### États d'une entrée

- `.active`, ou `[aria-current="true"]`, marque l'entrée sélectionnée : couleur
  primaire, graisse renforcée et liseré interne — la couleur n'est donc pas
  seule à porter l'information ;
- `.danger` colore une action destructrice. Le libellé doit le dire aussi
  (« Supprimer », « Annuler le déploiement ») ;
- `[aria-disabled="true"]` éteint une entrée sans la retirer : l'utilisateur sait
  qu'elle existe, ce qui est préférable à `disabled` dans un menu.

```html
<a class="la-dropdown-item" aria-current="true" href="#">En cours</a>
<button class="la-dropdown-item danger" type="button">Supprimer le projet</button>
<button class="la-dropdown-item" type="button" aria-disabled="true">Restaurer</button>
```

### Alignements

Trois classes se posent sur le `<details>` :

- `start` — le panneau s'aligne sur le bord de début du déclencheur. C'est le
  comportement par défaut ; la classe existe pour l'écrire explicitement ;
- `end` — le panneau s'aligne sur le bord de fin. À utiliser quand le
  déclencheur est en bout de ligne, par exemple dans un en-tête ;
- `up` — le panneau s'ouvre vers le haut. À poser quand le déclencheur se trouve
  en bas de page.

<div class="la-flex la-gap-4 la-mb-4" style="justify-content: space-between; padding-block-end: 12rem;">
<details class="la-dropdown start">
    <summary class="la-dropdown-toggle">Aligné au début</summary>
    <div class="la-dropdown-menu">
        <a class="la-dropdown-item" href="#">Exporter en CSV</a>
        <a class="la-dropdown-item" href="#">Exporter en PDF</a>
    </div>
</details>
<details class="la-dropdown end">
    <summary class="la-dropdown-toggle">Aligné à la fin</summary>
    <div class="la-dropdown-menu">
        <a class="la-dropdown-item" href="#">Mon profil</a>
        <a class="la-dropdown-item" href="#">Préférences</a>
        <hr class="la-dropdown-divider">
        <a class="la-dropdown-item" href="#">Se déconnecter</a>
    </div>
</details>
</div>

```html
<details class="la-dropdown start">…</details>
<details class="la-dropdown end">…</details>
<details class="la-dropdown up">…</details>
```

### Ce qui reste à l'application

Le composant est honnête sur ses limites. `<details>` donne l'ouverture, la
fermeture et le parcours à la tabulation ; il ne donne rien de plus.

- **Fermeture au clic extérieur** : elle n'existe pas. Il faut un écouteur sur
  `document` qui retire l'attribut `open`.
- **Fermeture sur Échap** : Chrome et Firefox referment déjà le `<details>`
  quand le focus est à l'intérieur du menu. Ailleurs, prévoyez un écouteur.
- **Flèches haut et bas entre les entrées** : c'est ce qu'un utilisateur attend
  d'un véritable `role="menu"`, et le CSS ne peut pas le fournir.

```js
// Fermeture au clic extérieur et sur Échap.
document.addEventListener('click', (e) => {
    document.querySelectorAll('.la-dropdown[open]').forEach((d) => {
        if (!d.contains(e.target)) d.removeAttribute('open');
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.la-dropdown[open]').forEach((d) => {
        d.removeAttribute('open');
        d.querySelector('summary')?.focus();
    });
});
```

Tant que ce complément n'est pas en place, **restez sur des liens et des boutons
ordinaires, sans `role="menu"` ni `role="menuitem"`** : la tabulation suffit
alors, et le balisage ne promet pas un comportement qu'il ne tient pas. Ce n'est
qu'une fois la navigation aux flèches implémentée que les rôles deviennent
légitimes :

```html
<div class="la-dropdown-menu" role="menu">
    <a class="la-dropdown-item" role="menuitem" href="/modifier">Modifier</a>
    <a class="la-dropdown-item" role="menuitem" href="/dupliquer">Dupliquer</a>
</div>
```

## Accessibilité

Ce que les composants prennent en charge :

- l'infobulle apparaît au focus clavier autant qu'au survol, y compris lorsque
  c'est un enfant du déclencheur qui reçoit le focus ;
- la bulle ne capte pas le pointeur et ne peut pas masquer sa propre cible ;
- le repli sous 30 rem empêche une bulle latérale de sortir de l'écran ;
- le chevron du menu indique l'état ouvert ou fermé par son orientation, pas par
  une couleur ;
- l'entrée active du menu ajoute graisse et liseré à la teinte primaire ;
- `<summary>` et `.la-dropdown-item` affichent un anneau de focus visible ;
- `[aria-disabled="true"]` éteint une entrée tout en la laissant présente dans
  le flux, contrairement à un retrait pur et simple ;
- sous `prefers-reduced-motion`, le glissement d'apparition de l'infobulle est
  annulé sans que son centrage en souffre, et le fondu du menu disparaît.

Ce qui reste à votre charge :

- doubler systématiquement `data-tooltip` par un élément référencé en
  `aria-describedby` : le contenu généré n'est pas restitué de façon fiable ;
- nommer les déclencheurs purement iconographiques avec `aria-label` ;
- ne jamais mettre dans une infobulle une information indispensable à l'action —
  elle est invisible au tactile ;
- décider entre menu sémantique et simple liste de liens : `role="menu"` engage
  la navigation aux flèches, qu'il faut alors écrire ;
- restituer le focus au `<summary>` lorsque le menu se ferme au clavier ;
- écrire des libellés d'entrée qui se suffisent à eux-mêmes, en particulier pour
  les actions `danger`, dont la couleur ne doit pas être le seul avertissement.
