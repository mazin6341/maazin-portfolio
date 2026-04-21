<div align="center">

# Mohamed Maazin Faisal

### Full-Stack Developer

*Building polished UIs and solid backends*

[![Portfolio](https://img.shields.io/badge/maazin.velotical.com-6c63ff?style=for-the-badge&logo=googlechrome&logoColor=white)](https://maazin.velotical.com)
[![GitHub](https://img.shields.io/badge/Mazin6341-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mazin6341)
[![Email](https://img.shields.io/badge/mazin6341@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mazin6341@gmail.com)

</div>

---

## About

This is my personal portfolio — a living showcase of my work as a full-stack developer with 5+ years of experience across frontend UIs and backend systems.

Built with a focus on craft and cohesion. Designed to grow over time rather than serve a single job hunt.

## Built With

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

</div>

## Project Structure

```
maazin-portfolio/
├── src/                  # Next.js application (App Router)
│   ├── app/              # Pages and layouts
│   ├── public/           # Static assets
│   └── ...               # Config files
├── .docker/
│   ├── Dockerfile        # Multi-stage production build
│   └── .dockerignore
└── docker-compose.yml
```

## Running Locally

```bash
cd src
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Self-hosted via docker-compose. From the project root:

```bash
docker-compose up --build
```

Runs on port `3000` behind a reverse proxy at `maazin.velotical.com`.
