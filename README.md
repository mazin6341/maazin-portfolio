# maazin-portfolio

Personal portfolio website for Mohamed Maazin Faisal — built with Next.js, Tailwind CSS, and TypeScript. Self-hosted via docker-compose.

**Live site:** [maazin.velotical.com](https://maazin.velotical.com)

## Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** docker-compose on a home server

## Project structure

```
maazin-portfolio/
├── src/                  # Next.js application
│   ├── app/              # App Router pages and layouts
│   ├── public/           # Static assets
│   ├── next.config.ts
│   ├── package.json
│   └── tsconfig.json
├── .docker/
│   ├── Dockerfile        # Multi-stage build
│   └── .dockerignore
└── docker-compose.yml
```

## Development

```bash
cd src
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production (docker-compose)

From the project root:

```bash
docker-compose up --build
```

The app will be available on port `3000`. Point your reverse proxy at it and set the DNS for `maazin.velotical.com` accordingly.
