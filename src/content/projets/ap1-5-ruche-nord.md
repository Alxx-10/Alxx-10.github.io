---
code: 'AP1.5'
title: "Ruche Nord"
group: 'ateliers'
order: 5
summary: "Nouvelle infrastructure : Active Directory, GLPI et déploiement logiciel."
cover: '../../assets/images/wix/865fa22644d34182be834eb4b93b0970.png'
competences: ['proj', 'svc']
gallery:
  - '../../assets/images/wix/c547b980d40245ec91639e8a4e8a7593.png'
  - '../../assets/images/wix/56cf096f26804ad0a477ffce70f0b6fc.png'
  - '../../assets/images/wix/093c3994a4d24c46b7aa2e65fa7ddc14.png'
---

Projet en équipe : proposer une nouvelle infrastructure à la société **Ruche Nord**, qui souhaitait :

- un Windows Server avec **Active Directory** (identifiant et mot de passe personnels) ;
- un inventaire et une gestion de parc automatisés (**GLPI**, tickets, FusionInventory) ;
- le déploiement automatique de logiciels ;
- deux postes clients, sous Windows et sous Linux.

## Mon rôle

La topologie comprend un client Debian, un client Windows, un serveur GLPI, un Windows Server et un PC servant de routeur. J'ai pris en charge le **client Windows** et le **Windows Server**.

1. Installation de Windows 10 Professionnel sous VirtualBox.
2. Intégration du poste au domaine **mps.local**.
3. Tests : connexion de l'administrateur, puis d'un utilisateur créé dans l'Active Directory.
