# Brief — Refonte Kasa (mission freelance)

> Note de travail locale. Non versionnée (voir `.gitignore`).

## Contexte

Vous êtes développeur front-end en freelance pour Kasa, une entreprise de location
d'appartements entre particuliers. Avec plus de 500 annonces postées chaque jour, Kasa
fait partie des leaders de la location d'appartements entre particuliers en France.

Le site de Kasa a été codé il y a plus de 10 ans en ASP.NET avec un code legacy
important. Laura, la CTO, a lancé une refonte totale pour passer à une stack complète en
JavaScript : NodeJS côté back-end, React côté front-end. De nouvelles maquettes ont été
commandées auprès du designer freelance habituel.

## Brief CTO (Laura)

- **Objectif** : démarrer le projet React et développer l'ensemble de l'application — les
  composants React, les routes React Router — en suivant les maquettes Figma (responsives)
  et un code de qualité.
- **Back-end / data** : le recrutement back-end n'est pas terminé. On fait sans pour le
  moment. Les 20 dernières annonces sont extraites dans un fichier JSON pour construire le
  Front correspondant.
- **Contraintes techniques** : coding guidelines Kasa. Utiliser **Vite** pour créer
  l'application React.

## Brief Designer (Paul)

- **Design** : maquettes Figma, logique de composants. Toutes les ressources (logo, icônes)
  sont dans la maquette, exportables. Sur les vignettes des logements, le rectangle orange
  représente l'image de couverture à remplacer par l'image correspondante.
- **Prototypes** : pour voir les animations attendues sur les menus déroulants (Collapse).

### Contraintes fonctionnelles

- **Gallery (galerie photos)** :
  - À la première image, clic sur « Précédent » → affiche la **dernière** image.
  - À la dernière image, clic sur « Suivant » → affiche la **première** image.
  - S'il n'y a **qu'une seule image** : boutons « Suivant »/« Précédent » **et** numérotation
    n'apparaissent pas.
  - Hauteur de galerie **constante** (celle de la maquette). Images **coupées et centrées**
    dans le cadre (object-fit: cover).
- **Collapse** :
  - Par défaut **fermés** à l'initialisation de la page.
  - Clic sur un Collapse ouvert → le ferme. Clic sur un Collapse fermé → l'ouvre.

## Consignes complémentaires (client)

- Le « back-end » = simples fichiers JSON dans `public/data/` (`backend.json`, `about.json`).
- Dossier `figma/` = maquettes (PNG + SVG) + assets exportés, **gitignoré**.
- Animation Collapse concrète (déploiement visible).
- Code simple, pro, optimisé, signifiant. Architecture retravaillée si besoin.
- Stack : JSX + (S)CSS. Beaucoup de petits commits.
