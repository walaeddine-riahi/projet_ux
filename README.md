# CovAct - Plateforme de Covoiturage

Application React de covoiturage développée avec Create React App, TypeScript et Tailwind CSS.

## 🚀 Technologies

- **React 18.2.0** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Create React App** - Outil de build et configuration
- **Tailwind CSS** - Framework CSS utility-first

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

Lancer le serveur de développement :

```bash
npm start
```

L'application sera accessible sur `http://localhost:3000`

## 🏗️ Build

Créer une build de production :

```bash
npm run build
```

Les fichiers seront générés dans le dossier `build/`

## 🧪 Tests

Lancer les tests :

```bash
npm test
```

## 📁 Structure du Projet

```
public/
├── index.html          # Template HTML
src/
├── components/         # Composants React
├── assets/            # Images et ressources statiques
├── App.tsx            # Composant principal
├── index.tsx          # Point d'entrée
└── index.css          # Styles globaux
```

## 🎨 Configuration Tailwind

Les couleurs personnalisées sont définies dans `tailwind.config.js` :
- `primary-red`: #A50B0B
- `light-pink`: #FFEEEE
- `light-gray`: #FFFBFB

## 📝 Scripts Disponibles

- `npm start` - Démarre le serveur de développement
- `npm run build` - Crée une build de production
- `npm test` - Lance les tests
- `npm run eject` - Éjecte la configuration (irréversible)

## ⚠️ Note

Ce projet utilise Create React App. Pour personnaliser la configuration webpack, PostCSS, etc., vous pouvez utiliser `npm run eject`, mais cette action est irréversible.
