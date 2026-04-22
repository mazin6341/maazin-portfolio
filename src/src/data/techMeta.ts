import {
    SiLaravel,
    SiLivewire,
    SiDocker,
    SiNginx,
    SiPostgresql,
    SiTailwindcss,
    SiSqlite,
    SiAstro,
    SiTypescript,
    SiCloudflare,
    SiVite,
    SiReact,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

type TechMeta = {
    icon: IconType
    color: string
}

export const techMeta: Record<string, TechMeta> = {
    Laravel:           { icon: SiLaravel,    color: '#FF2D20' },
    Livewire:          { icon: SiLivewire,   color: '#4E56A6' },
    Docker:            { icon: SiDocker,     color: '#2496ED' },
    NGINX:             { icon: SiNginx,      color: '#009639' },
    PostgreSQL:        { icon: SiPostgresql, color: '#4169E1' },
    TailwindCSS:       { icon: SiTailwindcss, color: '#06B6D4' },
    SQLite:            { icon: SiSqlite,     color: '#4A9EC8' },
    Astro:             { icon: SiAstro,      color: '#FF5D01' },
    TypeScript:        { icon: SiTypescript, color: '#3178C6' },
    'Cloudflare Pages': { icon: SiCloudflare, color: '#F38020' },
    Vite:              { icon: SiVite,       color: '#646CFF' },
    React:             { icon: SiReact,      color: '#61DAFB' },
}
