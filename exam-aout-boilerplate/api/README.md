# API

## Installation

Pour installer les dépendances du projet, utilisez la commande `npm install`

## Développement

Ce projet démarre automatiquement un serveur MongoDB local de développement et y charge les données nécessaires. Néanmoins, si vous préférez utiliser un serveur distant MongoDB Atlas, vous devez simplement créer un fichier `.env`, dont un exemple est disponible dans le projet : `.env.example`. Copiez-le, et complétez-le correctement avec vos informations.

Pour développer, utilisez la commande `npm start`. Ceci écoute les modifications dans les fichiers, et relance l'application automatiquement lorsque c'est nécessaire.