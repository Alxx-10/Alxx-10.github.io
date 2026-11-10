// Études et expériences, de la plus récente à la plus ancienne (source : CV + ancien site)
export interface Entry {
  date: string;
  title: string;
  place: string;
  text: string;
  highlight?: boolean;
}

export const etudes: Entry[] = [
  {
    date: 'Depuis 2024',
    title: 'Autoformation en intelligence artificielle',
    place: 'En autodidacte',
    text: 'Machine learning, agents IA, traitement du langage et IA générative, en complément des systèmes, réseaux, cloud et cybersécurité.',
    highlight: true,
  },
  {
    date: '2023 — 2024',
    title: 'Licence Responsable de Projet Informatique',
    place: 'ISITECH, Lyon',
    text: "Pilotage de projets, analyse des besoins, développement d'applications, bases de données et administration systèmes et réseaux. Projets en équipe, de l'analyse au déploiement.",
  },
  {
    date: '2021 — 2023',
    title: 'BTS Services Informatiques aux Organisations',
    place: 'ICOF, Lyon',
    text: 'Cybersécurité, support et mise à disposition de services informatiques.',
  },
  {
    date: '2018 — 2021',
    title: 'Baccalauréat professionnel Systèmes Numériques',
    place: 'Lycée Lamartine',
    text: 'Obtenu avec mention Bien, ainsi que le BEP Systèmes Numériques.',
  },
];

export const experiences: Entry[] = [
  {
    date: 'Depuis oct. 2024',
    title: 'Missions d’intérim & autoformation IA',
    place: 'Divers secteurs',
    text: "Missions d'intérim dans différents secteurs, menées en parallèle d'une montée en compétences autodidacte : intelligence artificielle, systèmes, réseaux, virtualisation, cloud et cybersécurité.",
    highlight: true,
  },
  {
    date: 'Sept. 2023 — Sept. 2024',
    title: 'Technicien systèmes et réseaux',
    place: 'RGF Staffing, Lyon',
    text: 'Support client via un outil de ticketing interne, déploiement et configuration de logiciels et de postes, participation au projet annuel de migration et de renouvellement des firewalls.',
  },
  {
    date: 'Janv. — Févr. 2023',
    title: 'Stagiaire technicien systèmes et réseaux',
    place: 'PLANIFIQUE, Grand-Saconnex (Suisse)',
    text: "PDF interactifs alimentés par Salesforce, support helpdesk et résolution d'incidents.",
  },
  {
    date: 'Mai — Juin 2022',
    title: 'Stagiaire technicien systèmes et réseaux',
    place: 'PLANIFIQUE, Grand-Saconnex (Suisse)',
    text: "Conception, déploiement et maintenance de la nouvelle infrastructure réseau, assistance aux utilisateurs.",
  },
  {
    date: 'Mars — Avr. 2021',
    title: 'Stagiaire technicien installation',
    place: 'ONET TELEM, Lyon',
    text: 'Installation de solutions de sécurité en environnement bancaire.',
  },
  {
    date: 'Sept. — Oct. 2020',
    title: 'Stagiaire technicien installation',
    place: 'ONET TELEM, Lyon',
    text: 'Installation et déploiement de solutions de sécurité en environnement bancaire.',
  },
  {
    date: 'Nov. — Déc. 2019',
    title: 'Stagiaire technicien installation',
    place: 'Python Sécurité, La Praille (Suisse)',
    text: 'Vidéosurveillance et alarmes sur des sites sensibles à Genève.',
  },
  {
    date: 'Mai — Juin 2019',
    title: 'Stagiaire développement web',
    place: 'CERN, Meyrin (Suisse)',
    text: "Conception d'un site vitrine en HTML et CSS.",
  },
  {
    date: 'Janv. — Févr. 2019',
    title: 'Stagiaire technicien support',
    place: 'Collège du Léman, Versoix (Suisse)',
    text: 'Support de proximité pour le personnel et les élèves, déploiement et configuration de postes.',
  },
];
