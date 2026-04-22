import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { techMeta } from '../data/techMeta'
import { FiArrowLeft, FiArrowRight, FiLock, FiCheck, FiX } from 'react-icons/fi'
import Navbar from './Navbar'
import Footer from './Footer'

function ProjectDetail() {
    const { id } = useParams()
    const project = projects.find(p => p.id === Number(id))
    if( !project || !project.caseStudy ) {
        return <Navigate to="/" replace />
    }
    
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Top Bar */}
            <div className="pt-24 pb-4 max-w-6xl mx-auto px-6 flex justify-between items-center">
                <Link to="/#works" className="flex items-center gap-1.5 rounded-lg border border-text/40 hover:border-text/70 pl-2 pr-3 py-2 text-text/40 hover:text-text/70 transition-colors font-mono text-xs">
                    <FiArrowLeft />
                    <span>back to work</span>
                </Link>
                <span className="font-mono text-xs text-text/20">
                    work / <span className="gradient-text">{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                </span>
            </div>

            <main className="pt-10 pb-24 max-w-6xl mx-auto px-6">
                {/* Header Section */}
                <div className="mb-8 flex gap-6 font-mono text-xs text-text/40">
                    <span className="my-auto">0{project.id}</span>
                    {project.nda && <span className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded ring-1 ring-accent-to bg-accent-to/10 text-accent-to w-fit"><FiLock size={10} /> UNDER NDA</span>}
                </div>

                <h1 className="text-4xl font-bold font-mono">
                    {project.title}
                </h1>
                <p className="mt-4 text-text/40">
                    {project.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-text/40 font-mono text-xs">
                    {[project.client, project.region, project.role, String(project.year)]
                        .filter(Boolean)
                        .map((item, i, arr) => (
                            <span key={i} className="flex items-center gap-2">
                                {item}{i < arr.length - 1 && <span>·</span>}
                            </span>
                        ))
                    }
                    <span>·</span>
                    <span>status <span className="gradient-text">{project.status}</span></span>
                </div>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
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

                {/* NDA Section */}
                {project.nda && <div className="mt-8 bg-accent-from/10 border border-accent-to/50 border-l-0 rounded-lg overflow-hidden flex flex-row">
                    <div className="w-1 shrink-0 bg-gradient-to-b from-accent-from to-accent-to" />
                    <div className="px-6 py-6 flex flex-col gap-4 w-full">
                        <div className="flex gap-2">
                            <FiLock size={16} className="text-accent-to my-auto" />
                            <p className="uppercase font-mono text-sm">Under NDA — here's what I can share</p>
                        </div>

                        <div className="w-full grid grid-cols-2 gap-6">
                            {/* What I can share */}
                            <div className="flex flex-col">
                                <p className="text-sm font-mono text-green-400 flex items-center gap-1"><FiCheck size={11} /> I can share</p>
                                <ul className="text-sm mt-2 text-text/40 flex flex-col gap-1">
                                    <li className="flex gap-2"><span>-</span><span>Problem space, solution shape, and measurable outcomes</span></li>
                                    <li className="flex gap-2"><span>-</span><span>Architecture choices and trade-offs</span></li>
                                    <li className="flex gap-2"><span>-</span><span>Tech stack and team composition</span></li>
                                </ul>
                            </div>

                            {/* What I can't share */}
                            <div className="flex flex-col">
                                <p className="text-sm font-mono text-red-400 flex items-center gap-1"><FiX size={11} /> I can't share</p>
                                <ul className="text-sm mt-2 text-text/40 flex flex-col gap-1">
                                    <li className="flex gap-2"><span>-</span><span>Client name, logos, and screenshots of the live UI</span></li>
                                    <li className="flex gap-2"><span>-</span><span>Exact route volumes, financials, and internal metrics</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact */}
                        <p className="text-xs text-text/40 font-mono mt-2 pt-6 border-t border-dashed border-text/20">
                            want the full story?{' '}
                            <Link to="/#contact" className="group inline-flex items-center gap-1">
                                <span className="text-text group-hover-gradient-text">reach out</span>
                                <FiArrowRight size={11} className="text-text group-hover:text-accent-to transition-colors" />
                            </Link>
                            {' '}happy to walk through some more potential details.
                        </p>
                    </div>
                </div>}
            </main>

            <Footer />
        </div>
    )
}

export default ProjectDetail
