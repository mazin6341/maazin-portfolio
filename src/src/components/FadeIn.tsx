import { motion } from "framer-motion"

function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y:30 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    )
}

export default FadeIn