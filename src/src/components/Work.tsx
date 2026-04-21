import { projects } from '../data/projects'

function Work() {
    return (
        <section id="works" className="py-24 max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="flex">
                {/* Left Side */}
                <div className="flex-1">
                    <p className="text-text/60 font-mono text-sm flex items-center gap-2"><span className="gradient-text">————</span> // SELECTED WORK</p>
                    <h2 className="font-mono font-bold text-3xl md:text-4xl mt-2 whitespace-nowrap">Things I've built <span className="gradient-text">& shipped</span>.</h2>
                </div>

                {/* Right Side */}
                <div className="max-w-xs flex items-end">
                    <p className="text-text/60 text-xs leading-relaxed text-right font-mono">Some of this is under NDA, so here's the shape of it — problem, approach, outcome. Prose over screenshots.</p>
                </div>
            </div>

            {/* Projects */}
            <div className="mt-16 flex flex-col divide-y divide-text/20 border-t border-b border-text/20">
                {projects.map((project) => (
                    <div key={project.id} className="group">
                        <div className="project-row flex justify-between py-10 pl-4">
                            {/* Left Side */}
                            <div className="flex-1 flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-text/30 font-mono text-sm">0{project.id}</span>
                                    <span className="font-mono font-bold text-xl text-text group-hover-gradient-text">{project.title}</span>
                                    {project.nda && <span className="text-xs font-mono px-2 py-0.5 rounded ring-1 ring-accent-to bg-accent-to/10 text-accent-to w-fit">NDA</span>}
                                </div>
                                <div className="flex items-center gap-2 text-text/40 font-mono text-xs">
                                    {[project.client, project.region, project.role, String(project.year)]
                                        .filter(Boolean)
                                        .map((item, i, arr) => (
                                            <span key={i} className="flex items-center gap-2">
                                                {item}{i < arr.length - 1 && <span>·</span>}
                                            </span>
                                        ))
                                    }
                                </div>
                                <p className="text-text/60 text-sm leading-relaxed max-w-xl">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-text/10 text-text/50">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="flex flex-col gap-1 text-sm font-mono min-w-48">
                                <div className="flex justify-between gap-8">
                                    <span className="text-text/30">year</span>
                                    <span className="text-text/70">{project.year}</span>
                                </div>
                                <div className="flex justify-between gap-8">
                                    <span className="text-text/30">role</span>
                                    <span className="text-text/70">{project.role}</span>
                                </div>
                                <div className="flex justify-between gap-8">
                                    <span className="text-text/30">status</span>
                                    <span className="text-text/70">{project.status}</span>
                                </div>

                                <div className="mt-3">
                                    <a href="#" className="text-xs font-mono px-3 py-1.5 rounded ring-1 ring-text/20 text-text/50 hover:ring-text/40 hover:text-text/70 transition-all flex items-center gap-1 w-fit">
                                        read case study <span>›</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Work
