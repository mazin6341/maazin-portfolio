import { FiArrowUpRight, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'

function Navbar() {
    const { theme, toggle } = useTheme()

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-bg/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto w-full px-6 h-full flex items-center justify-between">
                <a href="/" className="font-mono text-lg font-bold text-text flex items-center gap-2">
                    <span className="mt-1 inline-block w-2 h-2 rounded-xs bg-gradient-to-br from-accent-from to-accent-to"></span>
                    maazin <span className="text-text/40">/ dev</span>
                </a>
                <div className="flex items-center gap-6">
                    <a href="#works"
                        className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm">
                            work
                    </a>
                    <a href="#skills"
                        className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm">
                            skills
                    </a>
                    <a href="#contact"
                        className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm">
                            contact
                    </a>
                    <a href="https://github.com/mazin6341" target="_blank" rel="noreferrer"
                        className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm flex items-center gap-1">
                            github <FiArrowUpRight size={14} />
                    </a>
                    <button
                        onClick={toggle}
                        className="text-text/60 hover:text-text transition-colors p-1.5 rounded-md ring-1 ring-text/20 hover:ring-text/40 hover:bg-text/5">
                            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
