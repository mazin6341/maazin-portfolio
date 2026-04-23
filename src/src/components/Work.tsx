import { projects } from '../data/projects'
import { techMeta } from '../data/techMeta'
import { FiChevronRight } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

function Work() {
    const navigate = useNavigate()
    return (
        <section id="works" className="py-24 max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-4">
                {/* Left Side */}
                <div className="flex-1">
                    <p className="text-text/60 font-mono text-sm flex items-center gap-2"><span className="gradient-text">————</span> // SELECTED WORK</p>
                    <h2 className="font-mono font-bold text-2xl md:text-4xl mt-2 md:whitespace-nowrap">Things I've built <span className="gradient-text">& shipped</span>.</h2>
                </div>

                {/* Right Side */}
                <div className="max-w-xs flex md:items-end">
                    <p className="text-text/60 text-xs leading-relaxed md:text-right font-mono">Some of this is under NDA, so here's the shape of it — problem, approach, outcome. Prose over screenshots.</p>
                </div>
            </div>

            {/* Projects */}
            <div className="mt-16 flex flex-col divide-y divide-text/20 border-t border-b border-text/20">
                {projects.map((project) => (
                    <div key={project.id} id={`project-${project.id}`} className="group hover:cursor-pointer scroll-mt-28" onClick={() => navigate(`/work/${project.id}`)}>

                        <div className="project-row flex flex-col md:flex-row justify-between py-10 pl-4 gap-6 md:gap-0">
                            {/* Left Side */}
                            <div className="flex-1 flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-text/30 font-mono text-sm">0{project.id}</span>
                                    <span className="font-mono font-bold text-xl text-text group-hover-gradient-text">{project.title}</span>
                                    {project.nda && <span className="text-xs font-mono px-2 py-0.5 rounded ring-1 ring-accent-to bg-accent-to/10 text-accent-to w-fit">NDA</span>}
                                    <FiChevronRight className="text-accent-to translate-x-[-4px] group-hover:translate-x-0  opacity-0 group-hover:opacity-100" />
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
                                    {project.stack.map((tech, i) => {
                                        const meta = techMeta[tech]
                                        return meta ? (
                                            <span
                                                key={i}
                                                className="text-xs font-mono px-2 py-1 rounded flex items-center gap-1.5"
                                                style={{
                                                    backgroundColor: `${meta.color}28`,
                                                    color: `${meta.color}ff`,
                                                    boxShadow: `0 0 0 1px ${meta.color}55`,
                                                }}
                                            >
                                                {meta.icon && <meta.icon size={11} style={{ color: meta.color, flexShrink: 0 }} />}
                                                {tech}
                                            </span>
                                        ) : (
                                            <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-text/10 text-text/50">
                                                {tech}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="flex flex-col gap-1 text-sm font-mono w-full md:w-64 shrink-0">
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
                                    <span className="gradient-text">{project.status}</span>
                                </div>

                                <div className="mt-3">
                                    <Link to={`/work/${project.id}`} onClick={(e) => e.stopPropagation()} className="text-xs font-mono px-3 py-1.5 rounded ring-1 ring-text/20 text-text/50 group-hover:ring-text/40 group-hover:text-text/70 transition-all flex items-center gap-1 w-fit">
                                        {project.nda ? "see what I can share" : project.caseStudy ? "read the writeup" : "see how it's built"} <span>›</span>
                                    </Link>
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
