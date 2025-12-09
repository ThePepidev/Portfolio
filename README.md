# My Portolio

Ce projet est en fait mon portfolio personnel disponible en cliquant [ici !](https://www.pepidev.dev)

## Installation

**Nécessite:**

    - Node (v20.19+)
    - npm (v11.15+)

**cloner le repo:**

    git clone git@github.com:ThePepidev/Portfolio.git

**installer les dépendances:**

    npm install

**créer les variables d'environnement emailjs:**

    touch .env.local

```env
VITE_EMAIL_SERVICE_ID=ur_service_id
VITE_EMAIL_TEMPLATE_ID=ur_template_id
VITE_EMAIL_PUBLIC_KEY=ur_public_key
```

*plus d'info sur [emailjs](https://www.emailjs.com/docs/tutorial/overview/)*

**lancement de développement(en local):**

    npm run dev

**build:**

    npm run build

## Structure du projet

    .
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.js
    ├── src
    ├── tailwind.config.js
    ├── vercel.json
    └── vite.config.js
    
    4 directories, 7 files

## Licence

This project is licensed under the MIT License.

Copyright (c) 2025 Mathys (pepidev)
