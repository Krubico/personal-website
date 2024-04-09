import { motion } from "framer-motion";
export function ButtonHover({ children }: { children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileFocus={{ scale: 1.1 }}>
      {children}
    </motion.div>
  );
}
