import LineSweep from "./LineSweep";
import useViewportWidth from "./hooks/useViewportWidth";
import { pickByBreakpoint } from "./breakpoints";

// Sensible defaults so a page can drop this in with zero config.
const DEFAULT_CROSS_POINTS = {
  base: { x: "50%", y: "35%" },
  sm: { x: "40%", y: "38%" },
  md: { x: "30%", y: "40%" },
  lg: { x: "25%", y: "40%" },
};

const DEFAULT_H_LENGTHS = { base: 50, sm: 65, lg: 80 };
const DEFAULT_V_LENGTHS = { base: 130, sm: 160, lg: 200 };

export default function CrossLines({
  crossPoints = DEFAULT_CROSS_POINTS,
  horizontalLengths = DEFAULT_H_LENGTHS,
  verticalLengths = DEFAULT_V_LENGTHS,
  thickness = 1,
  color = "#ffffff",
  duration = 1.5,
  horizontalDelay = 0.2,
  verticalDelay = 0.8,
  horizontalCrossPosition = "50%",
  verticalCrossPosition = "80%",
  crossPositionFrom = "start",
  className = "absolute inset-0 z-0 pointer-events-none overflow-hidden",
}) {
  const width = useViewportWidth();

  const crossPoint = pickByBreakpoint(width, crossPoints);
  const hLength = pickByBreakpoint(width, horizontalLengths);
  const vLength = pickByBreakpoint(width, verticalLengths);

  return (
    <div className={className}>
      <LineSweep
        axis="horizontal"
        length={hLength}
        thickness={thickness}
        color={color}
        duration={duration}
        delay={horizontalDelay}
        crossPoint={crossPoint}
        crossPosition={horizontalCrossPosition}
        crossPositionFrom={crossPositionFrom}
      />
      <LineSweep
        axis="vertical"
        length={vLength}
        thickness={thickness}
        color={color}
        duration={duration}
        delay={verticalDelay}
        crossPoint={crossPoint}
        crossPosition={verticalCrossPosition}
        crossPositionFrom={crossPositionFrom}
      />
    </div>
  );
}
