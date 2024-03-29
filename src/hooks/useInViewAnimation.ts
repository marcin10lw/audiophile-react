import { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

const useInViewAnimation = (threshold: number) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: threshold, once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return { animation, ref };
};

export default useInViewAnimation;
