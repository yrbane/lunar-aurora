# Navigation

Deux composants pour situer l'utilisateur : `.la-breadcrumb`, qui montre le
chemin parcouru, et `.la-pagination`, qui découpe une longue liste. Tous deux
s'appliquent à un `<nav>` contenant une liste, et lisent leur état dans le
balisage plutôt que dans une classe.

## Fil d'Ariane

`.la-breadcrumb` habille un `<nav>` contenant un `<ol>` : l'ordre est porteur de
sens, la liste ordonnée le dit. Le dernier maillon porte `aria-current="page"` et
devient inerte.

<nav class="la-breadcrumb la-mb-4" aria-label="Fil d'Ariane">
    <ol>
        <li><a href="#">Espace client</a></li>
        <li><a href="#">Projets</a></li>
        <li><a href="#">Refonte intranet</a></li>
        <li><span aria-current="page">Jalons</span></li>
    </ol>
</nav>

```html
<nav class="la-breadcrumb" aria-label="Fil d'Ariane">
    <ol>
        <li><a href="/espace-client">Espace client</a></li>
        <li><a href="/espace-client/projets">Projets</a></li>
        <li><a href="/espace-client/projets/refonte-intranet">Refonte intranet</a></li>
        <li><span aria-current="page">Jalons</span></li>
    </ol>
</nav>
```

Un `<ul>` est accepté par le style, mais un fil d'Ariane décrit une hiérarchie
ordonnée : préférez `<ol>`.

### Séparateur

Le séparateur est un pseudo-élément posé après chaque maillon sauf le dernier.
Il se change par la variable `--_sep`, qui attend une chaîne CSS.

<nav class="la-breadcrumb la-mb-4" aria-label="Fil d'Ariane" style="--_sep: '›'">
    <ol>
        <li><a href="#">Catalogue</a></li>
        <li><a href="#">Éclairage</a></li>
        <li><span aria-current="page">Suspensions</span></li>
    </ol>
</nav>

```html
<nav class="la-breadcrumb" aria-label="Fil d'Ariane" style="--_sep: '›'">…</nav>
```

Le séparateur est déclaré avec un texte alternatif vide : il n'est pas restitué
à la vocalisation. Si vous devez viser un navigateur dépourvu de cette syntaxe,
posez plutôt vous-même `aria-hidden="true"` sur un élément séparateur dédié dans
le balisage.

### Page courante

`[aria-current="page"]` reçoit un contraste renforcé, une graisse moyenne et
`pointer-events: none` : on y est déjà, il n'y a rien à cliquer. Le sélecteur vise
l'attribut et jamais une classe — si `aria-current` manque, le style manque aussi,
et l'oubli devient visible.

```html
<li><span aria-current="page">Jalons</span></li>
<!-- ou, si le dernier maillon doit rester un lien pour d'autres raisons -->
<li><a href="/…/jalons" aria-current="page">Jalons</a></li>
```

### Variante compacte

`sm` réduit le corps de texte et resserre l'espacement. Elle convient à un fil
placé dans un en-tête dense ou au-dessus d'un tableau.

<nav class="la-breadcrumb sm la-mb-4" aria-label="Fil d'Ariane">
    <ol>
        <li><a href="#">Administration</a></li>
        <li><a href="#">Utilisateurs</a></li>
        <li><span aria-current="page">Camille Rousset</span></li>
    </ol>
</nav>

```html
<nav class="la-breadcrumb sm" aria-label="Fil d'Ariane">…</nav>
```

### Repli mobile

Sous 30 rem, les maillons intermédiaires sont masqués : il ne reste que la
racine, le parent immédiat et la page courante, et une ellipse apparaît après la
racine pour signaler la coupure. Cette ellipse ne s'affiche que s'il y a
effectivement quelque chose de replié.

Le balisage, lui, reste complet : les lecteurs d'écran et les moteurs
d'indexation continuent de voir tout le chemin. Il n'y a rien à faire côté
application, et surtout rien à retirer du HTML.

## Pagination

`.la-pagination` habille un `<nav>` contenant une liste de liens ou de boutons.
La découpe des pages et le placement des ellipses restent à l'application.

<nav class="la-pagination la-mb-4" aria-label="Pagination des commandes">
    <ul>
        <li><a href="#" aria-disabled="true">Précédent</a></li>
        <li><a href="#" aria-label="Page 1">1</a></li>
        <li><span class="ellipsis"></span></li>
        <li><a href="#" aria-label="Page 7">7</a></li>
        <li><a href="#" aria-label="Page 8">8</a></li>
        <li><a href="#" aria-label="Page 9" aria-current="page">9</a></li>
        <li><a href="#" aria-label="Page 10">10</a></li>
        <li><span class="ellipsis"></span></li>
        <li><a href="#" aria-label="Page 42">42</a></li>
        <li><a href="#">Suivant</a></li>
    </ul>
</nav>

```html
<nav class="la-pagination" aria-label="Pagination des commandes">
    <ul>
        <li><a href="/commandes?page=8" aria-disabled="true">Précédent</a></li>
        <li><a href="/commandes?page=1" aria-label="Page 1">1</a></li>
        <li><span class="ellipsis"></span></li>
        <li><a href="/commandes?page=9" aria-label="Page 9" aria-current="page">9</a></li>
        <li><a href="/commandes?page=10" aria-label="Page 10">10</a></li>
        <li><span class="ellipsis"></span></li>
        <li><a href="/commandes?page=42" aria-label="Page 42">42</a></li>
        <li><a href="/commandes?page=10">Suivant</a></li>
    </ul>
</nav>
```

Les chiffres utilisent `tabular-nums` : les numéros s'alignent d'une page à
l'autre au lieu de danser sous le curseur.

### Page courante

Comme pour le fil d'Ariane, l'état vit dans `aria-current="page"`. L'élément
courant prend le fond primaire, une graisse semi-grasse — la couleur n'est donc
pas seule à le distinguer — et cesse d'être cliquable.

```html
<li><a href="/commandes?page=9" aria-label="Page 9" aria-current="page">9</a></li>
```

### Bornes atteintes

« Précédent » sur la première page reste dans le DOM, marqué `aria-disabled="true"` :
il s'affiche éteint et inerte, mais la barre garde exactement la même structure
d'une page à l'autre. Un `<button disabled>` produit le même rendu.

```html
<li><a href="#" aria-disabled="true">Précédent</a></li>
<li><button type="button" disabled>Précédent</button></li>
```

### Ellipse

`.ellipsis` marque la coupure d'une longue série. Elle occupe la même cadence que
les pages, n'est pas cliquable, et affiche automatiquement le glyphe `…` si vous
la laissez vide. Ce glyphe est décoratif : il n'est jamais annoncé.

```html
<li><span class="ellipsis"></span></li>
```

### Variante compacte

`sm` ramène la cible à 36 px et resserre les espacements, pour une barre placée
sous un tableau dense.

<nav class="la-pagination sm la-mb-4" aria-label="Pagination des journaux">
    <ul>
        <li><a href="#" aria-disabled="true">Précédent</a></li>
        <li><a href="#" aria-label="Page 1" aria-current="page">1</a></li>
        <li><a href="#" aria-label="Page 2">2</a></li>
        <li><a href="#" aria-label="Page 3">3</a></li>
        <li><span class="ellipsis"></span></li>
        <li><a href="#" aria-label="Page 12">12</a></li>
        <li><a href="#">Suivant</a></li>
    </ul>
</nav>

```html
<nav class="la-pagination sm" aria-label="Pagination des journaux">…</nav>
```

Sur un pointeur grossier — tactile — la variante compacte remonte d'elle-même à
44 px : la densité est un confort de souris, jamais une régression d'accessibilité.

### Variante minimale

`simple` ne conserve que deux bornes, poussées aux extrémités de la largeur
disponible. Les éléments de liste doivent porter `prev` et `next` ; tout autre
maillon laissé dans le balisage est masqué.

<nav class="la-pagination simple la-mb-4" aria-label="Pagination des articles">
    <ul>
        <li class="prev"><a href="#">← Article précédent</a></li>
        <li><a href="#" aria-label="Page 3">3</a></li>
        <li class="next"><a href="#">Article suivant →</a></li>
    </ul>
</nav>

```html
<nav class="la-pagination simple" aria-label="Pagination des articles">
    <ul>
        <li class="prev"><a href="/articles/oklch-en-production">← Article précédent</a></li>
        <li class="next"><a href="/articles/details-et-menus">Article suivant →</a></li>
    </ul>
</nav>
```

## Accessibilité

Ce que les composants prennent en charge :

- la cible cliquable de la pagination mesure 44 × 44 px, conformément au critère
  WCAG 2.5.5 « Target Size », et la variante `sm` y revient sur écran tactile ;
- l'état courant s'appuie sur `aria-current="page"` et se signale par le fond
  **et** la graisse, jamais par la seule couleur ;
- les séparateurs du fil d'Ariane et le glyphe d'ellipse sont posés avec un texte
  alternatif vide : ils ne polluent pas la restitution vocale ;
- le survol des liens du fil d'Ariane ajoute un soulignement en plus du
  changement de teinte ;
- liens et boutons affichent un anneau de focus visible ;
- les listes restent des listes dans le balisage — le style les neutralise
  visuellement mais un lecteur d'écran annonce toujours « liste de N éléments » ;
- le repli mobile du fil d'Ariane masque en CSS, sans amputer le DOM ;
- les transitions de survol sont désactivées sous `prefers-reduced-motion`.

Ce qui reste à votre charge :

- donner un `aria-label` à chaque `<nav>` (« Fil d'Ariane », « Pagination des
  commandes ») : une page peut en contenir plusieurs, il faut pouvoir les
  distinguer ;
- poser `aria-current="page"` sur le maillon final et sur la page active — sans
  lui, ni le style ni l'annonce n'ont lieu ;
- libeller les numéros de page (`aria-label="Page 9"`) : « 9 » seul ne dit rien
  hors contexte visuel ;
- marquer les bornes atteintes avec `aria-disabled="true"` ou `disabled`, plutôt
  que de les retirer du DOM ;
- s'assurer, si vous rechargez la liste en Ajax, que le changement de page est
  annoncé — par exemple via une région `aria-live` décrivant « Page 10 sur 42 ».
