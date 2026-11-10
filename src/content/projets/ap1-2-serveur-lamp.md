---
code: 'AP1.2'
title: 'Serveur LAMP'
group: 'ateliers'
order: 2
summary: "Déploiement d'un serveur LAMP hébergeant un WordPress."
cover: '../../assets/images/wix/2ba5970b8b59450390ddd2f0749dd254.png'
competences: ['svc']
gallery:
  - '../../assets/images/wix/b39597ae8d254b31a0ff8b9d76080abf.png'
  - '../../assets/images/wix/1b29b0a356c6486cbb2c165172f73805.png'
---

LAMP désigne un ensemble de logiciels libres (Linux, Apache, MariaDB/MySQL, PHP) permettant de construire un serveur web. L'objectif de cet atelier était de mettre en place un serveur LAMP pour héberger un site WordPress.

## Déroulé

1. Installation d'une machine virtuelle Debian **sans interface graphique** sous VirtualBox.
2. Installation des services : Apache, PHP, MariaDB et phpMyAdmin.
3. Migration d'un WordPress existant depuis UwAmp vers la VM, en transférant les fichiers avec **WinSCP**.
4. Création de la base de données du site dans phpMyAdmin.
5. Configuration de WordPress depuis son URL, puis connexion au site : la migration est réussie.
