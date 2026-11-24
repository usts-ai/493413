export const couple = {
  partenaireA: 'Camille',
  partenaireB: 'Alex',
  coffretActive: true,
  codeActivation: 'NAE-2847-XL',
  semaine: 12,
  etapeActuelle: 'Connexion émotionnelle',
  progressionGlobale: 68,
};

export const stats = [
  { id: 'cartes', label: 'Cartes explorées', valeur: 24, total: 36, suffix: '', accent: '#7EC8A3' },
  { id: 'jours', label: 'Jours de suivi', valeur: 47, total: 90, suffix: 'j', accent: '#7EB6D9' },
  { id: 'duo', label: 'Moments partagés', valeur: 18, total: 30, suffix: '', accent: '#B8A9D4' },
  { id: 'rappels', label: 'Rappels à venir', valeur: 3, total: 5, suffix: '', accent: '#E8A87C' },
];

export const progressionHebdo = [
  { semaine: 'S1', connexion: 42, bienEtre: 55, dialogue: 38 },
  { semaine: 'S2', connexion: 48, bienEtre: 58, dialogue: 45 },
  { semaine: 'S3', connexion: 55, bienEtre: 62, dialogue: 52 },
  { semaine: 'S4', connexion: 50, bienEtre: 60, dialogue: 58 },
  { semaine: 'S5', connexion: 62, bienEtre: 68, dialogue: 64 },
  { semaine: 'S6', connexion: 70, bienEtre: 72, dialogue: 70 },
  { semaine: 'S7', connexion: 68, bienEtre: 75, dialogue: 73 },
  { semaine: 'S8', connexion: 78, bienEtre: 80, dialogue: 76 },
];

export const etapes = [
  { id: 1, titre: 'Découverte du coffret', statut: 'termine' as const, date: '12 janv.' },
  { id: 2, titre: 'Activation duo', statut: 'termine' as const, date: '14 janv.' },
  { id: 3, titre: 'Premiers échanges', statut: 'termine' as const, date: '21 janv.' },
  { id: 4, titre: 'Connexion émotionnelle', statut: 'en_cours' as const, date: 'En cours' },
  { id: 5, titre: 'Préparation à deux', statut: 'a_venir' as const, date: 'À venir' },
  { id: 6, titre: 'Nouveau chapitre', statut: 'a_venir' as const, date: 'À venir' },
];

export const cartes = [
  {
    id: 'c1',
    theme: 'Dialogue',
    titre: 'Ce que je n’ai jamais osé dire',
    description: 'Un exercice doux pour partager une vérité intérieure avec votre partenaire.',
    duree: '15 min',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80',
    couleur: '#ADD8E6',
  },
  {
    id: 'c2',
    theme: 'Présence',
    titre: 'Cinq minutes rien qu’à nous',
    description: 'Retrouvez-vous sans écran, juste le regard et la respiration partagée.',
    duree: '5 min',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80',
    couleur: '#98FF98',
  },
  {
    id: 'c3',
    theme: 'Projection',
    titre: 'Notre rêve de famille',
    description: 'Imaginez ensemble le foyer que vous construisez, sans jugement.',
    duree: '20 min',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80',
    couleur: '#E6E6FA',
  },
  {
    id: 'c4',
    theme: 'Soutien',
    titre: 'Comment je peux t’aider',
    description: 'Identifiez les gestes concrets qui allègent le quotidien de l’autre.',
    duree: '10 min',
    image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=800&q=80',
    couleur: '#F5DEB3',
  },
  {
    id: 'c5',
    theme: 'Gratitude',
    titre: 'Trois moments précieux',
    description: 'Notez ensemble ce qui a illuminé votre semaine de parents en devenir.',
    duree: '8 min',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80',
    couleur: '#FFDAB9',
  },
  {
    id: 'c6',
    theme: 'Équilibre',
    titre: 'Respirer avant d’agir',
    description: 'Un rituel court pour apaiser les tensions avant qu’elles ne grandissent.',
    duree: '12 min',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
    couleur: '#B0E0E6',
  },
];

export const activitesCouple = [
  {
    id: 'a1',
    auteur: 'Camille',
    texte: 'Carte « Dialogue » terminée — moment très touchant.',
    heure: 'Il y a 2 h',
    avatar: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'a2',
    auteur: 'Alex',
    texte: 'Rappel programmé : soirée sans téléphone ce vendredi.',
    heure: 'Il y a 5 h',
    avatar: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'a3',
    auteur: 'Camille',
    texte: 'Progression mise à jour — +8 % de connexion cette semaine.',
    heure: 'Hier',
    avatar: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=200&q=80',
  },
];

export const rappels = [
  { id: 'r1', titre: 'Carte du jour : Présence', quand: 'Aujourd’hui · 19h30', priorite: 'haute' as const },
  { id: 'r2', titre: 'Check-in duo hebdomadaire', quand: 'Demain · 20h00', priorite: 'moyenne' as const },
  { id: 'r3', titre: 'Relire la carte Gratitude', quand: 'Samedi · 10h00', priorite: 'basse' as const },
];

export const navItems = [
  { id: 'parcours', label: 'Parcours' },
  { id: 'cartes', label: 'Cartes' },
  { id: 'duo', label: 'Espace duo' },
  { id: 'rappels', label: 'Rappels' },
];
