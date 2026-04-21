function TerminalCard() {
    const lines = [
        { command: "whoami", output: [{ type: "text", value: "mohamed maazin faisal" }] },
        { command: "cat .stack", output: [
            { type: "kv", key: "primary", value: "laravel · livewire · postgres" },
            { type: "kv", key: "years", value: "7" },
        ]},
        { command: "uptime", output: [{ type: "text", value: "still curious. # since 2017" }] },
    ]

    return (
        <div className="bg-bg border border-text/10 rounded-xl overflow-hidden font-mono text-sm w-full max-w-md shadow-[#6c63ff]/20 shadow-xl">
            {/* Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-text/10">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
                <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
                <span className="text-text/30 text-xs ml-2">~/<span className="gradient-text">maazin</span>/portfolio — zsh</span>
            </div>
            <div className="p-4 flex flex-col gap-3">
                {lines.map((line, i) => (
                    <div key={i} className="flex flex-col gap-1">
                        <span className="text-text/70">
                            <span className="text-[#6c63ff]">$ </span>{line.command}
                        </span>
                        {line.output.map((out, j) => (
                            out.type === "kv"
                                ? <span key={j} className="flex gap-2">
                                    <span className="text-[#ff6584]">{out.key}</span>
                                    <span className="text-text/40">{"="}</span>
                                    <span className={isNaN(Number(out.value)) ? "text-[#28c840]" : "text-[#febc2e]"}>{isNaN(Number(out.value)) ? `"${out.value}"` : out.value}</span>
                                </span>
                                : <span key={j} className="text-text/50">{out.value}</span>
                        ))}
                    </div>
                ))}
                <span className="text-[#6c63ff]">$ <span className="animate-pulse">▋</span></span>
            </div>
        </div>
    )
}

export default TerminalCard
