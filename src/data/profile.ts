// Profil et positionnement (source : CV du 2026-11-10)
export const profile = {
  name: 'Alexis Leclerc',
  title: "Technicien systèmes & réseaux — passionné d'IA",
  status: "Disponible — recherche d'emploi",
  location: 'Région de Genève — disponible en priorité en Suisse',
  email: 'leclercalexis@icloud.com',
  linkedin: 'https://www.linkedin.com/in/alexis-leclerc10',
  github: 'https://github.com/Alxx-10',
  intro:
    "Technicien systèmes & réseaux confirmé, je veux faire de l'intelligence artificielle mon métier. Je me forme en autodidacte, chaque jour, et je mets mon socle technique au service de projets IA concrets.",
};

// Ce qui est mis en avant dans la section IA
export const ai = {
  pitch:
    "L'IA n'est pas un simple intérêt : c'est la direction que je donne à ma carrière. Depuis 2024, je me forme par moi-même en parallèle de mon activité, en pratiquant sur des cas concrets.",
  domains: [
    { icon: '🧠', title: 'Machine learning', text: "Principes de l'apprentissage automatique : données, entraînement, évaluation." },
    { icon: '🤖', title: 'Agents IA', text: "Conception d'agents capables d'enchaîner des tâches et d'utiliser des outils." },
    { icon: '💬', title: 'Traitement du langage (NLP)', text: 'Compréhension et génération de texte, modèles de langage.' },
    { icon: '✨', title: 'IA générative', text: 'Texte, image et prototypage rapide avec les outils génératifs.' },
  ],
  tools: ['ChatGPT', 'Claude', 'NotebookLM', 'Copilot', 'Lovable', 'Higgsfield', 'Figma', 'Slack'],
  approach: [
    { title: 'Autoformation continue', text: 'Cours en ligne, documentation officielle, veille quotidienne.' },
    { title: 'Apprendre en construisant', text: 'Chaque notion est mise en pratique sur un projet réel, comme ce portfolio.' },
    { title: 'Socle technique solide', text: "Systèmes, réseaux, cloud et cybersécurité : de quoi déployer l'IA proprement en entreprise." },
  ],
};

export const skills: { name: string; level: string }[] = [
  { name: 'Intelligence artificielle', level: 'Excellent' },
  { name: 'Windows Server', level: 'Confirmé' },
  { name: 'Active Directory', level: 'Confirmé' },
  { name: 'Python', level: 'Avancé' },
  { name: 'Linux / Unix', level: 'Avancé' },
  { name: 'SQL', level: 'Avancé' },
];

export const languages = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'B2' },
];
