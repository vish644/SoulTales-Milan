// src/common/LineReveal.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 0.84, 0.28, 1];

const ORIGIN_MAP = {
  y: { top: "center top", bottom: "center bottom", center: "center center" },
  x: { left: "left center", right: "right center", center: "center center" },
};

const OPPOSITE = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
  center: "center",
};

export default function LineReveal({
  axis = "x",
  edge = "left", // where it's BORN — this side disappears in phase 2
  duration = 0.8,
  delay = 0,

  settleScale, // 0-1 ratio: final length / grown length. Omit to skip phase 2.
  settleEdge, // the FIXED side that never moves. Defaults to opposite(edge).
  settleDuration = 0.5,
  settleDelay = 0.1,
  onSettled,

  className,
  style,
  ...rest
}) {
  const scaleKey = axis === "x" ? "scaleX" : "scaleY";
  const [phase, setPhase] = useState("grow");
  const hasSettle = typeof settleScale === "number";

  const resolvedSettleEdge = settleEdge ?? OPPOSITE[edge];
  const transformOrigin =
    phase === "grow"
      ? (ORIGIN_MAP[axis][edge] ?? ORIGIN_MAP[axis].center)
      : (ORIGIN_MAP[axis][resolvedSettleEdge] ?? ORIGIN_MAP[axis].center);

  return (
    <motion.div
      className={className}
      style={{ ...style, transformOrigin }}
      initial={{ [scaleKey]: 0 }}
      animate={{ [scaleKey]: phase === "grow" ? 1 : settleScale }}
      transition={{
        duration: phase === "grow" ? duration : settleDuration,
        delay: phase === "grow" ? delay : settleDelay,
        ease: EASE,
      }}
      onAnimationComplete={() => {
        if (hasSettle && phase === "grow") setPhase("settle");
        else onSettled?.();
      }}
      {...rest}
    />
  );
}
