# Formulaires

Les contrôles de formulaire s'appuient sur les éléments HTML natifs : le focus
clavier, la validation et l'accessibilité viennent du navigateur, Aurora ne fait
qu'habiller.

## Champ texte

<div class="la-form-group la-mb-4">
    <label class="la-label" for="demo-nom">Nom du projet</label>
    <input class="la-input" id="demo-nom" type="text" placeholder="lunar-aurora">
    <p class="la-help">Visible publiquement sur votre profil.</p>
</div>

```html
<div class="la-form-group">
    <label class="la-label" for="nom">Nom du projet</label>
    <input class="la-input" id="nom" type="text" placeholder="lunar-aurora">
    <p class="la-help">Visible publiquement sur votre profil.</p>
</div>
```

`.la-form-group` empile les éléments avec la bonne respiration ; `.la-label` et
`.la-help` s'accordent au champ.

## Zone de texte et liste

<div class="la-form-group la-mb-4">
    <label class="la-label" for="demo-desc">Description</label>
    <textarea class="la-textarea" id="demo-desc" rows="3"></textarea>
</div>

<div class="la-form-group la-mb-4">
    <label class="la-label" for="demo-licence">Licence</label>
    <select class="la-select" id="demo-licence">
        <option>MIT</option>
        <option>GPL-3.0</option>
        <option>Apache-2.0</option>
    </select>
</div>

```html
<textarea class="la-textarea" rows="3"></textarea>
<select class="la-select">…</select>
```

## Cases et boutons radio

<div class="la-flex la-gap-4 la-wrap la-mb-4">
    <label class="la-flex la-gap-2"><input class="la-checkbox" type="checkbox" checked> Public</label>
    <label class="la-flex la-gap-2"><input class="la-radio" type="radio" name="d" checked> Stable</label>
    <label class="la-flex la-gap-2"><input class="la-radio" type="radio" name="d"> Bêta</label>
</div>

```html
<label class="la-flex la-gap-2">
    <input class="la-checkbox" type="checkbox"> Public
</label>
<label class="la-flex la-gap-2">
    <input class="la-radio" type="radio" name="canal"> Stable
</label>
```

Enveloppez toujours le contrôle dans son `<label>` : la zone cliquable couvre alors
le texte, ce qui est plus facile à viser — surtout au doigt.

## Accessibilité

- Chaque champ doit avoir un `<label>` associé par `for`/`id`, ou être enveloppé
  par lui. Un `placeholder` n'est **pas** une étiquette : il disparaît à la saisie.
- Reliez le texte d'aide au champ par `aria-describedby` pour qu'il soit lu.
- Un champ en erreur porte `aria-invalid="true"` et un message explicite — l'état
  ne doit jamais reposer sur la seule couleur du contour.
