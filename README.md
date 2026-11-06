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


## Sources visuelles V1

Photos de la homepage issues de Pexels et utilisées conformément à la licence Pexels :
- Hero atelier : Andrea Piacquadio — photo 3855223
- Freinage : Gustavo Fring — photo 6870299
- Dégrippants : Eve R — photo 37241200
- Électricité / batterie : Vladimir Srajber — photo 32282232
- Frein-filets / visserie : Dan Cristian Pădureț — photo 9966689
- Nettoyage moteur : cottonbro studio — photo 7565174
- Antirouille / corrosion : Avak Ava — photo 31840105

Les visuels de rubrique doivent représenter directement la pièce, le problème ou l’usage concerné.
