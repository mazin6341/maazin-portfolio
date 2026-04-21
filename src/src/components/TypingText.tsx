import { useTypingEffect } from "../hooks/useTypingEffect"
import { FiChevronRight } from "react-icons/fi"

function TypingText({ phrases }: { phrases: string[] }) {
    const displayText = useTypingEffect(phrases)

    return (
        <h2 className="text-text/80 text-xl md:text-2xl font-mono flex items-center gap-2 ">
            <FiChevronRight className="text-text/50" /><span className="text-text/50">I build </span> {displayText}<span className="text-accent-to animate-pulse">|</span>
        </h2>
    )
}

export default TypingText
