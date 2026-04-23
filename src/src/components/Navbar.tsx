import { useState } from 'react'
import { FiArrowUpRight, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'

function Navbar() {
    const { theme, toggle } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto w-full px-6 h-16 flex items-center justify-between">
                <a href="/" className="font-mono text-lg font-bold text-text flex items-center gap-2">
                    <span className="mt-1 inline-block w-2 h-2 rounded-xs bg-gradient-to-br from-accent-from to-accent-to"></span>
                    maazin <span className="text-text/40">/ dev</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <a href="/#works" className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm">work</a>
                    <a href="/#skills" className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm">skills</a>
                    <a href="/#contact" className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm">contact</a>
                    <a href="https://github.com/Mazin6341" target="_blank" rel="noreferrer"
                        className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm flex items-center gap-1">
                        github <FiArrowUpRight size={14} />
                    </a>
                    <button onClick={toggle}
                        className="text-text/60 hover:text-text transition-colors p-1.5 rounded-md ring-1 ring-text/20 hover:ring-text/40 hover:bg-text/5">
                        {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                    </button>
                </div>

                {/* Mobile Controls */}
                <div className="flex md:hidden items-center gap-3">
                    <button onClick={toggle}
                        className="text-text/60 hover:text-text transition-colors p-1.5 rounded-md ring-1 ring-text/20 hover:ring-text/40 hover:bg-text/5">
                        {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                    </button>
                    <button onClick={() => setMenuOpen(o => !o)}
                        className="text-text/60 hover:text-text transition-colors p-1.5 rounded-md ring-1 ring-text/20 hover:ring-text/40 hover:bg-text/5">
                        {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-bg/95 backdrop-blur-sm border-t border-text/10 px-6 py-4 flex flex-col gap-4">
                    <a href="/#works" onClick={() => setMenuOpen(false)}
                        className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm">work</a>
                    <a href="/#skills" onClick={() => setMenuOpen(false)}
                        className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm">skills</a>
                    <a href="/#contact" onClick={() => setMenuOpen(false)}
                        className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm">contact</a>
                    <a href="https://github.com/Mazin6341" target="_blank" rel="noreferrer"
                        className="font-mono text-text/60 hover:text-accent-from transition-colors text-sm flex items-center gap-1">
                        github <FiArrowUpRight size={14} />
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar
