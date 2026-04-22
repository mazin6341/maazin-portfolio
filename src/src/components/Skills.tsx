function Skills() {
    return (
        <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="flex">
                {/* Left Side */}
                <div className="flex-1">
                    <p className="text-text/60 font-mono text-sm flex items-center gap-2"><span className="gradient-text">————</span> // STACK</p>
                    <h2 className="font-mono font-bold text-3xl md:text-4xl mt-2 whitespace-nowrap">What I <span className="gradient-text">reach for</span>.</h2>
                </div>

                {/* Right Side */}
                <div className="max-w-xs flex items-end">
                    <p className="text-text/60 text-xs leading-relaxed text-right font-mono">Grouped by area, not ranked. A tool is a tool — pick the one that fits the job.</p>
                </div>
            </div>
        </section>
    )
}

export default Skills
