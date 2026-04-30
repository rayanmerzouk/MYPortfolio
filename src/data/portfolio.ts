export type Project = {
  title: string;
  context: string;
  stack: string[];
  description: string;
  lien?: string;
  focus: string[];
  details?: string[];
  roles?: string[];
  backendHighlights?: string[];
  
};

export const profile = {
  name: "Rayan Merzouk",
  title: "Master 2 Génie Logiciel",
  university: "Université Abderrahmane Mira de Béjaïa",
  objective:
    "Portfolio orienté ingénierie logicielle pour un poste junior en développement logiciel / full-stack.",
};

export const projects: Project[] = [
  {
    title: "CareDio — application mobile de suivi cardiologique",
    context: "Projet académique",
    stack: [
      "React Native (Expo)",
      "Firebase Auth",
      "Cloud Firestore",
      "React Navigation",
      "react-native-calendars",
      "react-native-chart-kit",
    ],
    description:
      "Application mobile de gestion d’un cabinet cardiologiste privée permettant aux patients de suivre leurs constantes vitales, réserver des rendez-vous et échanger avec leur médecin via une interface dédiée, avec une base Firebase sécurisée.",
    details: [
      "Authentification patient / médecin.",
      "Réservation de rendez-vous avec verrouillage de créneaux, gestion des jours complets.",
      "Suivi des constantes : poids, tension artérielle, glycémie, cholestérol, fréquence cardiaque.",
      "Historique médical, graphiques et notifications.",
    ],
    roles: [
      "Conception UI/UX et refonte des écrans.",
      "Intégration Firebase et structuration des données.",
      "Logique de rendez-vous et internationalisation FR.",
    ],
    backendHighlights: [
      "Architecture mobile + Firebase (Auth + Firestore).",
      "Collections : patients, rendezvous, rendezvous_slots, mesures, notifications, config_app/doctor.",
      "Règles Firestore strictes et données isolées par utilisateur.",
      "Accès médecin via email autorisé.",
    ],
    focus: [
      "Organisation métier et parcours utilisateur",
      "Structuration claire des écrans et des données",
      "Fiabilité des flux de gestion",
    ],

   
    
    
  },
  {
    title: "Maverick — Application e-commerce fashion",
    context: "Projet académique",
    stack: ["React.js", "Node.js", "Express", "MongoDB"],
    description:
      "Application e-commerce pour la vente de produits hommes et femmes (vêtements, cosmétiques, parfums, accessoires).",
    details: [
      "Chaîne complète d'un site marchand : authentification, navigation produit, profils, panier, avis, signalements, promotions.",
      "Architecture backend organisée en routes, controllers et middlewares, avec un modèle de données riche.",
      "Rôles différenciés pour client, magasin (vendeur) et admin (supervision/modération).",
    ],
    roles: [
      "Client : explore, achète, commente, note et signale.",
      "Magasin : publie ses produits, gère images, stock et informations.",
      "Admin : valide, modère et traite les signalements.",
    ],
    backendHighlights: [
      "Multi-rôles complet et sécurisé.",
      "Modèles produits avancés (sous-catégories, tailles, stock par couleur, rating, signalements, commentaires).",
      "API REST claire et extensible (routes / controllers / middleware / utils).",
      "Validation des entrées et gestion d'erreurs explicites.",
      "Fonctionnalités métier : favoris, commentaires, rating, signalement, promotions.",
      "Base prête pour évoluer (paiement, analytics, marketplace avancée).",
    ],
    focus: [
      "Architecture full-stack et API REST",
      "Modélisation des données et logique métier",
      "Gestion des produits et du catalogue",
    ],
  },
  {
    title: "Plateforme intelligente automatisée et centralisé dédié pour le recrutement",
    context: "Projet académique",
    stack: [
      "React.js",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Django",
      "Django REST Framework",
      "JWT (SimpleJWT)",
      "PostgreSQL",
    ],
    description:
      "Développement d’une plateforme de recrutement intelligente visant à optimiser et centraliser le processus de candidature grâce à un système de job recommendation system permettant un filtrage automatique et précis des offres selon le profil du candidat ; l’application propose une candidature rapide vers plusieurs offres pertinentes, un mécanisme anti-spam limitant les candidatures non qualifiées, une gestion dynamique des offres (activation/désactivation) garantissant leur validité, ainsi qu’un suivi structuré des candidatures et une planification intégrée des entretiens, avec pour objectif principal de réduire le temps de recrutement et d’améliorer la pertinence des mises en relation candidat–entreprise.",
    
    details: [
      "Candidats : profil, upload CV (PDF/DOC/DOCX), consultation d'offres avec filtres avancés, candidatures en masse, historique.",
      "Entreprises : gestion du profil, publication d'offres, activation/désactivation de la réception, suivi des candidatures.",
      "Front moderne (React + Tailwind) avec composants UI et navigation multi-tableaux de bord.",
      "Différenciation : gain de temps pour le candidat grâce au filtrage avancé et à l'envoi multi-offres en un clic.",
    ],
    roles: [
      "Candidat : crée son profil, gère ses CV, postule et suit ses candidatures.",
      "Entreprise : publie des offres et traite les candidatures reçues.",
    ],
    backendHighlights: [
      "API REST Django structurée avec JWT et CORS.",
      "Modèles clés : utilisateur (invité/candidat/entreprise), entreprise, CV, offre, envoi, compétence, langue.",
      "Règles métier sur la visibilité des offres et le statut des candidatures.",
      "Uploads fichiers (CV + photos) via media.",
      "Endpoint stats pour tableaux de bord.",
    ],
    focus: [
      "Architecture backend robuste et API REST sécurisée",
      "Automatisation des candidatures multi-offres avec règles métier",
      "Données structurées (offres, CV, envois, statuts) et anti-spam",
    ],
    lien:
    "https://pfe-frontend-omega.vercel.app/login"
    
  },
];

export const skills = [
  {
    label: "Langages",
    items: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 60 },
      { name: "Java", level: 50 },
      { name: "Python", level: 50 },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React.js", level: 75 },
      { name: "React Native", level: 65 },
      { name: "Vue.js", level: 50 },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Django", level: 70 },
      { name: "PostgreSQL", level: 60 },
      { name: "Node.js", level: 55 },
    ],
  },
  {
    label: "Concepts",
    items: [
      { name: "Conception logicielle", level: 75 },
      { name: "Architecture web", level: 70 },
      { name: "BDD relationnel", level: 70 },
      { name: "Réseaux informatiques", level: 58 },
      { name: "Programmation orientée objet (POO)", level: 55 },

    ],
  },
 
];
