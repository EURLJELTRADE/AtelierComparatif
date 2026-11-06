# AtelierComparatif.fr

Média/comparateur français consacré aux produits d’entretien automobile et d’atelier.

## Stack
- Astro
- GitHub
- Netlify
- génération statique
- sitemap automatique

## Développement
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
```

Netlify publie le dossier `dist`.

## Architecture éditoriale
- `/guides/`
- `/comparatifs/`
- `/tests/`
- `/marques/`
- `/conseils-atelier/`

Les URLs utilisent systématiquement un trailing slash afin de conserver une politique d’URL unique dès le lancement.


## Règle images produits

- Ne jamais générer ou inventer une photo de produit réel.
- Utiliser uniquement :
  - des visuels fournis par le propriétaire du site ;
  - des visuels officiels fabricant / distributeur autorisé ;
  - des photos publiques récupérées depuis une source identifiable.
- Conserver la source et vérifier les droits d'utilisation lorsque nécessaire.
- Si aucun visuel fiable n'est disponible, laisser un emplacement neutre ou demander le visuel avant publication.
