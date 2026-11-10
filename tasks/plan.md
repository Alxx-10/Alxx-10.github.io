# Plan : migration du portfolio vers Astro

Source : [SPEC.md](../SPEC.md) (validée le 2026-11-10).

## Composants et dépendances

```
Socle Astro + layout (fond, nav, footer, thème)
   ├─→ Images rapatriées ─→ Collections de contenu (projets, stages, veille)
   │                              ├─→ Pages liste + fiches [slug]
   │                              └─→ Accueil (chiffres calculés depuis le contenu)
   ├─→ Données simples (études, expériences, certifs) ─→ Parcours, Veille, Contact
   └─→ Tests e2e + SEO (sitemap, meta) ─→ Vérification finale (Lighthouse)
```

## Ordre de réalisation (tranches verticales)

1. **Socle** : projet Astro, `legacy/`, layout de base avec fond animé, nav, footer, thème. Une page d'accueil vide doit s'afficher en clair et en sombre.
2. **Images et CV** : script `fetch-images` qui télécharge les images Wix en pleine résolution dans `src/assets/images/` et le CV dans `public/`.
3. **Première tranche complète** : collection `projets` + schéma Zod, une seule fiche (AP1.2), la page `/projets` et la page fiche. Cette tranche valide toute la chaîne avant de migrer le reste.
4. **Reste du contenu projets** : les 9 autres fiches.
5. **Stages** : collection + 5 fiches, réutilisant les mêmes composants.
6. **Parcours, Veille, Contact** : pages basées sur `src/data/`.
7. **Accueil** : hero, carte de profil (chiffres calculés), rubriques, appel au contact.
8. **SEO et finitions** : titres et meta par page, sitemap, favicon, `prefers-reduced-motion`.
9. **Tests e2e** : Playwright selon la spec, puis Lighthouse manuel.

## Risques

| Risque | Parade |
|---|---|
| Images Wix récupérées en basse résolution | Télécharger l'original en retirant la partie `/v1/fill/...` de l'URL |
| Le CV Wix n'est plus accessible | Vérifier au téléchargement ; sinon demander le fichier à Alexis |
| Effets de flou (`backdrop-filter`) qui pénalisent Lighthouse | Mesurer à l'étape 9 ; alléger le flou sur mobile si besoin |
| Perte de contenu pendant la migration | Test e2e qui compte les fiches (10 projets, 5 missions) et `legacy/` conservé |

## Points de contrôle

- Après 1 : `npm run dev` affiche le layout, `npm run build` passe.
- Après 3 : la chaîne contenu → liste → fiche fonctionne de bout en bout.
- Après 7 : site complet, revue visuelle avec Alexis.
- Après 9 : tous les critères de réussite de la spec sont cochés.

## Parallélisable

Les étapes 5 et 6 sont indépendantes une fois l'étape 3 terminée. Le reste est séquentiel.
