---
code: 'E5 · AP1'
title: "Audit de sécurité"
group: 'e5'
order: 21
summary: "Audit Active Directory avec PingCastle et script de sauvegarde."
cover: '../../assets/images/wix/b0224e49b0d540bd98a94b581a90f7f5.jpg'
competences: ['pat']
gallery:
  - '../../assets/images/wix/d470046b6a5c482cb0892fb0360f65a8.jpg'
  - '../../assets/images/wix/bff6278396774c039f99a287b5892657.jpg'
---

Projet présenté à l'épreuve E5 (groupe de 4) : auditer la sécurité d'un Active Directory avec **PingCastle**, puis mettre en place un script de sauvegarde.

## Audit avec PingCastle

1. Lancement de l'outil en ligne de commande et scan du domaine `myon.lan`.
2. Lecture du rapport HTML, organisé en 4 axes :
   - **Stale Objects** : utilisateurs et objets du domaine ;
   - **Trusts** : relations entre plusieurs AD (0 ici, un seul AD) ;
   - **Privileged Accounts** : comptes administrateurs ;
   - **Anomalies** : points de contrôle divers.
3. Analyse de la matrice des risques : rouge et orange à corriger en urgence, jaune et bleu dès que possible.

Le score fonctionne par points : **plus il est bas, plus l'AD est sûr**. Chaque problème corrigé fait baisser le score.

## Script de sauvegarde

J'ai écrit un script qui sauvegarde tous les groupes de l'AD dans le dossier `\\W19\Ad`.
