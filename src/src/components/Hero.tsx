import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import TypingText from './TypingText'
import TerminalCard from './TerminalCard'

function Hero () {
    return (
        <section className="grid-bg relative overflow-hidden py-32">
            <div className="absolute bg-[#6c63ff] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl top-0 left-1/2"></div>
            <div className="absolute bg-[#ff6584] w-[400px] h-[400px] rounded-full opacity-20 blur-3xl -bottom-50 -right-70"></div>

            {/* Content Layer */}
            <div className="relative z-10 flex items-center">
                <div className="max-w-6xl mx-auto w-full px-6 flex flex-col md:flex-row gap-12">
                {/* Left Column - Main Details */}
                <div className="flex-1 flex flex-col gap-4">
                    <span className="text-text/70 text-4xl font-bold font-mono">Hi <span className="text-text">👋</span>, I'm</span>
                    <h1 className="font-mono font-bold text-5xl w-fit md:text-6xl gradient-text">
                            Maazin.
                    </h1>

                    {/* Cycling Text */}
                    <TypingText phrases={["things that work", "Laravel apps", "full-stack apps", "frontend UIs"]} />

                    {/* Static Description */}
                    <p className="text-text/60 text-base max-w-md leading-relaxed">
                        Full-stack developer, 5+ years deep in Laravel and Livewire. I like shipping things that work quietly, read cleanly, and don't fall over at 3am.
                    </p>

                    {/* Call To Actions */}
                    <div className="flex gap-4 mt-2">
                        <a href="#works"
                            className="bg-gradient-to-br from-accent-from to-accent-to text-white px-4 py-3 rounded-lg font-mono text-sm shadow-lg shadow-accent-from/40 hover:shadow-accent-to/50 hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                                view my work
                                <FiArrowDown />
                        </a>
                        <a href="https://github.com/Mazin6341"
                            className="ring-1 ring-text/20 bg-white/5 backdrop-blur-md hover:ring-text/40 hover:-translate-y-0.5 px-4 py-3 rounded-lg font-mono text-sm transition-all flex items-center gap-2">
                                github
                                <FiArrowUpRight />
                        </a>
                    </div>
                </div>

                {/* Right Column - Terminal */}
                <div className="hidden md:block">
                    <TerminalCard />
                </div>
                </div>
            </div>
        </section>
    )
}

export default Hero