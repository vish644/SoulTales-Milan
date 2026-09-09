import { motion } from "framer-motion";

const OFFSETS = {
  top: { y: -1, x: 0 },
  bottom: { y: 1, x: 0 },
  left: { y: 0, x: -1 },
  right: { y: 0, x: 1 },
};

const EASE = [0.16, 0.84, 0.28, 1]; // shared easing curve — keep this identical site-wide

export default function Reveal({
  children,
  from = "bottom", // "top" | "bottom" | "left" | "right"
  distance = 48, // px offset to animate from
  duration = 0.8, // seconds
  delay = 0, // seconds — use for staggering siblings
  once = true, // animate only the first time it enters view
  amount = 0.2, // % of element visible before triggering
  as = "div", // change to "span", "h1", etc. if needed
  className,
  style, // lets callers position this absolutely
  ...rest // anything else (data-*, aria-*, etc.) passes straight through
}) {
  const offset = OFFSETS[from] ?? OFFSETS.bottom;
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{
        opacity: 0,
        x: offset.x * distance,
        y: offset.y * distance,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
