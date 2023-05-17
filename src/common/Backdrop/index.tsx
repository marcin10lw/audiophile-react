import { AnimatePresence, motion } from "framer-motion";
import styles from "./index.module.scss";
import { MouseEventHandler } from "react";

type BackdropProps = {
  onClick?: MouseEventHandler<HTMLDivElement>;
  showBackDrop: boolean;
};

const Backdrop = ({ onClick, showBackDrop }: BackdropProps) => {
  return (
    <AnimatePresence>
      {showBackDrop && (
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
