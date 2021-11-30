
# Final Project: Nextjs App (Front End)

<hr /> 

### Instalation

```ssh
npm install
# or
yarn install
```


### Getting Started

```ssh
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.



### Code Structure

```
├── README.md
├── api-client
│   ├── auth-api.ts
│   ├── axios-client.ts
│   └── index.tsz
├── components
│   ├── common
│   │   └── Header
│   │       └── index.tsx
│   └── layout
│       ├── Empty.tsx
│       ├── Main.tsx
│       └── index.tsz
├── environments
├── models
│   ├── auth.interface.ts
│   ├── common.interface.ts
│   ├── index.tsz
│   └── user.interface.ts
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
│   ├── _app.tsx
│   ├── index.tsx
│   ├── event
│   │   ├── [eventId].tsx
│   │   └── index.tsx
│   ├── index.tsx
│   ├── index.tsx
│   ├── register.tsx
│   └── user
│       ├── [userId].tsx
│       └── index.tsx
├── public
│   ├── favicon.ico
│   └── vercel.svg
├── styles
│   ├── Home
│   │   └── styles.scss
│   ├── Home.module.css
│   ├── globals.scss
│   └── layout
│       └── main.scss
├── tsconfig.json
└── yarn.lock
```