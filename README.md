# Kasa

Application front-end de location d'appartements entre particuliers, développée avec
React et Vite d'après les maquettes Figma fournies. Le site est responsive (desktop et
mobile).

## Stack

- **React 19** + **React Router 7** (routing client)
- **Vite** (dev server + build)
- **SCSS** (un fichier de styles par composant, tokens partagés en variables CSS)
- **ESLint** (qualité de code)

## Données

Le back-end n'est pas encore disponible : les données sont servies comme des fichiers
JSON statiques depuis `public/data/` et consommées via le hook `useFetch`.

- `public/data/backend.json` — les 20 annonces de logements
- `public/data/about.json` — les sections de la page « À propos »

## Démarrage

Prérequis : Node.js 18+.

```bash
npm install      # installe les dépendances
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualise le build de production
npm run lint     # analyse ESLint
```

## Structure

```
src/
  components/    composants réutilisables (Header, Footer, Banner, Card,
                 Gallery, Collapse, Tag, Rating, Logo)
  pages/         une page par route (Home, About, Detail, NotFound)
  lib/           hook useFetch
  index.scss     reset, tokens (couleurs, rayons) et layout global
  App.jsx        routes et structure de page
```

## Routes

| Chemin          | Page                          |
| --------------- | ----------------------------- |
| `/`             | Accueil (galerie d'annonces)  |
| `/about`        | À propos                      |
| `/detail/:id`   | Fiche d'un logement           |
| `*`             | 404 (page introuvable)        |

Une fiche dont l'`id` n'existe pas affiche la page 404.

## Comportements notables

- **Gallery** : défilement circulaire (avant la première image → dernière, après la
  dernière → première). Les boutons et la numérotation disparaissent s'il n'y a qu'une
  seule image. Hauteur fixe, images cadrées en `cover`.
- **Collapse** : fermé par défaut, ouverture/fermeture animée au clic.
