import { skills, groups } from '../data/skills'

function Skills() {
    return (
        <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row gap-4">
                {/* Left Side */}
                <div className="flex-1">
                    <p className="text-text/60 font-mono text-sm flex items-center gap-2"><span className="gradient-text">————</span> // STACK</p>
                    <h2 className="font-mono font-bold text-2xl md:text-4xl mt-2 md:whitespace-nowrap">What I <span className="gradient-text">reach for</span>.</h2>
                </div>

                {/* Right Side */}
                <div className="max-w-xs flex md:items-end">
                    <p className="text-text/60 text-xs leading-relaxed md:text-right font-mono">Grouped by area, not ranked. A tool is a tool — pick the one that fits the job.</p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-8 border border-accent-from/10 bg-accent-from/5 shadow-xl shadow-[#6c63ff]/20 rounded-xl px-4 py-6">
                <div className="flex flex-col gap-2">
                    {/* Tree Command */}
                    <div className="flex font-mono text-xs">
                        <p><span className="text-accent-from">$</span> tree ~/stack --depth 2</p>
                    </div>

                    {/* Tree Command Output */}
                    <div className="mt-4 mb-4 flex flex-col gap-4">
                        {groups.map((group, groupIndex: number) => {
                            const groupSkills = skills.filter(s => s.group === group)
                            const isLastGroup = groupIndex === groups.length - 1
                            return (
                            <div key={group} className="flex flex-col font-mono text-xs">
                                <div className="flex justify-between">
                                    <span><span className="text-text/30">├─</span>  {group}/</span>
                                    <span className="text-text/40">{groupSkills.length} items</span>
                                </div>
                                {groupSkills.map((skill, i) => {
                                    const isLast = i === groupSkills.length - 1
                                    return (
                                        <div key={skill.name} className="group flex items-center gap-2 text-text/80 pl-4 pt-2 pb-2 hover:bg-black/8 dark:hover:bg-white/5 hover:text-text transition-colors px-2 -mx-2 rounded-md">
                                            <span className="text-text/30">{isLast ? '└──' : '├──'}</span>
                                            <span className="w-2 h-2 rounded-xs shrink-0 group-hover:scale-125 transition-transform" style={{ backgroundColor: skill.color }}></span>
                                            <span className="flex-1">{skill.name}</span>
                                            <span className="hidden sm:inline text-text/40">{skill.description}</span>
                                        </div>
                                    )
                                })}
                                {!isLastGroup && <div className="border-t border-dashed border-text/10 mt-2" />}
                            </div>
                        )})}
                    </div>

                    {/* Echo Command */}
                    <div className="flex font-mono text-xs">
                        <p><span className="text-accent-from">$</span> echo "{skills.length} tools · {groups.length} areas · <span className="gradient-text">always learning</span>"</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
