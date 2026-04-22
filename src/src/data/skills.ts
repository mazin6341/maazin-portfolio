export const groups = ['front-end', 'back-end', 'data', 'devops & tools'] as const

export type Group = typeof groups[number]

export type Skill = {
    group: string,
    name: string,
    description: string,
    color: string,
}

export const skills: Skill[] = [
    {
        group: "front-end",
        name: "Livewire",
        description: "5+ years, my bread & butter",
        color: "#fb70a9",
    },
    {
        group: "front-end",
        name: "TypeScript",
        description: "strict mode, narrowing",
        color: "#3178c6",
    },
    {
        group: "front-end",
        name: "Tailwind CSS",
        description: "design tokens, plugins",
        color: "#06b6d4",
    },
    {
        group: "front-end",
        name: "React",
        description: "hooks, suspense, server components",
        color: "#61dafb",
    },
    {
        group: "back-end",
        name: "Laravel",
        description: "eloquent, jobs, queues, events",
        color: "#ff2d20",
    },
    {
        group: "back-end",
        name: "PHP",
        description: "8.2+, static analysis with psalm",
        color: "#777bb4",
    },
    {
        group: "back-end",
        name: "REST APIs",
        description:  "versioning, resources, pagination",
        color: "#6c63ff",
    },
    {
        group: "data",
        name: "PostgreSQL",
        description:  "JSONB, window fns, pg_trgm",
        color: "#4169e1",
    },
    {
        group: "data",
        name: "MySQL",
        description:  "replication, partitioning",
        color: "#4479a1",
    },
    {
        group: "data",
        name: "SQL (General)",
        description:  "CTEs, EXPLAIN-reading",
        color: "#e38c00",
    },
    {
        group: "devops & tools",
        name: "Docker",
        description:  "compose, multi-stage builds",
        color: "#2496ed",
    },
    {
        group: "devops & tools",
        name: "Git",
        description:  "rebase enjoyer, conventional commits",
        color: "#f05032",
    },
    {
        group: "devops & tools",
        name: "Linux",
        description:  "debian/ubuntu, systemd, nginx",
        color: "#fcc624",
    },
]