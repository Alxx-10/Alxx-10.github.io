# Tâches

- [x] 1. Socle Astro et layout
  - Acceptation : site HTML actuel déplacé dans `legacy/` ; Astro 5 + TS strict installés ; `Base.astro` affiche le fond, la nav (lien actif), le footer et le bouton de thème.
  - Vérif : `npm run build` passe ; page affichée en clair et en sombre.
  - Fichiers : `package.json`, `astro.config.mjs`, `src/layouts/Base.astro`, `src/styles/global.css`, `src/pages/index.astro`

- [x] 2. Rapatrier les images et le CV (51 images + CV allégé)
  - Acceptation : toutes les images référencées dans `legacy/assets/data.js` sont présentes en pleine résolution ; le CV est dans `public/cv-alexis-leclerc.pdf`.
  - Vérif : `npm run fetch-images` puis compter les fichiers ; ouvrir le PDF.
  - Fichiers : `scripts/fetch-images.mjs`, `src/assets/images/*`, `public/cv-alexis-leclerc.pdf`

- [x] 3. Tranche projets : une fiche de bout en bout
  - Acceptation : collection `projets` avec schéma Zod ; fiche AP1.2 ; `/projets` liste la carte ; `/projets/ap1-2-serveur-lamp` affiche le texte, les compétences et la galerie.
  - Vérif : `npm run check` ; navigation manuelle.
  - Fichiers : `src/content.config.ts`, `src/data/competences.ts`, `src/content/projets/ap1-2-serveur-lamp.md`, `src/components/Card.astro`, `src/pages/projets/index.astro`, `src/pages/projets/[slug].astro`

- [x] 4. Les 9 autres fiches projets
  - Acceptation : 10 fiches au total, groupées (ateliers, B1, E5) et triées.
  - Vérif : `npm run check` ; 10 cartes sur `/projets`.
  - Fichiers : `src/content/projets/*.md`

- [x] 5. Stages
  - Acceptation : 5 fiches de mission, liste groupée par année, même gabarit de fiche.
  - Vérif : `npm run check` ; 5 cartes sur `/stages`.
  - Fichiers : `src/content/stages/*.md`, `src/pages/stages/index.astro`, `src/pages/stages/[slug].astro`

- [x] 6. Parcours, Veille, Contact
  - Acceptation : études et 7 expériences en frise ; 2 outils de veille et 6 certifications ; page contact.
  - Vérif : comparaison avec `legacy/`.
  - Fichiers : `src/data/*.ts`, `src/components/Timeline.astro`, `src/pages/parcours.astro`, `src/pages/veille.astro`, `src/pages/contact.astro`

- [x] 7. Accueil (revue visuelle d’Alexis en attente)
  - Acceptation : hero centré sur l'IA et l'autoformation, carte de profil avec photo, section « Mon objectif : l'IA » (domaines, outils, démarche), 4 rubriques, appel au contact.
  - Vérif : revue visuelle desktop + mobile avec Alexis.
  - Fichiers : `src/pages/index.astro`, `src/components/Hero.astro`, `src/components/ProfileCard.astro`

- [x] 8. SEO et finitions
  - Acceptation : titre + meta description par page, `sitemap.xml`, favicon, animations coupées si `prefers-reduced-motion`.
  - Vérif : `npm run build` puis inspection de `dist/`.
  - Fichiers : `astro.config.mjs`, `src/layouts/Base.astro`, `public/favicon.svg`

- [x] 8b. Contenu depuis 2023 et photo (données saisies dans `src/data/`, photo rangée ; reste l'affichage)
  - Acceptation : Licence ISITECH, RGF Staffing, intérim + autoformation IA affichés ; photo dans la carte de profil ; accroche « recherche d'emploi ».
  - Vérif : relecture par Alexis.
  - Fichiers : `src/data/*.ts`, `src/content/**`, `src/components/ProfileCard.astro`, `src/assets/images/photo.jpg`

- [x] 9. Tests e2e et Lighthouse (25 tests OK ; Lighthouse mobile 99/100/100/100 sur / et une fiche)
  - Acceptation : tests Playwright de la spec au vert ; Lighthouse ≥ 95 sur `/` et une fiche (mobile).
  - Vérif : `npm run test:e2e` ; rapport Lighthouse.
  - Fichiers : `playwright.config.ts`, `tests/e2e/*.spec.ts`

- [x] 10. Déploiement GitHub Pages (en ligne sur https://alxx-10.github.io, 25 tests OK en ligne)
  - Acceptation : workflow GitHub Actions qui build et publie sur Pages ; site accessible à l'adresse finale.
  - Vérif : ouvrir l'URL publique, relancer les tests e2e dessus.
  - Fichiers : `.github/workflows/deploy.yml`, `astro.config.mjs`
