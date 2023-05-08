import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import useInViewAnimation from "../../useInViewAnimation";
import { useLocation } from "react-router-dom";

const variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const AnimationWrapper = ({ children }: PropsWithChildren) => {
  const { animation, ref } = useInViewAnimation(0.3);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={animation}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
