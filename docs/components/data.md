# Données

Deux composants pour les écrans qui présentent des chiffres ou des listes :
`.la-stat`, la tuile d'un indicateur clé, et `.la-empty`, le bloc affiché quand
il n'y a rien à montrer. Le calcul, le formatage et la microcopie appartiennent
au projet ; les composants ne fournissent que le rythme et le cadrage.

## Tuile de statistique

Une tuile réunit une valeur, un libellé et, si besoin, une tendance et une
icône. L'ordre du balisage est libre — il détermine l'ordre d'affichage.

<div class="la-mb-4" style="max-width: 16rem;">
<div class="la-stat">
    <span class="la-stat-icon" aria-hidden="true">📦</span>
    <span class="la-stat-value">1 284</span>
    <span class="la-stat-label">Commandes ce mois-ci</span>
    <span class="la-stat-trend up">12,4 % vs mois précédent</span>
</div>
</div>

```html
<div class="la-stat">
    <span class="la-stat-icon" aria-hidden="true">📦</span>
    <span class="la-stat-value">1 284</span>
    <span class="la-stat-label">Commandes ce mois-ci</span>
    <span class="la-stat-trend up">12,4 % vs mois précédent</span>
</div>
```

`.la-stat-value` utilise des chiffres à chasse fixe : les valeurs s'alignent
d'une tuile à l'autre dans une rangée.

### Rangée de tuiles

`.la-stat-group` dispose les tuiles en grille : autant de colonnes que la largeur
en autorise, jamais moins d'une seule. Il n'y a aucun nombre de colonnes à
déclarer.

<div class="la-stat-group la-mb-4">
    <div class="la-stat">
        <span class="la-stat-value">1 284</span>
        <span class="la-stat-label">Commandes</span>
        <span class="la-stat-trend up">12,4 %</span>
    </div>
    <div class="la-stat">
        <span class="la-stat-value">48 320 €</span>
        <span class="la-stat-label">Chiffre d'affaires</span>
        <span class="la-stat-trend up">8,1 %</span>
    </div>
    <div class="la-stat">
        <span class="la-stat-value">3,2 %</span>
        <span class="la-stat-label">Taux de retour</span>
        <span class="la-stat-trend down">0,7 point</span>
    </div>
    <div class="la-stat">
        <span class="la-stat-value">4,6 / 5</span>
        <span class="la-stat-label">Satisfaction client</span>
        <span class="la-stat-trend flat">stable</span>
    </div>
</div>

```html
<div class="la-stat-group">
    <div class="la-stat">…</div>
    <div class="la-stat">…</div>
    <div class="la-stat">…</div>
</div>
```

La largeur minimale d'une colonne vaut 200 px par défaut. Deux classes la
modifient : `sm` la ramène à 150 px — donc plus de colonnes — et `lg` la porte à
260 px.

```html
<div class="la-stat-group sm">…</div>   <!-- colonnes plus étroites -->
<div class="la-stat-group">…</div>
<div class="la-stat-group lg">…</div>   <!-- colonnes plus larges -->
```

### Tendance

`.la-stat-trend` accepte trois sens. Chacun pose un signe en pseudo-élément en
plus de la couleur : `up` affiche ▲ en vert, `down` ▼ en rouge, `flat` ▬ en gris.
Sans classe de sens, la tendance reste neutre et sans signe.

<div class="la-flex la-gap-4 la-mb-4" style="flex-wrap: wrap;">
    <span class="la-stat-trend up">3,1 % de conversions</span>
    <span class="la-stat-trend down">0,4 s de temps de réponse</span>
    <span class="la-stat-trend flat">aucun incident</span>
</div>

```html
<span class="la-stat-trend up">3,1 % de conversions</span>
<span class="la-stat-trend down">0,4 s de temps de réponse</span>
<span class="la-stat-trend flat">aucun incident</span>
```

Attention au sens réel : une baisse du temps de réponse est une bonne nouvelle,
mais `down` la peindra en rouge. Choisissez la classe d'après la direction du
chiffre, et laissez le libellé dire s'il s'agit d'un progrès.

### Variantes

- `compact` resserre les marges internes et réduit la valeur et l'icône ;
- `plain` retire fond, cadre et marges : la tuile s'efface quand elle vit déjà
  dans une carte ;
- `featured` renforce le cadre et agrandit la valeur en couleur primaire. À
  réserver à la métrique principale d'un tableau de bord.

<div class="la-stat-group la-mb-4">
    <div class="la-stat featured">
        <span class="la-stat-value">99,98 %</span>
        <span class="la-stat-label">Disponibilité sur 30 jours</span>
        <span class="la-stat-trend up">0,04 point</span>
    </div>
    <div class="la-stat compact">
        <span class="la-stat-value">142 ms</span>
        <span class="la-stat-label">Latence médiane</span>
        <span class="la-stat-trend down">18 ms</span>
    </div>
    <div class="la-stat plain">
        <span class="la-stat-value">7</span>
        <span class="la-stat-label">Incidents ouverts</span>
        <span class="la-stat-trend flat">inchangé</span>
    </div>
</div>

```html
<div class="la-stat featured">…</div>
<div class="la-stat compact">…</div>
<div class="la-stat plain">…</div>
```

Les variantes se combinent : `class="la-stat plain compact"`.

## État vide

`.la-empty` occupe la place d'un contenu absent : icône, titre, explication et,
si l'utilisateur peut y remédier, une action. L'espacement est volontairement
généreux — le vide doit se lire comme un choix, pas comme un chargement raté.

<div class="la-mb-4">
<div class="la-empty first">
    <div class="la-empty-icon" aria-hidden="true">📁</div>
    <p class="la-empty-title">Aucun projet pour l'instant</p>
    <p class="la-empty-text">Créez un premier projet pour rassembler vos jalons, vos documents et votre équipe au même endroit.</p>
    <div class="la-empty-action">
        <button class="la-btn primary" type="button">Créer un projet</button>
        <button class="la-btn" type="button">Importer depuis Trello</button>
    </div>
</div>
</div>

```html
<div class="la-empty first">
    <div class="la-empty-icon" aria-hidden="true">📁</div>
    <p class="la-empty-title">Aucun projet pour l'instant</p>
    <p class="la-empty-text">
        Créez un premier projet pour rassembler vos jalons, vos documents
        et votre équipe au même endroit.
    </p>
    <div class="la-empty-action">
        <button class="la-btn primary" type="button">Créer un projet</button>
        <button class="la-btn" type="button">Importer depuis Trello</button>
    </div>
</div>
```

`.la-empty-text` est borné à 42 caractères de large : au-delà, une phrase centrée
devient pénible à lire. `.la-empty-action` répartit plusieurs boutons et les fait
passer à la ligne sur écran étroit.

`.la-empty-icon` accepte un emoji, un caractère ou un `<svg>` — dans ce dernier
cas, il est dimensionné à 3 rem.

### Contextes

Trois classes règlent la couleur de l'icône selon la raison du vide. Elles ne
changent rien d'autre : c'est le titre qui doit dire ce qui se passe.

`first` — premier usage. L'icône prend la teinte primaire : rien n'est encore
arrivé, et c'est normal.

`search` — recherche ou filtre sans résultat. L'icône s'estompe : constat neutre,
pas d'alarme.

<div class="la-mb-4">
<div class="la-empty search boxed">
    <div class="la-empty-icon" aria-hidden="true">🔍</div>
    <p class="la-empty-title">Aucune facture ne correspond</p>
    <p class="la-empty-text">Aucun résultat pour « ferrand » entre le 1er janvier et le 31 mars. Élargissez la période ou retirez un filtre.</p>
    <div class="la-empty-action">
        <button class="la-btn" type="button">Réinitialiser les filtres</button>
    </div>
</div>
</div>

`error` — échec de chargement. L'icône passe en rouge et le titre reprend le
contraste plein.

<div class="la-mb-4">
<div class="la-empty error boxed">
    <div class="la-empty-icon" aria-hidden="true">⚠️</div>
    <p class="la-empty-title">Impossible de charger les factures</p>
    <p class="la-empty-text">Le service de facturation n'a pas répondu. Vos données ne sont pas perdues.</p>
    <div class="la-empty-action">
        <button class="la-btn primary" type="button">Réessayer</button>
    </div>
</div>
</div>

```html
<div class="la-empty first">…</div>
<div class="la-empty search">…</div>
<div class="la-empty error">…</div>
```

### Densité et cadre

`compact` réduit les marges verticales, l'icône et le titre : à utiliser dans un
panneau latéral ou une carte, où la version pleine occuperait trop de place.

`boxed` ajoute un fond et une bordure pointillée. Le vide gagne à être délimité
quand il est posé à l'intérieur d'un tableau ou d'une carte — les deux exemples
ci-dessus l'utilisent.

<div class="la-mb-4">
<div class="la-empty compact boxed">
    <div class="la-empty-icon" aria-hidden="true">🔔</div>
    <p class="la-empty-title">Aucune notification</p>
    <p class="la-empty-text">Vous êtes à jour.</p>
</div>
</div>

```html
<div class="la-empty compact boxed">
    <div class="la-empty-icon" aria-hidden="true">🔔</div>
    <p class="la-empty-title">Aucune notification</p>
    <p class="la-empty-text">Vous êtes à jour.</p>
</div>
```

Les classes se combinent librement : `class="la-empty search compact boxed"`.

## Accessibilité

Ce que les composants prennent en charge :

- la tendance d'une statistique pose un signe (▲ ▼ ▬) en plus de la couleur :
  l'information survit au daltonisme comme à une impression en noir et blanc ;
- la rangée de tuiles ne descend jamais sous une colonne, donc ne déborde pas
  sur mobile ;
- la mesure de `.la-empty-text` est bornée, ce qui garde un texte centré lisible ;
- `.la-empty-action` fournit un anneau de focus de secours si l'action n'est pas
  un composant déjà stylé.

Ce qui reste à votre charge :

- marquer `.la-stat-icon` et `.la-empty-icon` en `aria-hidden="true"` : ce sont
  des pictogrammes décoratifs, le sens passe par le libellé ;
- formuler des tendances qui se lisent seules — « 12,4 % vs mois précédent »
  plutôt que « 12,4 % », le signe visuel n'étant pas verbalisé ;
- lier explicitement valeur et libellé si vous utilisez des éléments génériques :
  un `<dl>` avec `<dt class="la-stat-label">` et `<dd class="la-stat-value">`
  exprime la relation, là où deux `<span>` frères ne l'expriment pas ;
- choisir un niveau de titre cohérent pour `.la-empty-title` — la classe se pose
  aussi bien sur un `<p>` que sur un `<h2>`, selon la place du bloc dans le plan
  du document ;
- annoncer l'arrivée d'un état vide après un filtrage asynchrone, via une région
  `aria-live` ou en déplaçant le focus, faute de quoi le changement passe
  inaperçu à la vocalisation ;
- pour un état `error`, dire dans le titre ce qui a échoué et laisser une action
  de reprise : la couleur rouge de l'icône n'est pas un message.
