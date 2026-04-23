export type Project = {
    id: number,
    title: string,
    nda: boolean,
    opensource: boolean,
    client: string,
    region?: string,
    role: string,
    year: number,
    description: string,
    stack: string[],
    status: string,
    repo?: string,
    liveUrl?: string,
    isCurrent?: boolean,
    caseStudy?: {
        problem: string,
        approach: string,
        outcome: string
    }
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Student Management System",
        nda: true,
        opensource: false,
        client: "Villa College",
        role: "Full-stack Developer",
        year: 2023,
        description: "End-to-end student lifecycle management replacing a legacy Zend Framework system across a student body in the thousands. Covers application, enrolment, program and module registration, fee payments with invoice and receipt generation, a student portal, and a staff-facing backend with dynamic department-level role-based permissions across 10+ departments.",
        stack: ["Laravel", "Livewire", "Docker", "NGINX", "PostgreSQL", "TailwindCSS"],
        status: "shipped",
        caseStudy: {
            problem: "Villa College's student data ran on an aging Zend Framework PHP system with poorly structured database tables, no indexing strategy, and slow queries across a student body in the thousands. Missing features were the norm, and making changes was slow and risky — fixes frequently broke unrelated parts of the system.",
            approach: "Rebuilt the entire platform from scratch as a team. Report generation across multiple areas of the system — enrolment, fees, modules — along with invoice and receipt generation and a payment gateway integration. The permissions model is department-scoped and dynamic, so new departments can be added without touching code.",
            outcome: "The system is live, actively used across 10+ departments, and in continuous development. Enrolments, fee processing, and reporting that previously required manual coordination now run through a single interface, and the codebase is maintained and extended on an ongoing basis."
        }
    },
    {
        id: 2,
        title: "Human Resource Management System",
        nda: true,
        opensource: false,
        client: "Villa College",
        role: "Full-stack Developer",
        year: 2023,
        description: "Centralised HR platform for ~200 staff covering employee profiles, attendance tracking via ZKTeco biometric hardware, and leave management. Integrates with Keycloak for SSO. Payroll calculation, payslip generation, and bank file export are in active development.",
        stack: ["Laravel", "Livewire", "Keycloak", "Docker", "NGINX", "PostgreSQL", "TailwindCSS"],
        status: "development",
        caseStudy: {
            problem: "HR operations for ~200 staff were split across disconnected systems with no single source of truth. Attendance was tracked manually, making it slow to produce accurate records and creating a painful reconciliation path toward payroll.",
            approach: "Built Keycloak SSO integration for unified identity management. Wrote the ZKTeco biometric hardware integration from scratch — no existing library, working directly against the device API to pull time and attendance data into the system. Staff profiles, attendance records, and leave management are centralised in one interface.",
            outcome: "Attendance data flows automatically from ZKTeco hardware into the system, replacing manual tracking. Attendance reporting is live. Payroll calculation, payslip generation, and bank file export are currently in development."
        }
    },
    {
        id: 3,
        title: "Alumni Voting System",
        nda: true,
        opensource: false,
        client: "Villa College",
        role: "Solo Developer",
        year: 2025,
        description: "Secure online voting platform for student elections, replacing ad-hoc voting in Moodle. Eligible voters are imported directly from the Student Management System. Anonymity is enforced at the database level — votes are stored against a UUID with no link back to the voter's identity.",
        stack: ["Laravel", "Livewire", "Filament", "Docker", "NGINX", "PostgreSQL", "TailwindCSS"],
        status: "shipped",
        caseStudy: {
            problem: "Student elections at Villa College ran through Moodle, which was never designed as a voting platform. It offered no meaningful anonymity guarantees and eligibility enforcement was manual. There was no audit-safe way to run a proper election.",
            approach: "Built a purpose-built voting platform where the alumni model holds a vote_uuid. Votes are stored against that UUID only — there is no foreign key back to the voter's identity. Once a vote is cast, there is no data path to trace it back. Eligible voters are imported directly from the Student Management System, removing manual list management entirely.",
            outcome: "The system was fully built, demo'd to stakeholders, and tested internally. It was never deployed for a live election — the project was pitched to marketing but not taken to production. The technical anonymity guarantee is structural, not policy-based: no application bug or admin action can de-anonymise a vote."
        }
    },
    {
        id: 4,
        title: "Hytale Web Panel",
        nda: false,
        opensource: true,
        client: "Public",
        role: "Full-stack Lead",
        year: 2026,
        description: "Browser-based management panel for a self-hosted Hytale Early Access game server. Provides start/stop/restart controls via Docker, live server metrics, an in-browser terminal for logs and commands, CurseForge integration for one-click mod installs and updates, and a role-based permission system to scope feature access per user.",
        stack: ["Laravel", "Livewire", "Docker", "SQLite", "TailwindCSS"],
        status: "shipped",
        repo: "https://github.com/Mazin6341/hytale-server-panel",
        caseStudy: {
            problem: "Managing a self-hosted Hytale server meant juggling raw Docker commands, manual log tailing, and downloading mods by hand — no single interface to do it all, and no safe way to delegate control to other users without giving them full server access.",
            approach: "Led development as the sole developer, with three others contributing testing and feedback. Built a browser-based panel wrapping Docker's API for server lifecycle controls, streaming live metrics and logs to an in-browser terminal. CurseForge integration was implemented end-to-end, enabling one-click mod installs and updates. Role-based permissions scope each user to only what they need.",
            outcome: "The panel was fully built and functional — server management, mod installs, and log tailing all browser-based. The project was never officially launched or marketed, and remains a public open-source repo."
        }
    },
    {
        id: 5,
        title: "Inarchitec Website",
        nda: false,
        opensource: false,
        client: "Inarchitec",
        role: "Solo",
        year: 2026,
        description: "Marketing website for Inarchitec, a local firm offering residential architecture, interior design, and construction services including roofing, plumbing, and electrical. Fully static, self-designed from scratch, with a portfolio section and clear service presentation.",
        stack: ["Astro", "TypeScript", "Cloudflare Pages"],
        status: "shipped",
        liveUrl: "https://inarchitec.com",
        caseStudy: {
            problem: "Inarchitec had no web presence — no way to direct potential clients anywhere or present their services and completed work professionally online.",
            approach: "Took full ownership of design and development. Designed the site from scratch with a clean, professional aesthetic suited to an architecture and interiors audience. Built with Astro for static output and deployed to Cloudflare Pages for global edge delivery with zero infrastructure overhead. Defined the direction for the client, including layout, content structure, and the portfolio section.",
            outcome: "The site is live at inarchitec.com. Inarchitec now has a professional web presence presenting their services across residential architecture, interior design, and construction. Portfolio content is being finalised by the client."
        }
    },
    {
        id: 6,
        title: "My Portfolio",
        nda: false,
        opensource: true,
        client: "me",
        role: "Solo",
        year: 2026,
        description: "The site you're looking at. Built to showcase my work and skills, with a dark/light theme, smooth scroll animations, and a focus on clean, purposeful design.",
        stack: ["Vite", "React", "TypeScript", "TailwindCSS", "Framer Motion", "NGINX", "Docker"],
        status: "shipped",
        repo: "https://github.com/Mazin6341/maazin-portfolio",
        isCurrent: true,
        caseStudy: {
            problem: "Needed a portfolio that reflected the quality of the work inside it — not a template, not a generic dark-mode site. Had to be fast, purposefully designed, and easy to keep updated as the body of work grows.",
            approach: "Built from scratch with Vite, React, and Tailwind CSS v4. Projects and skills live in static data files, so adding new work means editing one file without touching any components. Deployed as a pure static SPA via nginx in Docker on a self-hosted server.",
            outcome: "A portfolio that's as deliberate as the work it showcases — custom design, smooth animations, and a content model that makes updates trivial. The site itself is one of the projects."
        }
    },
]