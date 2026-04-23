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
    SiRedis,
    SiMysql,
    SiPhp,
    SiAlpinedotjs,
    SiNodedotjs,
    SiVuedotjs,
    SiGithubactions,
    SiKubernetes,
    SiInertia,
    SiFramer,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

type TechMeta = {
    icon?: IconType
    color: string
}

export const techMeta: Record<string, TechMeta> = {
    Laravel:            { icon: SiLaravel,       color: '#FF2D20' },
    Livewire:           { icon: SiLivewire,      color: '#4E56A6' },
    Filament:           {                         color: '#f59e0b' },
    PHP:                { icon: SiPhp,           color: '#777BB4' },
    Alpine:             { icon: SiAlpinedotjs,   color: '#8BC0D0' },
    Inertia:            { icon: SiInertia,       color: '#9553e9' },
    Docker:             { icon: SiDocker,        color: '#2496ED' },
    NGINX:              { icon: SiNginx,         color: '#009639' },
    PostgreSQL:         { icon: SiPostgresql,    color: '#4169E1' },
    MySQL:              { icon: SiMysql,         color: '#4479A1' },
    SQLite:             { icon: SiSqlite,        color: '#4A9EC8' },
    Redis:              { icon: SiRedis,         color: '#DC382D' },
    TailwindCSS:        { icon: SiTailwindcss,   color: '#06B6D4' },
    Astro:              { icon: SiAstro,         color: '#FF5D01' },
    Vite:               { icon: SiVite,          color: '#646CFF' },
    React:              { icon: SiReact,         color: '#61DAFB' },
    Vue:                { icon: SiVuedotjs,      color: '#4FC08D' },
    TypeScript:         { icon: SiTypescript,    color: '#3178C6' },
    'Cloudflare Pages': { icon: SiCloudflare,    color: '#F38020' },
    'GitHub Actions':   { icon: SiGithubactions, color: '#2088FF' },
    Kubernetes:         { icon: SiKubernetes,    color: '#326CE5' },
    'Node.js':          { icon: SiNodedotjs,     color: '#339933' },
    'Framer Motion':    { icon: SiFramer,        color: '#0055FF' },
}
