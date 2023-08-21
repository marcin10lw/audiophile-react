import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

import useInViewAnimation from "hooks/useInViewAnimation";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
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
