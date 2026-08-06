# Retours utilisateur

Deux composants pour rendre compte de ce que fait l'application : `.la-toast`,
la confirmation éphémère qui suit une action, et `.la-progress`, la barre d'une
tâche dont on connaît l'avancement. Aucun des deux n'impose de JavaScript ; en
revanche, l'un comme l'autre attendent que le balisage porte le sens.

## Notification éphémère

Un toast est composé d'un conteneur `.la-toast` et, à l'intérieur, d'un bloc
`.la-toast-content` qui regroupe `.la-toast-title` et `.la-toast-message`. Le
bouton `.la-toast-close` et l'icône `.la-toast-icon` sont facultatifs.

<div class="la-flex la-gap-3 la-mb-4" style="flex-direction: column; max-width: 24rem;">
<div class="la-toast success">
    <div class="la-toast-content">
        <div class="la-toast-title">Déploiement terminé</div>
        <div class="la-toast-message">La version 2.4.0 est en ligne sur production.</div>
    </div>
    <button class="la-toast-close" type="button" aria-label="Fermer la notification">×</button>
</div>
</div>

```html
<div class="la-toast success" role="status">
    <div class="la-toast-content">
        <div class="la-toast-title">Déploiement terminé</div>
        <div class="la-toast-message">La version 2.4.0 est en ligne sur production.</div>
    </div>
    <button class="la-toast-close" type="button" aria-label="Fermer la notification">×</button>
</div>
```

Le titre seul suffit pour un message court : `.la-toast-message` peut être omis.

### Gravités

Quatre variantes règlent le liseré latéral et la couleur de l'icône : `info`,
`success`, `warning`, `error`. Sans variante, le liseré reste neutre.

<div class="la-flex la-gap-3 la-mb-4" style="flex-direction: column; max-width: 26rem;">
<div class="la-toast info">
    <div class="la-toast-content">
        <div class="la-toast-title">Sauvegarde planifiée</div>
        <div class="la-toast-message">La prochaine sauvegarde démarrera à 03:00 UTC.</div>
    </div>
</div>
<div class="la-toast success">
    <div class="la-toast-content">
        <div class="la-toast-title">Facture envoyée</div>
        <div class="la-toast-message">FA-2026-0184 a été transmise à Cabinet Ferrand.</div>
    </div>
</div>
<div class="la-toast warning">
    <div class="la-toast-content">
        <div class="la-toast-title">Quota bientôt atteint</div>
        <div class="la-toast-message">Il reste 1,2 Go sur les 20 Go de votre offre.</div>
    </div>
</div>
<div class="la-toast error">
    <div class="la-toast-content">
        <div class="la-toast-title">Import interrompu</div>
        <div class="la-toast-message">Ligne 47 : la colonne « date_echeance » est vide.</div>
    </div>
    <button class="la-toast-close" type="button" aria-label="Fermer la notification">×</button>
</div>
</div>

```html
<div class="la-toast info">…</div>
<div class="la-toast success">…</div>
<div class="la-toast warning">…</div>
<div class="la-toast error">…</div>
```

Chaque variante pose un symbole de gravité (`i`, `✓`, `!`, `✕`) en pseudo-élément,
de sorte que la couleur ne soit jamais le seul porteur de l'information. Ce
symbole disparaît si vous fournissez votre propre `.la-toast-icon` :

```html
<div class="la-toast success">
    <span class="la-toast-icon" aria-hidden="true">🚀</span>
    <div class="la-toast-content">
        <div class="la-toast-title">Déploiement terminé</div>
    </div>
</div>
```

### Région d'empilement

`.la-toast-region` est le conteneur fixe où les toasts s'accumulent. Il est en
`position: fixed` et laisse passer les clics destinés au contenu situé dessous —
seuls ses enfants directs restent cliquables. Placez-le une fois pour toute
l'application, généralement juste avant `</body>`.

```html
<div class="la-toast-region bottom-end" role="region" aria-label="Notifications">
    <!-- les toasts sont insérés ici -->
</div>
```

Quatre coins sont disponibles : `top-start`, `top-end`, `bottom-start`,
`bottom-end`. Sans classe, la région se place en bas / fin. Le sens
d'empilement suit le coin : en haut la pile croît vers le bas, en bas elle croît
vers le haut, de sorte que le dernier toast reste toujours le plus proche du bord.
L'animation d'entrée part elle aussi du bord le plus proche.

```html
<div class="la-toast-region top-end">…</div>
<div class="la-toast-region bottom-start">…</div>
```

### Cycle de vie

Le CSS anime l'entrée et la sortie ; l'insertion, la temporisation et le retrait
du nœud restent à l'application. La sortie passe par la classe `.leaving` : on la
pose, on attend la fin de l'animation, puis on retire l'élément du DOM. Sans ce
relais, le toast resterait figé transparent dans la région.

```js
function notifier(message, gravite = 'info', delai = 5000) {
    const region = document.querySelector('.la-toast-region');
    const toast = document.createElement('div');
    toast.className = `la-toast ${gravite}`;
    toast.setAttribute('role', gravite === 'error' ? 'alert' : 'status');
    toast.innerHTML = `<div class="la-toast-content">
        <div class="la-toast-title">${message}</div>
    </div>`;
    region.appendChild(toast);

    const retirer = () => {
        toast.classList.add('leaving');
        // La durée doit couvrir --la-duration-base.
        toast.addEventListener('animationend', () => toast.remove(), { once: true });
    };
    setTimeout(retirer, delai);
    return retirer;
}
```

Sous `prefers-reduced-motion`, le glissement est remplacé par un simple fondu,
assez court pour que la même attente d'`animationend` reste valable.

## Barre de progression

`.la-progress` s'applique à un `<progress>` natif comme à un `<div>` porteur de
`role="progressbar"`. Les deux formes partagent variantes et tailles.

### Élément natif

C'est la forme la plus simple : la valeur vit dans les attributs, et
l'accessibilité est offerte par le navigateur.

<div class="la-mb-4" style="max-width: 24rem;">
<progress class="la-progress" value="68" max="100">68 %</progress>
</div>

```html
<label for="p-index">Indexation du catalogue</label>
<progress class="la-progress" id="p-index" value="68" max="100">68 %</progress>
```

Le contenu de l'élément (`68 %`) sert de repli pour les navigateurs qui ne
savent pas rendre `<progress>`.

### Div ARIA

Cette forme devient nécessaire dès qu'il faut des rayures animées ou un rendu
strictement identique d'un navigateur à l'autre. La valeur passe par la variable
`--la-progress-value`, un nombre de 0 à 100 sans unité : un attribut `style`
généré côté serveur suffit à piloter la barre.

<div class="la-mb-4" style="max-width: 24rem;">
<div class="la-progress" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Indexation du catalogue : 68 %" style="--la-progress-value: 68"></div>
</div>

```html
<div class="la-progress" role="progressbar"
     aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"
     aria-valuetext="Indexation du catalogue : 68 %"
     style="--la-progress-value: 68"></div>
```

`--la-progress-value` doit rester synchronisée avec `aria-valuenow` : sinon
l'affichage ment au lecteur d'écran. La largeur du remplissage est bornée par un
`clamp`, ce qui protège d'une valeur hors bornes envoyée par le serveur.

### Couleurs

Trois variantes s'ajoutent à la couleur primaire par défaut : `success`,
`warning`, `error`.

<div class="la-flex la-gap-3 la-mb-4" style="flex-direction: column; max-width: 24rem;">
<div class="la-progress" role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Migration : 42 %" style="--la-progress-value: 42"></div>
<div class="la-progress success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Migration terminée" style="--la-progress-value: 100"></div>
<div class="la-progress warning" role="progressbar" aria-valuenow="81" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Stockage utilisé : 81 %" style="--la-progress-value: 81"></div>
<div class="la-progress error" role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Quota dépassé : 96 %" style="--la-progress-value: 96"></div>
</div>

```html
<div class="la-progress" role="progressbar" …></div>          <!-- primaire -->
<div class="la-progress success" role="progressbar" …></div>
<div class="la-progress warning" role="progressbar" …></div>
<div class="la-progress error" role="progressbar" …></div>
```

### Tailles

`sm` amincit la barre, `lg` l'épaissit. Sans classe, l'épaisseur est celle de la
démonstration ci-dessus.

<div class="la-flex la-gap-3 la-mb-4" style="flex-direction: column; max-width: 24rem;">
<div class="la-progress sm" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" aria-valuetext="35 %" style="--la-progress-value: 35"></div>
<div class="la-progress" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" aria-valuetext="55 %" style="--la-progress-value: 55"></div>
<div class="la-progress lg" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-valuetext="75 %" style="--la-progress-value: 75"></div>
</div>

```html
<div class="la-progress sm" role="progressbar" …></div>
<div class="la-progress" role="progressbar" …></div>
<div class="la-progress lg" role="progressbar" …></div>
```

### Rayures

`striped` ajoute un motif oblique animé au remplissage. Il signale une tâche en
cours plutôt qu'une valeur figée. Le motif fonctionne sur les deux formes.

<div class="la-mb-4" style="max-width: 24rem;">
<div class="la-progress striped lg" role="progressbar" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Téléversement des médias : 58 %" style="--la-progress-value: 58"></div>
</div>

```html
<div class="la-progress striped lg" role="progressbar"
     aria-valuenow="58" aria-valuemin="0" aria-valuemax="100"
     aria-valuetext="Téléversement des médias : 58 %"
     style="--la-progress-value: 58"></div>

<progress class="la-progress striped" value="58" max="100">58 %</progress>
```

Les variantes se combinent : `class="la-progress warning striped lg"`.

## Accessibilité

Ce que le composant prend en charge :

- le liseré et le symbole de gravité d'un toast doublent la couleur, donc
  l'information reste lisible sans perception des teintes ;
- `.la-toast-close` respecte une cible de 32 px et affiche un anneau de focus ;
- la région d'empilement ne capte pas les clics destinés au contenu situé
  dessous, ce qui évite de bloquer l'interface ;
- sous `prefers-reduced-motion`, le glissement des toasts devient un fondu et
  les rayures de progression cessent de défiler tout en restant visibles.

Ce qui reste à votre charge :

- poser `role="status"` sur un toast informatif, `role="alert"` sur une erreur
  qui interrompt le travail en cours ; sans rôle, rien n'est annoncé ;
- donner un `aria-label` explicite au bouton de fermeture (« Fermer la
  notification »), le glyphe `×` n'étant pas un libellé ;
- marquer `.la-toast-icon` en `aria-hidden="true"` quand vous fournissez la
  vôtre : elle double le titre, elle ne l'ajoute pas ;
- laisser au lecteur le temps de lire — un toast portant une action doit être
  fermable manuellement, pas seulement temporisé ;
- accompagner toute barre de progression d'un libellé visible ou d'un
  `aria-valuetext` explicite (« Quota dépassé : 96 % »), afin que la couleur ne
  soit pas la seule à dire ce qui se passe ;
- sur la forme `div`, renseigner `aria-valuemin`, `aria-valuemax` et
  `aria-valuenow`, et maintenir ce dernier synchronisé avec
  `--la-progress-value`.
