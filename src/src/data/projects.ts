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
        description: "End-to-end student lifecycle management, from application and enrolment through to graduation. Covers program and module registration, fee payments, a student portal, and a staff-facing backend with department-level, role-based permissions for managing records, processing payments, and generating reports.",
        stack: ["Laravel", "Livewire", "Docker", "NGINX", "PostgreSQL", "TailwindCSS"],
        status: "shipped",
        caseStudy: {
            problem: "Villa College's student lifecycle was managed across disconnected systems and manual processes — application intake, enrolment, fee tracking, and graduation records each lived in silos, causing delays and data inconsistency across departments.",
            approach: "Built a unified platform where every stage of the student lifecycle flows through one system. Department-level role-based permissions ensure staff only see and act on what's relevant to their function. Fee payments, module registration, and report generation are all handled within the same authenticated interface.",
            outcome: "Eliminated manual handoffs between departments. Staff now process enrolments, payments, and reports from a single interface, reducing processing time and the risk of data inconsistency across the student record."
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
        description: "Centralised HR platform covering staff profiles, payroll processing, attendance tracking, and leave management. Integrates with an SSO provider and ZKTeco hardware via API for seamless identity and time data.",
        stack: ["Laravel", "Livewire", "Docker", "NGINX", "PostgreSQL", "TailwindCSS"],
        status: "development",
        caseStudy: {
            problem: "HR operations at Villa College were fragmented — payroll, attendance, leave, and staff records were handled separately with no single source of truth. Attendance relied on manual sign-ins, making payroll reconciliation slow and prone to error.",
            approach: "Built a centralised HR platform integrating with an SSO provider for unified identity management and ZKTeco biometric hardware via API for automated time data. Payroll processing draws directly from attendance records, removing the manual reconciliation step entirely.",
            outcome: "Attendance data now flows automatically from hardware into payroll calculations. HR staff manage the full employee lifecycle from one interface, with SSO eliminating separate credential management across systems."
        }
    },
    {
        id: 3,
        title: "Alumni Voting System",
        nda: true,
        opensource: false,
        client: "Villa College",
        role: "Full-stack Developer",
        year: 2025,
        description: "Secure online voting platform for student election events, open to alumni and other eligible users. Voting anonymity is enforced at the database level — not just the application layer.",
        stack: ["Laravel", "Livewire", "Filament", "Docker", "NGINX", "PostgreSQL", "TailwindCSS"],
        status: "shipped",
        caseStudy: {
            problem: "Student elections at Villa College had no secure digital voting mechanism. Running elections through generic tools left anonymity and eligibility enforcement at the application layer — easy to bypass and difficult to audit.",
            approach: "Built a purpose-built voting platform where anonymity is enforced at the database level. Votes are stored with no link back to the voter's identity, making it structurally impossible to trace a vote after it's cast. Eligibility checks run before ballot access is granted.",
            outcome: "Elections ran fully online with verifiable anonymity guarantees. The database-level design means no application bug or admin action can de-anonymise a vote — it's a structural guarantee, not a policy one."
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
        description: "Browser-based management panel for a self-hosted Hytale game server. Provides start/stop/restart controls via Docker, live server metrics, an in-browser terminal for logs and commands, CurseForge integration for one-click mod installs and updates, and a role-based permission system to scope feature access per user.",
        stack: ["Laravel", "Livewire", "Docker", "SQLite", "TailwindCSS"],
        status: "shipped",
        repo: "https://github.com/Mazin6341/hytale-server-panel",
        caseStudy: {
            problem: "Managing a self-hosted Hytale game server meant juggling raw Docker commands, manual log tailing, and downloading mods by hand — no single interface to do it all, and no safe way to delegate control to other users without giving them full server access.",
            approach: "Built a browser-based panel that wraps Docker's API for server lifecycle controls, streams live metrics and logs to an in-browser terminal, and integrates with CurseForge for one-click mod installs and updates. Role-based permissions let each user be scoped to only what they need.",
            outcome: "Server management is now fully browser-based — start, stop, install mods, and tail logs without touching a terminal. Permission scoping means trusted users can be handed access without compromising control of the underlying host."
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
        description: "Marketing website for Inarchitec, a local architecture firm. A fast, fully static frontend with a clean and modern design, showcasing the company's services, capabilities, and portfolio.",
        stack: ["Astro", "TypeScript", "Cloudflare Pages"],
        status: "development",
        liveUrl: "https://inarchitec.com",
        caseStudy: {
            problem: "Inarchitec, a local architecture firm, had no web presence — no way to direct potential clients anywhere, or present their services and portfolio professionally online.",
            approach: "Built a fully static marketing site with Astro, prioritising load speed and clean design over CMS overhead. Content is authored at build time. Deployed to Cloudflare Pages for global edge delivery with zero infrastructure to manage.",
            outcome: "The firm now has a live, fast-loading web presence at inarchitec.com, giving prospective clients a clear picture of their services, capabilities, and past work."
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
        stack: ["Vite", "React", "TypeScript", "TailwindCSS", "NGINX", "Docker"],
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