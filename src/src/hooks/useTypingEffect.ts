import { useState, useEffect } from "react"

export function useTypingEffect(phrases: string[]): string {
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex]
        const delay = isDeleting ? 40 : charIndex === currentPhrase.length ? 1500 : 80
        
        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentPhrase.length) {
                setCharIndex(charIndex + 1)
            } else if (!isDeleting && charIndex === currentPhrase.length) {
                setIsDeleting(true)
            } else if (isDeleting && charIndex > 0) {
                setCharIndex(charIndex - 1)
            } else {
                setIsDeleting(false)
                setPhraseIndex((phraseIndex + 1) % phrases.length)
            }
        }, delay)

        return () => clearTimeout(timeout)
    }, [phraseIndex, charIndex, isDeleting])

    return phrases[phraseIndex].substring(0, charIndex)
}