import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

interface CDetailsPageAnimationsProps {
  children: React.ReactNode
}

const DetailsPageAnimations = ({ children }: CDetailsPageAnimationsProps) => {
  return (
    <AnimatePresence>
      <motion.div
        transition={{ duration: 0.3 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export { DetailsPageAnimations }
