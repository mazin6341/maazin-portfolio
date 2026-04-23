function Footer() {
    return (
        <footer className="border-t border-text/10 py-6 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between font-mono text-xs text-text/50 text-center md:text-left">
                <span>© {new Date().getFullYear()} Maazin · hand-rolled, no <s>cms</s> regrets</span>
                <span className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    deployed to maazin.velotical.com
                </span>
            </div>
        </footer>
    )
}

export default Footer
