import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

interface CardAnimationProps {
  children: React.ReactNode
}

const CardAnimations = ({ children }: CardAnimationProps) => {
  return (
    <AnimatePresence>
      <motion.div
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export { CardAnimations }
