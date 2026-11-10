---
code: 'E5 · AP2'
title: "Routage inter-VLAN"
group: 'e5'
order: 22
summary: "3 VLAN, ports trunk et routage entre réseaux sur matériel Cisco."
cover: '../../assets/images/wix/bfc8b89da9a045a99a6966574e707283.png'
competences: ['pat']
gallery:
  - '../../assets/images/wix/10133e0d035c4016b38a1b62cc22083d.png'
  - '../../assets/images/wix/746283356e374ddbac0e3d74a4b86c44.png'
  - '../../assets/images/wix/5ce745732d7a42dbbbe536c5b122a0fb.png'
---

Projet présenté à l'épreuve E5 : faire communiquer des postes situés dans des VLAN différents.

## Configuration

| VLAN | Rôle | Ports du switch | Passerelle |
|---|---|---|---|
| 10 | Serveurs | Fa0/2 à Fa0/10 | 192.168.10.254 |
| 30 | Utilisateurs | Fa0/11 à Fa0/19 | 192.168.30.254 |
| 40 | Invités | Fa0/20 à Fa0/24 | 192.168.40.254 |

1. Création des 3 VLAN sur le switch et répartition des 24 ports.
2. Ports Gi0/1 et Gi0/2 configurés en **trunk** pour transporter les 3 VLAN.
3. Sur le routeur, **sous-interfaces encapsulées** (une par VLAN) avec leur passerelle.
4. Adressage des 5 postes : par exemple 192.168.10.100 et .101 dans le VLAN 10.

## Tests

Ping de chaque VLAN vers sa passerelle et vers les autres réseaux. Un test a révélé une erreur de configuration entre les VLAN 40 et 30, que j'ai identifiée grâce à ces essais.
