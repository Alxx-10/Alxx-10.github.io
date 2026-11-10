---
code: 'AP1.4'
title: "Maquette Packet Tracer"
group: 'ateliers'
order: 4
summary: "Maquette réseau Cisco : routeur, serveurs Web et DNS, VLAN."
cover: '../../assets/images/wix/f2c49cd270224b3b904fe304dd8ff783.png'
competences: ['pat']
gallery:
  - '../../assets/images/wix/c55c6cc4c923421294f95020c5cdc951.png'
  - '../../assets/images/wix/26c8b4e0df2d4e17bb224939de6a9944.png'
  - '../../assets/images/wix/1416e7d84b2a4f3fa10006913f6e1aab.png'
---

Packet Tracer est le simulateur de matériel réseau de Cisco. L'objectif était de construire une maquette fonctionnelle pour le site de musique, avec des contraintes imposées : un routeur, un serveur Web et DNS, et des postes clients en adressage IP fixe.

## Réalisation

1. Schéma réseau : un routeur principal relié à un switch qui fait communiquer tous les postes.
2. Tests de communication (ping) entre les postes.
3. Accès au site **par son adresse IP puis par son URL**, ce qui valide le DNS.
4. Interconnexion de deux maquettes, le serveur Web d'un côté et le reste du réseau de l'autre, grâce à un **VLAN** reconnu des deux côtés.
5. Test final : connexion au site depuis la seconde maquette.
