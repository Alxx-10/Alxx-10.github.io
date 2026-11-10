---
code: 'B1.1'
title: "Gestion de parc informatique"
group: 'b1'
order: 11
summary: "Serveur GLPI sur Debian et remontée d'inventaire avec FusionInventory."
cover: '../../assets/images/wix/7a4a0afd88ab47b9adcf3ce65940fed4.webp'
competences: ['pat']
gallery:
  - '../../assets/images/wix/0319fdbba7494c248bc73e5f9f2f66df.png'
  - '../../assets/images/wix/2be1ab3ae9b6412da41c30b6d082ed6b.png'
---

Objectif : installer un serveur **GLPI** sur une machine Debian et y faire remonter automatiquement les informations d'un poste client.

## Réalisation

1. Installation des services web : Apache2, PHP et phpMyAdmin, puis vérification que le serveur répond.
2. Téléchargement et décompression de GLPI, attribution des droits au serveur web.
3. Configuration de GLPI depuis `adresse-du-serveur/glpi` et connexion à la base **MariaDB**.
4. Installation du plugin **FusionInventory** et configuration de l'agent sur le poste client, en indiquant l'adresse du serveur.

## Résultat

Les informations du PC remontent dans GLPI : l'inventaire est opérationnel.
