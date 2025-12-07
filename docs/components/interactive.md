# Composants Interactifs

Lunar Aurora fournit des scripts légers (ES Modules) pour gérer l'interactivité de base de manière accessible.

## Initialisation

Importez le script principal pour activer automatiquement tous les composants présents sur la page.

```js
import LunarAurora from 'lunar-aurora';

// Détecte et initialise Tabs, Accordéons, Modales, etc.
LunarAurora.init();
```

## Onglets (Tabs)

Utilisez les rôles ARIA pour définir la structure.

```html
<div class="la-tabs">
    <div role="tablist" class="la-flex la-gap-2">
        <button role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
        <button role="tab" aria-selected="false" aria-controls="panel-2">Tab 2</button>
    </div>
    
    <div role="tabpanel" id="panel-1">
        Contenu 1
    </div>
    <div role="tabpanel" id="panel-2" hidden>
        Contenu 2
    </div>
</div>
```

## Accordéon

```html
<div class="la-accordion">
    <button class="la-accordion-trigger" aria-expanded="false" aria-controls="sect-1">
        Ouvrir section 1
    </button>
    <div id="sect-1" hidden>
        Contenu caché par défaut.
    </div>
</div>
```

## Modale

Utilise l'élément natif `<dialog>`.

```html
<button data-open-modal="my-modal">Ouvrir</button>

<dialog id="my-modal" class="la-modal la-card">
    <div class="la-card-body">
        <p>Bonjour !</p>
        <button data-close-modal>Fermer</button>
    </div>
</dialog>
```
