# Projet Portfolio Rault Maxence

Ceci est un projet de portfolio construit avec NextJs et TailwindCss tout en utilisant pour les animations le framer motion.

## Description du Projet

Ce projet présente un portfolio personnel, incluant des projets, des compétences et des informations de contact fait grâce à mailer.js. Il est conçu pour être rapide, réactif et facile à maintenir.

## Pour Commencer

Tout d'abord, clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/MaxenceRault/portfolio.git
cd portfolio
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

Ensuite, lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

## Configuration de l'environnement

Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement suivantes :

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=VOTRE_EMAIL
SMTP_PASS=VOTRE_MDP_APPLICATION
SMTP_FROM=VOTRE_EMAIL
```

- `SMTP_HOST` : L'hôte SMTP pour l'envoi des emails.
- `SMTP_PORT` : Le port SMTP pour l'envoi des emails.
- `SMTP_USER` : Votre nom d'utilisateur pour le serveur SMTP.
- `SMTP_PASS` : Votre mot de passe pour le serveur SMTP.
- `SMTP_FROM` : L'adresse email utilisée pour envoyer les emails.

## Portfolio en ligne

Vous pouvez voir le projet déployé à [https://www.raultmaxence.fr](https://www.raultmaxence.fr) ou bien sans le nom de domaine : [https://portfolio-maxenceraults-projects.vercel.app/](https://portfolio-maxenceraults-projects.vercel.app/).

Si vous avez un problème , contactez moi sur raultmaxence05@gmail.com