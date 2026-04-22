import { FiArrowUpRight } from "react-icons/fi"

function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden py-24">
            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[800px] h-[300px] bg-accent-from/20 rounded-full blur-[120px] -translate-y-80" />
            </div>

            {/* Full-width horizontal rule */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-px bg-text/10" />

            <div className="relative max-w-6xl mx-auto px-6 text-center">
                <p className="text-xs text-text/60 font-mono">// LET'S TALK</p>
                <div className="text-4xl md:text-6xl font-bold font-mono mt-4 flex flex-col gap-2">
                    <h2>Got a <span className="gradient-text">weird idea</span>?</h2>
                    <h2>I probably want to hear it.</h2>
                </div>

                <p className="text-text/60 text-sm font-mono mt-6">
                    Available for freelance and contract work.
                </p>

                {/* Call To Actions */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 items-center">
                    <a href="mailto:mazin6341@gmail.com"
                        className="bg-gradient-to-br from-accent-from to-accent-to text-white px-4 py-3 rounded-lg font-mono text-sm shadow-lg shadow-accent-from/40 hover:shadow-accent-to/50 hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                            mazin6341@gmail.com
                            <FiArrowUpRight />
                    </a>
                    <a href="https://github.com/Mazin6341"
                        className="ring-1 ring-text/20 bg-white/5 backdrop-blur-md hover:ring-text/40 hover:-translate-y-0.5 px-4 py-3 rounded-lg font-mono text-sm transition-all flex items-center gap-2">
                            @Mazin6341
                            <FiArrowUpRight />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact
