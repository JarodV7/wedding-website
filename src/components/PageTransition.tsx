import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isFirstPage = location.pathname === '/about';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration:  0.4,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}
