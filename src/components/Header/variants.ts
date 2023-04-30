export const menuVariants = {
  open: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.9,
    },
  },
  closed: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};
