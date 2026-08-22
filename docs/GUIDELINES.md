# Guidelines du projet

Conventions applicables au dépôt Lunar Aurora. Ce fichier s'étoffe progressivement ; chaque règle
doit rester vraie pour l'état actuel du dépôt (commande exacte, seuil chiffré si pertinent).

## Dépendances

- **Zéro dépendance runtime.** Le champ `dependencies` de `package.json` doit rester absent ou
  vide : seules des `devDependencies` liées au build (Vite, PostCSS) ou à la documentation
  (VitePress) sont autorisées. Le framework est livré en CSS/JS natif, sans bibliothèque tierce
  embarquée dans `dist/`.
  Vérification avant chaque ajout de dépendance :
  `node -e "const p=require('./package.json'); process.exit(p.dependencies && Object.keys(p.dependencies).length ? 1 : 0)"`

## Sécurité

- **Audit de dépendances avant chaque publication de version.** Lancer `npm audit` avant tout bump
  de version dans `package.json`. Corriger ce qui est sûr avec `npm audit fix` (jamais `--force`
  sans revue manuelle du changelog de la dépendance concernée). Toute vulnérabilité sans correctif
  sûr doit être consignée ci-dessous avec la date du contrôle et une date de réexamen — jamais
  silencieusement ignorée.

  **Dernier contrôle : 2026-08-22** — `npm audit` rapporte 3 vulnérabilités (2 modérées, 1 haute)
  dans la chaîne `vitepress > vite > esbuild` (GHSA-67mh-4wv8-2f99, serveur de dev CORS). Impact
  limité à `npm run docs:dev` (serveur de développement de la documentation) ; `dist/aurora.min.css`
  et le CSS livré aux utilisateurs ne sont pas concernés. Aucun correctif disponible sans passer à
  `vitepress@2.0.0-alpha` (instable). À réexaminer à la sortie d'une version stable de VitePress 2,
  ou au prochain bump mineur/majeur du framework.

## Architecture CSS

- **Discipline des cascade layers.** Tout nouveau module CSS doit être importé dans `src/aurora.css`
  via `@import url('./xxx.css') layer(<nom>)`, où `<nom>` fait partie de la liste déclarée en tête
  de fichier : `@layer reset, tokens, themes, typography, layout, components, icons, utilities,
  animations;`. Aucune règle ne doit être ajoutée hors layer (spécificité imprévisible). Ajouter un
  nouveau layer implique de l'insérer explicitement dans cette déclaration, à la position voulue
  dans la cascade.
