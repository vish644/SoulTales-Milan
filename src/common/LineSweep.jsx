// import { motion } from "framer-motion";

// const EASE = [0.16, 0.84, 0.28, 1];

// export default function LineSweep({
//   axis,
//   length = 70,
//   thickness = 1,
//   color = "#ffffff",
//   duration = 1.2,
//   delay = 0,

//   // Manually configurable intersection point
//   intersection = {
//     x: "50%",
//     y: "50%",
//   },

//   style,
//   className,
// }) {
//   const isVertical = axis === "vertical";

//   const position = isVertical
//     ? {
//         top: `calc(${intersection.y} - ${length / 2}px)`,
//       }
//     : {
//         left: `calc(${intersection.x} - ${length / 2}px)`,
//       };

//   const initialPosition = isVertical
//     ? {
//         top: -length,
//       }
//     : {
//         left: -length,
//       };

//   return (
//     <motion.div
//       className={className}
//       style={{
//         position: "absolute",
//         width: isVertical ? thickness : length,
//         height: isVertical ? length : thickness,
//         backgroundColor: color,
//         ...style,
//       }}
//       initial={initialPosition}
//       animate={position}
//       transition={{
//         duration,
//         delay,
//         ease: EASE,
//       }}
//     />
//   );
// }

import { motion } from "framer-motion";

const EASE = [0.16, 0.84, 0.28, 1];

// Resolves "15%", "60px", or a raw number into a pixel offset
// relative to `base` (the line's length).
const toPx = (value, base) => {
  if (typeof value === "number") return value;
  const trimmed = String(value).trim();
  if (trimmed.endsWith("%")) return (parseFloat(trimmed) / 100) * base;
  return parseFloat(trimmed);
};

export default function LineSweep({
  axis = "horizontal",
  length = 70,
  thickness = 1,
  color = "#ffffff",
  duration = 1.2,
  delay = 0,

  // Single source of truth: where in the container the two lines cross.
  crossPoint = { x: "50%", y: "50%" },

  // Where along THIS line's own length the crossPoint falls.
  // "50%" = centered (old default behavior).
  crossPosition = "50%",

  // Which edge crossPosition is measured from.
  crossPositionFrom = "start",

  className,
}) {
  const isVertical = axis === "vertical";

  const rawOffset = toPx(crossPosition, length);
  const offset = crossPositionFrom === "end" ? length - rawOffset : rawOffset;

  // Position along the sweeping axis (this animates in from off-screen).
  const alongFinal = isVertical
    ? `calc(${crossPoint.y} - ${offset}px)`
    : `calc(${crossPoint.x} - ${offset}px)`;

  const alongInitial = -length;

  // Fixed position on the perpendicular axis — centers the line's
  // thickness exactly on crossPoint, so both lines meet at the same
  // pixel regardless of thickness. Never animated, so it can't be
  // overridden by animate/initial like before.
  const perpendicularFixed = isVertical
    ? `calc(${crossPoint.x} - ${thickness / 2}px)`
    : `calc(${crossPoint.y} - ${thickness / 2}px)`;

  return (
    <motion.div
      className={className}
      style={{
        position: "absolute",
        width: isVertical ? thickness : length,
        height: isVertical ? length : thickness,
        backgroundColor: color,
        ...(isVertical
          ? { left: perpendicularFixed }
          : { top: perpendicularFixed }),
      }}
      initial={isVertical ? { top: alongInitial } : { left: alongInitial }}
      animate={isVertical ? { top: alongFinal } : { left: alongFinal }}
      transition={{ duration, delay, ease: EASE }}
    />
  );
}
