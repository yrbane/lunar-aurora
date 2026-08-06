# Tableaux

`.la-table` habille un `<table>` **sémantique**. Aucune structure imposée, aucun
JavaScript : le composant est purement visuel, le tri et la pagination restent à
votre application — une recette est donnée plus bas.

## Base

<div class="la-table-wrap la-mb-4">
<table class="la-table">
    <thead>
        <tr><th>Projet</th><th>Langage</th><th class="num">Étoiles</th></tr>
    </thead>
    <tbody>
        <tr><td>lunar-aurora</td><td>CSS</td><td class="num">128</td></tr>
        <tr><td>mystical-runic</td><td>Rust</td><td class="num">64</td></tr>
        <tr><td>potard</td><td>TypeScript</td><td class="num">32</td></tr>
    </tbody>
</table>
</div>

```html
<div class="la-table-wrap">
    <table class="la-table">
        <thead>
            <tr><th>Projet</th><th>Langage</th><th class="num">Étoiles</th></tr>
        </thead>
        <tbody>
            <tr><td>lunar-aurora</td><td>CSS</td><td class="num">128</td></tr>
        </tbody>
    </table>
</div>
```

`.la-table-wrap` fait défiler le tableau horizontalement sur écran étroit, plutôt
que de laisser la page déborder. Enveloppez toujours un tableau large.

## Densité

<div class="la-table-wrap la-mb-4">
<table class="la-table compact">
    <thead><tr><th>Compact</th><th>Espacement resserré</th></tr></thead>
    <tbody>
        <tr><td>Ligne 1</td><td>Pour les longues listes</td></tr>
        <tr><td>Ligne 2</td><td>Plus d'informations à l'écran</td></tr>
    </tbody>
</table>
</div>

```html
<table class="la-table compact">…</table>      <!-- resserré -->
<table class="la-table">…</table>              <!-- par défaut -->
<table class="la-table comfortable">…</table>  <!-- aéré -->
```

## Variantes

<div class="la-table-wrap la-mb-4">
<table class="la-table striped">
    <thead><tr><th>Zébré</th><th>Lecture facilitée</th></tr></thead>
    <tbody>
        <tr><td>Ligne 1</td><td>Fond neutre</td></tr>
        <tr><td>Ligne 2</td><td>Fond alterné</td></tr>
        <tr><td>Ligne 3</td><td>Fond neutre</td></tr>
    </tbody>
</table>
</div>

```html
<table class="la-table striped">…</table>   <!-- lignes alternées -->
<table class="la-table bordered">…</table>  <!-- grille complète -->
<table class="la-table sticky">…</table>    <!-- en-tête figé au défilement -->
```

Les variantes se combinent : `class="la-table striped compact sticky"`.

## Alignements

Deux classes utilitaires sur les cellules :

- `.num` — aligné à droite, chiffres à chasse fixe (les colonnes de nombres se
  comparent alors à l'œil) ;
- `.center` — centré.

## Colonnes triables

Un `<th data-sort>` reçoit le curseur et l'indicateur de sens. Le style expose
l'affordance ; **le tri est à vous**. L'attribut `aria-sort` porte l'état — il
est lu par les lecteurs d'écran et pilote l'indicateur visuel.

```html
<th data-sort="nom">Projet</th>
<th data-sort="etoiles" aria-sort="descending" class="num">Étoiles</th>
```

Recette minimale, en JavaScript natif et sans dépendance :

```js
document.querySelectorAll('.la-table th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
        const table = th.closest('table');
        const corps = table.tBodies[0];
        const index = [...th.parentNode.children].indexOf(th);
        const croissant = th.getAttribute('aria-sort') !== 'ascending';

        // Un seul en-tête porte l'état de tri à la fois.
        table.querySelectorAll('th[data-sort]').forEach(x => x.removeAttribute('aria-sort'));
        th.setAttribute('aria-sort', croissant ? 'ascending' : 'descending');

        [...corps.rows]
            .sort((a, b) => {
                const [x, y] = [a.cells[index].textContent, b.cells[index].textContent];
                const nx = parseFloat(x), ny = parseFloat(y);
                const cmp = Number.isNaN(nx) || Number.isNaN(ny)
                    ? x.localeCompare(y, 'fr')
                    : nx - ny;
                return croissant ? cmp : -cmp;
            })
            .forEach(tr => corps.appendChild(tr));
    });
});
```

## Accessibilité

- Utilisez `<caption>` pour titrer le tableau : le composant la style déjà.
- `<th scope="col">` / `<th scope="row">` restent nécessaires pour les lecteurs
  d'écran — le CSS ne les remplace pas.
- L'indicateur de tri repose sur `aria-sort`, donc l'information n'est jamais
  portée par la seule couleur.
- Les transitions de survol sont désactivées sous `prefers-reduced-motion`.
