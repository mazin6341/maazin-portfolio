import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'

function Hero () {
    return (
        <section className="grid-bg relative overflow-hidden min-h-screen">
            <div className="absolute bg-[#6c63ff] w-96 h-96 rounded-full opacity-15 blur-3xl top-20 left-20"></div>
            <div className="absolute bg-[#ff6584] w-96 h-96 rounded-full opacity-15 blur-3xl bottom-20 right-20"></div>

            {/* Content Layer */}
            <div className="relative z-10 flex items-center min-h-screen">
                <div className="max-w-6xl mx-auto w-full px-6 flex gap-12">
                {/* Left Column - Main Details */}
                <div className="flex-1 flex flex-col gap-4">
                    <span className="text-text/70 text-4xl font-bold font-mono">Hi 👋, I'm</span>
                    <h1 className="font-mono font-bold text-5xl w-fit md:text-6xl gradient-text">
                            Maazin.
                    </h1>

                    {/* Cycling Text */}
                    <h2 className="text-text/80 text-xl md:text-2xl font-mono">Full-Stack Developer</h2>
                    <p className="text-text/60 text-base max-w-md leading-relaxed">
                        Full-stack developer, 5+ years deep in Laravel and Livewire. I like shipping things that work quietly, read cleanly, and don't fall over at 3am.
                    </p>

                    {/* Call To Actions */}
                    <div className="flex gap-4 mt-2">
                        <a href="#works"
                            className="bg-gradient-to-br from-accent-from to-accent-to text-white px-6 py-3 rounded-lg font-mono hover:opacity-90 transition-opacity flex items-center gap-2">
                                view my work
                                <FiArrowDown />
                        </a>
                        <a href="https://github.com/Mazin6341"
                            className="ring-1 ring-text/20 bg-text/10 text-text/80 hover:bg-text/15 px-6 py-3 rounded-lg font-mono transition-colors flex items-center gap-2">
                                github
                                <FiArrowUpRight />
                        </a>
                    </div>
                </div>

                {/* Right Column - Terminal */}
                </div>
            </div>
        </section>
    )
}

export default Hero