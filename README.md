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
