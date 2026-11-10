---
code: 'B1.3'
title: "Déploiements et tests"
group: 'b1'
order: 13
summary: "Migration d'une application web (MRBS) de Debian 8 vers Debian 10."
cover: '../../assets/images/wix/537ffd97d5714568bfb67871848051b1.jpg'
competences: ['svc']
gallery:
  - '../../assets/images/wix/b91d6fc61a58422b8fd357fb903d88b7.png'
  - '../../assets/images/wix/d8cdba20e428406696d6bfdb2e750e6f.png'
---

Objectif : migrer une application web de réservation (**MRBS**) d'un ancien serveur vers un nouveau.

## Réalisation

1. **Ancien serveur (Debian 8)** : transfert de l'application avec WinSCP, puis import de trois scripts SQL dans phpMyAdmin (création de la base et d'un utilisateur dédié, création des tables, insertion des données).
2. **Nouveau serveur (Debian 10)** : même transfert, plus l'import de trois nouvelles tables.
3. **Nouvelle version** : vérification des versions minimales de PHP et MySQL dans le fichier README, puis installation.

## Difficulté rencontrée

L'utilisateur `sio` n'avait pas les droits suffisants pour finaliser l'installation. J'ai résolu le problème en créant un utilisateur dédié à l'application avec les droits nécessaires.
