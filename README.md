# 📋 Kanban Task Manager
Une application de gestion de tâches de type Kanban permettant de visualiser l'avancement des projets en trois colonnes : `todo`, `doing` et `done`. 
Ce projet a été réalisé dans le cadre d'un TP mettant l'accent sur l'intégration d'une API Node.js avec un front-end React moderne.

---

# 🚀 Fonctionnalités
- **Tableau Kanban** : Organisation visuelle des tâches par colonnes de statut.
- **Consommation d'API** : Récupération dynamique des données depuis un backend Node.js.
- **Gestion d'États** : Interface réactive gérant les états de chargement (loading).

---

# 🎮 Easter Eggs
- **Rébus** : Un mini-jeu sur la page d'accueil faisant office de "portail" pour accéder au Kanban.
- **Sudoku "About"** : Un Sudoku fonctionnel caché dans la page "About" pour les pauses entre deux tâches.
- **Marvel 404** : Une page d'erreur 404 personnalisée plongeant l'utilisateur dans l'univers Marvel en cas de mauvaise route.

---

# 🛠 Stack Technique
## 🎨 Frontend
- ![](https://img.shields.io/badge/-0d1117?style=flat&logo=react&logoColor=61DAFB) React (JSX)
- ![](https://img.shields.io/badge/-0d1117?style=flat&logo=tailwindcss&logoColor=38BDF8) Tailwind CSS
- ![](https://img.shields.io/badge/-0d1117?style=flat&logo=vite&logoColor=646CFF) Vite
- ![](https://img.shields.io/badge/-0d1117?style=flat&logo=reactrouter) TanStack router

## ⚙️ Backend (API)
- ![](https://img.shields.io/badge/-0d1117?style=flat&logo=nodedotjs) Node.js
- ![](https://img.shields.io/badge/-0d1117?style=flat&logo=express) Express
- ![](https://img.shields.io/badge/-0d1117?style=flat&logo=nodemon) Nodemon
- ![](https://img.shields.io/badge/-CORS-0d1117?style=flat&logoColor=white) CORS

## 🧰 Outils & Logic
- ![](https://img.shields.io/badge/-0d1117?style=flat&logo=typescript&logoColor=3178C6) TS (Sudoku)
- ![](https://img.shields.io/badge/-0d1117?style=flat&logo=postman&logoColor=FF6C37) Postman / Curl (Tests Routes)

---

# 📦 Installation et Lancement
**1. Prérequis**
- Node.js installé
- Un terminal ouvert dans le dossier du projet

**2. Lancer le Serveur (API)**
```bash
cd server
npm install
npm run dev
```
L'API sera accessible sur : `http://localhost:3001`

**3. Lancer le Client (React)**
```bash
cd client
npm install
npm run dev
```
L'application sera accessible sur : `http://localhost:5173`

---

# 📑 Structure de l'API
L'application communique avec les points de terminaison suivants :
| Méthode       | Endpoint            | Description                                                                                 | Succès       | Erreur              |       
|---------------|---------------------|---------------------------------------------------------------------------------------------|--------------|---------------------|
| **GET**       | `/health`           | Vérifie l'état interne du serveur                                                           | `200`        | `500`               |
| **GET**       | `/api/tasks`        | Récupère toutes les taches présentes dans le fichier `.json`                                | `200`        | `500`               |
| **GET**       | `/api/tasks/:id`    | Récupère une tache spécifique présente dans le fichier `.json` via son ID                   | `200`        | `500`, `404`        |
| **POST**      | `/api/tasks`        | Créer une tache et l'ajoute dans le fichier `.json` (JSON body requis)                      | `201`        | `500`, `400`        |
| **PATCH**     | `/api/tasks/:id`    | Mise à jour partielle d'une tache présente dans le fichier `.json` en fonction de l'id      | `200`        | `500`, `400`, `404` |
| **DELETE**    | `/api/tasks/:id`    | Supprime définitivement une tache présente dans le fichier `.json` en fonction de l'id      | `200`        | `500`, `404`        |


---

# 📺 Démonstrations visuelles
## ⚙️ Tests Backend (API & Routes)
![Image](https://github.com/user-attachments/assets/2a2996f6-a620-447e-be7f-bcf342052395)

## 🎨 Expérience Frontend (UX/UI & Fun)
![Image](https://github.com/user-attachments/assets/e96bd323-4e8a-4c84-af82-b54f0f611cc4)

---

# 🌍 Déploiement
## Frontend : ![](https://img.shields.io/badge/-0d1117?style=flat&logo=cloudflare&logoColor=F38020) Cloudflare
- URL : https://424ede1e.kanban-53y.pages.dev/

## Backend : ![](https://img.shields.io/badge/-0d1117?style=flat&logo=railway&logoColor=FFFFFF) Railway
- URL : https://api-kanban-production.up.railway.app/

<br/>
🚧 La version déployée est différente de celle présente sur GitHub.

---

# 👥 Auteurs
- **Enzo** • [enzzo95](https://github.com/enzzo95)
- **Eden** • [eden77-rgb](https://github.com/eden77-rgb/)




