import { AnimatePresence, motion } from "framer-motion";
import styles from "./index.module.scss";
import { MouseEventHandler } from "react";

type BackdropProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  isMenuOpen: boolean;
};

const Backdrop = ({ onClick, isMenuOpen }: BackdropProps) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.backdrop}
          onClick={onClick}
        />
      )}
    </AnimatePresence>
  );
};

export default Backdrop;
