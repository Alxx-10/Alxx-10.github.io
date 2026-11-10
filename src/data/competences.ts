// Blocs de compétences du référentiel BTS SIO, référencés par clé dans les fiches
export const competences = {
  dev: {
    title: 'Organiser son développement professionnel',
    items: ["Mettre en place son environnement d'apprentissage", 'Mettre en œuvre des outils de veille', 'Gérer son identité professionnelle'],
  },
  svc: {
    title: 'Mettre à disposition un service informatique',
    items: ["Réaliser les tests d'intégration et d'acceptation", 'Déployer un service', 'Accompagner les utilisateurs'],
  },
  web: {
    title: 'Développer la présence en ligne',
    items: ["Valoriser l'image de l'organisation sur le numérique", 'Référencer les services en ligne et mesurer leur visibilité', 'Faire évoluer un site exploitant les données'],
  },
  pat: {
    title: 'Gérer le patrimoine informatique',
    items: ['Recenser les ressources numériques', 'Exploiter les référentiels et normes', 'Gérer les habilitations et sauvegardes', 'Vérifier la continuité de service'],
  },
  proj: {
    title: 'Travailler en mode projet',
    items: ["Analyser les objectifs d'un projet", 'Planifier les activités', 'Évaluer les indicateurs de suivi'],
  },
  inc: {
    title: 'Répondre aux incidents et demandes',
    items: ['Collecter, suivre et orienter des demandes', 'Traiter les demandes réseau, système et applicatives'],
  },
} as const;

export type CompetenceKey = keyof typeof competences;
export const competenceKeys = Object.keys(competences) as [CompetenceKey, ...CompetenceKey[]];
