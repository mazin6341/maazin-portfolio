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

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF008F?style=for-the-badge&logo=framer&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![nginx](https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

</div>

## Project Structure

```
maazin-portfolio/
├── src/                    # Vite application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── data/           # Static project & skills data
│   │   ├── assets/         # Images and static files
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css       # Tailwind v4 entry + design tokens
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── .docker/
│   ├── Dockerfile          # Multi-stage build → nginx
│   └── .dockerignore
└── docker-compose.yml
```

## Running

Copy `.env.example` to `.env` and set `APP_ENV` to `development` or `production`, then run:

**Linux / macOS / WSL2:**
```bash
./run.sh
```

**Windows (PowerShell):**
```powershell
./run.ps1
```

| Mode | Command triggered | URL |
|---|---|---|
| `development` | `docker-compose.dev.yml` | [localhost:5173](http://localhost:5173) — live reload |
| `production` | `docker-compose.yml` | [localhost:3000](http://localhost:3000) — nginx static build |

## Running Without Docker

```bash
cd src
npm install
npm run dev
```
