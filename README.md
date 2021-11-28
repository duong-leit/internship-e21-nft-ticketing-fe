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
│   └── index.ts
├── components
│   ├── common
│   │   ├── auth.tsx
│   │   ├── header.tsx
│   │   └── index.ts
│   └── layout
│       ├── admin.tsx
│       ├── empty.tsx
│       ├── main.tsx
│       └── index.ts
├── models
│   ├── auth.ts
│   ├── common.ts
│   └── index.ts
├── pages
│   ├── _app.tsx
│   │
│   ├── api
│   │   ├── login.ts
│   │   └── [...path].ts
│   │
│   ├── index.tsx
│   ├── login.tsx
│   └── event
│       ├── [eventId].tsx
│       ├── create.tsx
│       ├── index.tsx
│       └── params.tsx
│
├── public
│   ├── favicon.ico
│   └── vercel.svg
│
├── styles
│   ├── Home.module.scss
│   └── globals.scss
│
├── utils
│   ├── create-emotion-cache.ts
│   ├── index.ts
│   └── theme.ts
│
├── tsconfig.json
├── next-env.d.ts
├── next.config.js
├── package.json
└── yarn.lock

```