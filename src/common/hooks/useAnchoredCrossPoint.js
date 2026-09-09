// import { useLayoutEffect, useState } from "react";

// export default function useAnchoredCrossPoint(
//   containerRef,
//   anchorRef,
//   {
//     gapAbove = 20,
//     xAlign = "right",
//     xInsetFraction = 0.18,
//     extraOffset = 0, // NEW: additional px nudge, independent of heading width
//     settleMs = 1800,
//   } = {},
// ) {
//   const [point, setPoint] = useState(null);

//   useLayoutEffect(() => {
//     if (!containerRef.current || !anchorRef.current) return;

//     const compute = () => {
//       const c = containerRef.current.getBoundingClientRect();
//       const a = anchorRef.current.getBoundingClientRect();
//       const inset = a.width * xInsetFraction + extraOffset;

//       const xPx =
//         xAlign === "right"
//           ? a.right - c.left - inset
//           : xAlign === "left"
//             ? a.left - c.left + inset
//             : a.left + a.width / 2 - c.left;

//       const yPx = a.top - c.top - gapAbove;

//       setPoint({
//         x: `${(xPx / c.width) * 100}%`,
//         y: `${(yPx / c.height) * 100}%`,
//       });
//     };

//     compute();
//     let rafId;
//     const start = performance.now();
//     const tick = (now) => {
//       compute();
//       if (now - start < settleMs) rafId = requestAnimationFrame(tick);
//     };
//     rafId = requestAnimationFrame(tick);

//     const ro = new ResizeObserver(compute);
//     ro.observe(containerRef.current);
//     ro.observe(anchorRef.current);
//     window.addEventListener("resize", compute);
//     window.addEventListener("orientationchange", compute);

//     return () => {
//       cancelAnimationFrame(rafId);
//       ro.disconnect();
//       window.removeEventListener("resize", compute);
//       window.removeEventListener("orientationchange", compute);
//     };
//   }, [
//     containerRef,
//     anchorRef,
//     gapAbove,
//     xAlign,
//     xInsetFraction,
//     extraOffset,
//     settleMs,
//   ]);

//   return point;
// }

// common/hooks/useAnchoredCrossPoint.js
import { useLayoutEffect, useState } from "react";

export default function useAnchoredCrossPoint(
  containerRef,
  anchorRef,
  {
    gapAbove = 20,
    xAlign = "left",
    xInsetFraction = 0.18,
    extraOffset = 0,
    settleMs = 1800,
  } = {},
) {
  const [point, setPoint] = useState(null);

  useLayoutEffect(() => {
    let rafId;
    let ro;
    let cancelled = false;

    const attach = () => {
      if (cancelled) return;

      // Refs not ready yet — retry next frame instead of giving up.
      if (!containerRef.current || !anchorRef.current) {
        rafId = requestAnimationFrame(attach);
        return;
      }

      const compute = () => {
        const c = containerRef.current.getBoundingClientRect();
        const a = anchorRef.current.getBoundingClientRect();
        const inset = a.width * xInsetFraction + extraOffset;

        const xPx =
          xAlign === "right"
            ? a.right - c.left - inset
            : xAlign === "left"
              ? a.left - c.left + inset
              : a.left + a.width / 2 - c.left;

        const yPx = a.top - c.top - gapAbove;

        setPoint({
          x: `${(xPx / c.width) * 100}%`,
          y: `${(yPx / c.height) * 100}%`,
        });
      };

      compute();

      // Keep recomputing briefly to catch entrance-animation settling,
      // font swap reflow, and image load layout shift.
      const start = performance.now();
      const tick = (now) => {
        compute();
        if (now - start < settleMs) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);

      ro = new ResizeObserver(compute);
      ro.observe(containerRef.current);
      ro.observe(anchorRef.current);
      window.addEventListener("resize", compute);
      window.addEventListener("orientationchange", compute);
      window.addEventListener("load", compute);
      document.fonts?.ready?.then(compute);

      // stash cleanup targets for the outer effect cleanup
      attach.cleanup = () => {
        ro?.disconnect();
        window.removeEventListener("resize", compute);
        window.removeEventListener("orientationchange", compute);
        window.removeEventListener("load", compute);
      };
    };

    attach();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      attach.cleanup?.();
    };
  }, [
    containerRef,
    anchorRef,
    gapAbove,
    xAlign,
    xInsetFraction,
    extraOffset,
    settleMs,
  ]);

  return point;
}
