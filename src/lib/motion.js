// Shared entrance animations (unchanged from the original design).
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Reused viewport config so every section reveals at the same point.
export const inView = { once: true, amount: 0.2 };
