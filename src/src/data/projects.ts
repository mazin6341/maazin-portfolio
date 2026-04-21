export type Project = {
    id: number,
    title: string,
    nda: boolean,
    client: string,
    region: string,
    role: string,
    year: number,
    description: string,
    stack: string[],
    status: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Student Management System",
        nda: true,
        client: "Villa College",
        region: "",
        role: "Full-stack Developer",
        year: 2023,
        description: "A system that manages everything from the point a student applies up until they graduate. Handling everything from application, program / module registration, payments, student portal, etc... Built with a Student Portal and a backend with department and role based permissions, to manage student data, payments, generate reports and many more.",
        stack: ["Laravel", "Livewire", "Docker", "NGINX", "PostgreSQL"],
        status: "shipped"
    },
    {
        id: 2,
        title: "Student Management System",
        nda: true,
        client: "Villa College",
        region: "",
        role: "Full-stack Developer",
        year: 2023,
        description: "A system that manages everything from the point a student applies up until they graduate. Handling everything from application, program / module registration, payments, student portal, etc... Built with a Student Portal and a backend with department and role based permissions, to manage student data, payments, generate reports and many more.",
        stack: ["Laravel", "Livewire", "Docker", "NGINX", "PostgreSQL"],
        status: "shipped"
    },
]