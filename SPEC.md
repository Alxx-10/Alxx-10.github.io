# Spec : Portfolio d'Alexis Leclerc

> Statut : **validée le 2026-11-10**, mise à jour le même jour (positionnement IA). Le site HTML d'origine est conservé dans `legacy/`.

## Hypothèses (à corriger si besoin)

1. Framework : **Astro 5** (génère un site 100 % statique, idéal pour un portfolio ; aucun JS côté client hormis les petites interactions).
2. Contenu en **Markdown** (une fiche = un fichier), plutôt qu'un fichier de données JS.
3. Langue unique : **français**.
4. Navigateurs récents uniquement (Chrome, Safari, Firefox, Edge : deux dernières versions).
5. Pas de backend : le contact se fait par lien `mailto:` (pas de formulaire).
6. Hébergement statique, choix reporté (voir Questions ouvertes) ; le build doit fonctionner sur n'importe quel hébergeur statique.

## Objectif

Présenter Alexis Leclerc à des **recruteurs** : un technicien systèmes & réseaux confirmé (BTS SIO, Licence Responsable de Projet Informatique, un an chez RGF Staffing) qui **veut faire de l'intelligence artificielle son métier** et s'y forme **en autodidacte**. Le site remplace le portfolio Wix.

**Message principal (à mettre en avant partout, d'abord sur l'accueil)** : la passion pour l'IA et l'autoformation. Le socle systèmes/réseaux/cybersécurité est présenté comme une base solide qui rend son profil IA opérationnel, pas comme une fin en soi.

Un visiteur doit pouvoir, en moins d'une minute :
- comprendre qui est Alexis, qu'il cherche un emploi tourné vers l'IA, et qu'il apprend par lui-même ;
- télécharger son CV ;
- parcourir un projet et voir les compétences du référentiel BTS SIO mobilisées ;
- le contacter.

### Pages

| Route | Contenu |
|---|---|
| `/` | Accueil : présentation, carte de profil (chiffres clés, compétences), accès aux rubriques, appel au contact |
| `/parcours` | Études et expériences en frise chronologique |
| `/projets` | Ateliers pro (AP1.1–1.5), activités B1 (B1.1–1.3), épreuve E5 (AP1–2), groupés |
| `/projets/[slug]` | Fiche projet : description, compétences, galerie |
| `/stages` | Missions PLANIFIQUE (1.1–1.3, 2.1–2.2) |
| `/stages/[slug]` | Fiche mission (même gabarit que projet) |
| `/veille` | Outils de veille + certifications |
| `/contact` | Email, LinkedIn, CV |

Les fiches deviennent de **vraies pages** (adresse partageable, bon référencement) au lieu des fenêtres modales actuelles.

## Stack technique

- Astro 5.x, TypeScript (mode `strict`)
- Content Collections Astro avec schéma Zod pour valider les fiches
- CSS pur (variables CSS, sans Tailwind) : reprise de `assets/style.css`
- Composant `<Image>` d'Astro pour optimiser les images (WebP, tailles adaptées)
- Polices Inter et JetBrains Mono, auto-hébergées via `@fontsource`
- Node.js 20 LTS ou plus récent

## Commandes

```bash
npm install            # installer les dépendances
npm run dev            # serveur de dev sur http://localhost:4321
npm run build          # build statique dans dist/
npm run preview        # servir dist/ localement
npm run check          # astro check (types + schéma du contenu)
npm run test:e2e       # tests Playwright sur le build
npm run fetch-images   # script unique : rapatrie les images Wix dans src/assets/
```

## Structure du projet

```
src/
  pages/               → routes (index.astro, parcours.astro, projets/[slug].astro…)
  layouts/Base.astro   → <head>, fond animé, nav, footer
  components/          → Card, Timeline, Hero, ProfileCard, CompetencyList, Gallery…
  content/
    projets/*.md       → une fiche par projet (frontmatter + texte)
    stages/*.md        → une fiche par mission
    veille/*.md
  content.config.ts    → schémas Zod des collections
  data/                → experiences.ts, etudes.ts, certifications.ts, competences.ts
  assets/images/       → images rapatriées depuis Wix
  styles/global.css    → variables, thème clair/sombre, fond
public/
  cv-alexis-leclerc.pdf
  favicon.svg
scripts/fetch-images.mjs
tests/e2e/             → tests Playwright
legacy/                → site HTML actuel, conservé comme référence jusqu'à la mise en ligne
```

## Style de code

Exemple de fiche de contenu :

```markdown
---
code: "AP1.2"
title: "Serveur LAMP"
group: "ateliers"          # ateliers | b1 | e5
order: 2
summary: "Déploiement d'un serveur LAMP hébergeant un WordPress."
cover: "../../assets/images/ap12-virtualbox.png"
competences: ["svc"]       # clés définies dans src/data/competences.ts
gallery:
  - "../../assets/images/ap12-capture-1.png"
---

Installation d'une VM Debian sans interface graphique sous VirtualBox…
```

Exemple de composant :

```astro
---
interface Props { code: string; title: string; summary: string; href: string; cover: ImageMetadata }
const { code, title, summary, href, cover } = Astro.props;
import { Image } from 'astro:assets';
---
<a class="card" href={href}>
  <Image src={cover} alt="" width={600} height={340} />
  <div class="body">
    <span class="code">{code}</span>
    <h3>{title}</h3>
    <p>{summary}</p>
  </div>
</a>
```

Conventions :
- Composants en `PascalCase.astro`, fichiers de contenu et slugs en `kebab-case`.
- Texte de l'interface en français ; noms de code (variables, composants) en anglais.
- 2 espaces, guillemets simples en TS ; formatage Prettier + `prettier-plugin-astro`.
- Couleurs uniquement via les variables CSS de `global.css`.
- Le JS client se limite au menu mobile, au bouton de thème et à l'apparition au défilement.

## Stratégie de test

- **`astro check`** : types et validation des fiches (un champ manquant ou une compétence inconnue fait échouer le build).
- **Playwright (e2e)** sur le build, Chromium + viewport mobile :
  - chaque route répond 200 et affiche son titre ;
  - chaque carte de `/projets` et `/stages` mène à une fiche qui contient sa galerie ;
  - aucun lien interne cassé ; aucune image servie depuis `wixstatic.com` ;
  - le bouton de thème bascule `data-theme` ; le menu mobile s'ouvre ;
  - aucune erreur dans la console.
- **Lighthouse** (manuel avant mise en ligne) sur `/` et une fiche.
- Pas de tests unitaires : il n'y a pas de logique métier.

## Limites

- **Toujours** : lancer `npm run check` et `npm run test:e2e` avant de livrer ; garder le contenu dans `src/content` et `src/data`, jamais en dur dans les composants ; respecter le thème clair et sombre.
- **Demander d'abord** : ajouter une dépendance ; modifier le sens d'un texte d'Alexis (au-delà de corrections de forme) ; choisir ou configurer l'hébergeur ; supprimer `legacy/`.
- **Jamais** : publier le site sans accord ; inclure des données personnelles autres que l'email, le LinkedIn et le CV déjà publics ; charger des images ou scripts depuis Wix ; ajouter du suivi ou des cookies.

## Critères de réussite

- [ ] Les 8 routes ci-dessus existent ; les 10 projets et 5 missions ont chacun leur page.
- [ ] Tout le contenu du site Wix est présent (études, 7 expériences, projets, stages, veille, 6 certifications, contact).
- [ ] 0 requête vers `wixstatic.com` ou un autre domaine Wix ; le CV est servi depuis `/cv-alexis-leclerc.pdf`.
- [ ] Lighthouse ≥ 95 en performance, accessibilité, bonnes pratiques et SEO sur mobile.
- [ ] Mise en page correcte de 360 px à 1440 px, sans défilement horizontal.
- [ ] Thème clair et sombre fonctionnels ; animations désactivées si `prefers-reduced-motion`.
- [ ] `npm run build` réussit sans avertissement ; `npm run check` et `npm run test:e2e` passent.
- [ ] Chaque page a un titre et une meta description propres ; `sitemap.xml` est généré.

## Décisions (2026-11-10)

- **Hébergement : GitHub Pages**, compte GitHub `Alxx-10`, déployé par GitHub Actions (`withastro/action`) à chaque push sur `main`. Dépôt prévu : `Alxx-10.github.io` → site à `https://alxx-10.github.io/` (à confirmer avant la tâche 10).
- **Photo** : `src/assets/images/photo.png`, fournie par Alexis.
- **Accroche** : Alexis **recherche un emploi** orienté IA. Badge « Disponible — recherche d'emploi ».
- **Contenu depuis 2023** (source : CV fourni le 2026-11-10) : Licence ISITECH (2023-2024), technicien systèmes et réseaux chez RGF Staffing (2023-2024), intérim + autoformation (depuis 10/2024), compétences et outils IA.
- **LinkedIn** : `https://www.linkedin.com/in/alexis-leclerc10` (remplace l'ancienne adresse).
- **Nouvelle rubrique IA** : section dédiée sur l'accueil (domaines IA maîtrisés, outils utilisés, démarche d'autoformation).

- **CV public** : version allégée `public/cv-alexis-leclerc.pdf` (sans téléphone, adresse, âge ni référent, métadonnées vidées). L'original reste dans `private/`, exclu de git.

## Questions ouvertes

Aucune pour l'instant.
