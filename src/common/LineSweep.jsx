import { motion } from "framer-motion";

const EASE = [0.16, 0.84, 0.28, 1];

// Resolves an offset while preserving percentages when the line length is CSS-based.
const toPx = (value, base) => {
  if (typeof value === "number") return `${value}px`;
  const trimmed = String(value).trim();
  if (trimmed.endsWith("%")) {
    if (typeof base === "string" && base.trim().endsWith("%")) {
      return trimmed;
    }
    return `${(parseFloat(trimmed) / 100) * base}px`;
  }
  return `${parseFloat(trimmed)}px`;
};
export default function LineSweep({
  axis = "horizontal",
  length = 70,
  thickness = 1,
  color = "#ffffff",
  duration = 1.2,
  delay = 0,
  crossPoint = { x: "50%", y: "50%" },
  crossPosition = "50%",
  crossPositionFrom = "start",
  sweepFrom = "start",
  className,
}) {
  const isVertical = axis === "vertical";

  const rawOffset = toPx(crossPosition, length);
  const offset =
    crossPositionFrom === "end"
      ? typeof rawOffset === "string" && rawOffset.endsWith("%")
        ? typeof length === "string" && length.trim().endsWith("%")
          ? `calc(100% - ${rawOffset})`
          : `${parseFloat(length) - parseFloat(rawOffset)}px`
        : `${parseFloat(length) - parseFloat(rawOffset)}px`
      : rawOffset;

  const alongFinal = isVertical
    ? `calc(${crossPoint.y} - ${offset})`
    : `calc(${crossPoint.x} - ${offset})`;

  // "start": off-canvas by `length` before position 0 (unchanged default).
  // "end": off-canvas beyond the container's far edge.
  const alongInitial =
    sweepFrom === "end" ? `calc(100% + ${length}px)` : -length;

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
