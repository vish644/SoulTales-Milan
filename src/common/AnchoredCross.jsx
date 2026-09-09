// // common/AnchoredCross.jsx
// import CrossLines from "./CrossLines";
// import useViewportWidth from "./hooks/useViewportWidth";
// import useAnchoredCrossPoint from "./hooks/useAnchoredCrossPoint";
// import { pickByBreakpoint } from "./breakpoints";

// const DEFAULTS = {
//   gapAbove: { base: 10, sm: 14, md: 18, lg: 22, xl: 24 },
//   extraOffset: { base: 25, sm: 15, md: 5, lg: 0, xl: 0 },
//   hLength: { base: 43, sm: 60, md: 72, lg: 80, xl: 90 },
//   vLength: { base: 120, sm: 160, md: 195, lg: 200, xl: 220 },
//   xInsetFraction: 0.18,
//   xAlign: "right",
// };

// /**
//  * Drop this next to any heading you want a cross-line accent above.
//  * Pass the SAME ref to both the section container and this component's
//  * `containerRef`, and the ref of the heading block as `anchorRef`.
//  */
// export default function AnchoredCross({
//   containerRef,
//   anchorRef,
//   gapAbove = DEFAULTS.gapAbove,
//   extraOffset = DEFAULTS.extraOffset,
//   hLength: hLengthMap = DEFAULTS.hLength,
//   vLength: vLengthMap = DEFAULTS.vLength,
//   xInsetFraction = DEFAULTS.xInsetFraction,
//   xAlign = DEFAULTS.xAlign,
// }) {
//   const width = useViewportWidth();

//   const resolvedGap = pickByBreakpoint(width, gapAbove);
//   const resolvedExtra = pickByBreakpoint(width, extraOffset);
//   const hLength = pickByBreakpoint(width, hLengthMap);
//   const vLength = pickByBreakpoint(width, vLengthMap);

//   const crossPoint = useAnchoredCrossPoint(containerRef, anchorRef, {
//     gapAbove: resolvedGap,
//     xAlign,
//     xInsetFraction,
//     extraOffset: resolvedExtra,
//   });

//   if (!crossPoint) return null;

//   return (
//     <CrossLines
//       crossPoints={{
//         base: crossPoint,
//         sm: crossPoint,
//         md: crossPoint,
//         lg: crossPoint,
//         xl: crossPoint,
//       }}
//       horizontalLengths={{
//         base: hLength,
//         sm: hLength,
//         md: hLength,
//         lg: hLength,
//         xl: hLength,
//       }}
//       verticalLengths={{
//         base: vLength,
//         sm: vLength,
//         md: vLength,
//         lg: vLength,
//         xl: vLength,
//       }}
//     />
//   );
// }

// common/AnchoredCross.jsx
import CrossLines from "./CrossLines";
import useViewportWidth from "./hooks/useViewportWidth";
import useAnchoredCrossPoint from "./hooks/useAnchoredCrossPoint";
import { pickByBreakpoint } from "./breakpoints";

// Baseline = Hero's approved, tuned look. Never change these casually —
// every page using <AnchoredCross /> with no overrides inherits this shape.
const HERO_DEFAULTS = {
  gapAbove: { base: 40, sm: 14, md: 70, lg: 70, xl: 40 },
  extraOffset: { base: 0, sm: 15, md: 5, lg: 0, xl: 0 },
  hLength: { base: 43, sm: 60, md: 72, lg: 80, xl: 70 },
  vLength: { base: 120, sm: 160, md: 195, lg: 180, xl: 170 },
  xInsetFraction: 0.1,
  xAlign: "right",
  horizontalCrossPosition: "50%",
  verticalCrossPosition: "80%",
  crossPositionFrom: "start",
  horizontalSweepFrom: "start",
  verticalSweepFrom: "start",
};

// Named preset for the second shape: short centered "+" with a long arm
// extending right, vertical symmetric about the crossing point.
export const CROSS_PRESETS = {
  hero: HERO_DEFAULTS,
  rightArm: {
    gapAbove: { base: 20, sm: 24, md: 28, lg: 32, xl: 36 },
    extraOffset: { base: 0, sm: 0, md: 0, lg: 0, xl: 0 },
    hLength: { base: 60, sm: 90, md: 120, lg: 150, xl: 180 },
    vLength: { base: 60, sm: 70, md: 80, lg: 90, xl: 100 },
    xInsetFraction: 0.1,
    xAlign: "right",
    horizontalCrossPosition: "0%", // line starts AT crossing → extends only right
    verticalCrossPosition: "50%", // centered → extends equally up/down
    crossPositionFrom: "start",
    horizontalSweepFrom: "start",
    verticalSweepFrom: "start",
  },
};

export default function AnchoredCross({
  containerRef,
  anchorRef,
  preset = "hero", // "hero" | "rightArm" — pick the base shape, then override anything below
  gapAbove,
  extraOffset,
  hLength: hLengthMap,
  vLength: vLengthMap,
  xInsetFraction,
  xAlign,
  horizontalCrossPosition,
  verticalCrossPosition,
  crossPositionFrom,
  horizontalSweepFrom,
  verticalSweepFrom,
}) {
  const base = CROSS_PRESETS[preset] || HERO_DEFAULTS;

  const cfg = {
    gapAbove: gapAbove ?? base.gapAbove,
    extraOffset: extraOffset ?? base.extraOffset,
    hLength: hLengthMap ?? base.hLength,
    vLength: vLengthMap ?? base.vLength,
    xInsetFraction: xInsetFraction ?? base.xInsetFraction,
    xAlign: xAlign ?? base.xAlign,
    horizontalCrossPosition:
      horizontalCrossPosition ?? base.horizontalCrossPosition,
    verticalCrossPosition: verticalCrossPosition ?? base.verticalCrossPosition,
    crossPositionFrom: crossPositionFrom ?? base.crossPositionFrom,
    horizontalSweepFrom: horizontalSweepFrom ?? base.horizontalSweepFrom,
    verticalSweepFrom: verticalSweepFrom ?? base.verticalSweepFrom,
  };

  const width = useViewportWidth();
  const resolvedGap = pickByBreakpoint(width, cfg.gapAbove);
  const resolvedExtra = pickByBreakpoint(width, cfg.extraOffset);
  const hLength = pickByBreakpoint(width, cfg.hLength);
  const vLength = pickByBreakpoint(width, cfg.vLength);

  const crossPoint = useAnchoredCrossPoint(containerRef, anchorRef, {
    gapAbove: resolvedGap,
    xAlign: cfg.xAlign,
    xInsetFraction: cfg.xInsetFraction,
    extraOffset: resolvedExtra,
  });

  if (!crossPoint) return null;

  return (
    <CrossLines
      crossPoints={{
        base: crossPoint,
        sm: crossPoint,
        md: crossPoint,
        lg: crossPoint,
        xl: crossPoint,
      }}
      horizontalLengths={{
        base: hLength,
        sm: hLength,
        md: hLength,
        lg: hLength,
        xl: hLength,
      }}
      verticalLengths={{
        base: vLength,
        sm: vLength,
        md: vLength,
        lg: vLength,
        xl: vLength,
      }}
      horizontalCrossPosition={cfg.horizontalCrossPosition}
      verticalCrossPosition={cfg.verticalCrossPosition}
      crossPositionFrom={cfg.crossPositionFrom}
      horizontalSweepFrom={cfg.horizontalSweepFrom}
      verticalSweepFrom={cfg.verticalSweepFrom}
    />
  );
}
