import { useAnimation, useInView, motion } from "framer-motion";
import { PropsWithChildren, useEffect, useRef } from "react";

const variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const AnimationWrapper = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

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
