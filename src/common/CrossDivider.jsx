// import React from "react";
// import Reveal from "./Reveal";

// /**
//  * ------------------------------------------------------------------
//  * Reproduces the earlier screenshot: vertical main line sliding down
//  * from the top, short horizontal crossbar sliding in from the left,
//  * centered on the vertical line, near the bottom.
//  *
//  * jsx
//  * <CrossDivider
//  *   orientation="vertical"
//  *   length="330px"
//  *   crossLength="105px"
//  *   crossPosition="120px"
//  *   crossPositionFrom="end"
//  *   crossAlign="center"
//  *   verticalFrom="top"
//  *   horizontalFrom="left"
//  *   thickness="1px"
//  *   color="#fff"
//  * />
//  *
//  * ------------------------------------------------------------------
//  * A different page — horizontal main line sliding in from the right,
//  * vertical crossbar sliding down from the bottom instead:
//  *
//  * jsx
//  * <CrossDivider
//  *   orientation="horizontal"
//  *   length="100%"
//  *   crossLength="60px"
//  *   crossPosition="15%"
//  *   crossPositionFrom="start"
//  *   crossAlign="center"
//  *   verticalFrom="bottom"
//  *   horizontalFrom="right"
//  *   thickness="1px"
//  *   color="#fff"
//  * />
//  */

// const CrossDivider = ({
//   orientation = "vertical", // "vertical" | "horizontal" — which line is the long one
//   length = "100%",
//   crossLength = "80px",
//   crossPosition = "20px",
//   crossPositionFrom = "start", // "start" | "end"
//   crossAlign = "center", // "center" | "start" | "end"
//   thickness = "1px",
//   color = "#fff",
//   width,
//   height,
//   className = "",

//   // Animation direction — always tied to axis, not to "main"/"cross" role
//   verticalFrom = "top", // "top" | "bottom"
//   horizontalFrom = "left", // "left" | "right"

//   // Animation timing
//   animate = true,
//   distance = 48,
//   duration = 0.8,
//   delay = 0,
//   staggerDelay = 0.15, // extra delay added to the crossbar after the main line
//   once = true,
//   amount = 0.2,
// }) => {
//   const isVertical = orientation === "vertical";
//   const halfThickness = `${parseFloat(thickness) / 2}${
//     String(thickness).replace(/[\d.]/g, "") || "px"
//   }`;

//   // --- Outer wrapper for each line: static positioning + centering only.
//   // Framer-motion's own transform (for the reveal slide) lives on a nested
//   // element, so it never fights with this static centering transform.
//   const mainOuterStyle = isVertical
//     ? {
//         position: "absolute",
//         left: `calc(50% - ${halfThickness})`,
//         top: 0,
//         width: thickness,
//         height: length,
//       }
//     : {
//         position: "absolute",
//         top: `calc(50% - ${halfThickness})`,
//         left: 0,
//         height: thickness,
//         width: length,
//       };

//   const positionAlongMain = isVertical
//     ? crossPositionFrom === "end"
//       ? { bottom: crossPosition }
//       : { top: crossPosition }
//     : crossPositionFrom === "end"
//       ? { right: crossPosition }
//       : { left: crossPosition };

//   const alignOnCrossAxis = isVertical
//     ? crossAlign === "start"
//       ? { right: "50%" }
//       : crossAlign === "end"
//         ? { left: "50%" }
//         : { left: `calc(50% - ${crossLength} / 2)` } // centered on the main line
//     : crossAlign === "start"
//       ? { bottom: "50%" }
//       : crossAlign === "end"
//         ? { top: "50%" }
//         : { top: `calc(50% - ${crossLength} / 2)` };

//   const crossOuterStyle = isVertical
//     ? {
//         position: "absolute",
//         height: thickness,
//         width: crossLength,
//         ...positionAlongMain,
//         ...alignOnCrossAxis,
//       }
//     : {
//         position: "absolute",
//         width: thickness,
//         height: crossLength,
//         ...positionAlongMain,
//         ...alignOnCrossAxis,
//       };

//   // Reveal direction is tied to the AXIS of each line, not its main/cross role.
//   const mainRevealFrom = isVertical ? verticalFrom : horizontalFrom;
//   const crossRevealFrom = isVertical ? horizontalFrom : verticalFrom;

//   const lineFill = { width: "100%", height: "100%", backgroundColor: color };

//   const renderLine = (outerStyle, revealFrom, lineDelay) => {
//     if (!animate) {
//       return <div style={{ ...outerStyle, ...lineFill }} />;
//     }
//     return (
//       <div style={outerStyle}>
//         <Reveal
//           from={revealFrom}
//           distance={distance}
//           duration={duration}
//           delay={lineDelay}
//           once={once}
//           amount={amount}
//           style={{ width: "100%", height: "100%" }}
//         >
//           <div style={lineFill} />
//         </Reveal>
//       </div>
//     );
//   };

//   return (
//     <div
//       // className="relative"
//       className={`relative ${className}`}
//       style={{
//         width: width || (isVertical ? crossLength : length),
//         height: height || (isVertical ? length : crossLength),
//       }}
//     >
//       {renderLine(mainOuterStyle, mainRevealFrom, delay)}
//       {renderLine(crossOuterStyle, crossRevealFrom, delay + staggerDelay)}
//     </div>
//   );
// };

// export default CrossDivider;

import React from "react";
import Reveal from "./Reveal";

/**
 * ------------------------------------------------------------------
 * Reproduces the earlier screenshot: vertical main line sliding down
 * from the top, short horizontal crossbar sliding in from the left,
 * centered on the vertical line, near the bottom.
 *
 * jsx
 * <CrossDivider
 *   orientation="vertical"
 *   length="330px"
 *   crossLength="105px"
 *   crossPosition="120px"
 *   crossPositionFrom="end"
 *   crossAlign="center"
 *   verticalFrom="top"
 *   horizontalFrom="left"
 *   thickness="1px"
 *   color="#fff"
 * />
 *
 * ------------------------------------------------------------------
 * A different page — horizontal main line sliding in from the right,
 * vertical crossbar sliding down from the bottom instead:
 *
 * jsx
 * <CrossDivider
 *   orientation="horizontal"
 *   length="100%"
 *   crossLength="60px"
 *   crossPosition="15%"
 *   crossPositionFrom="start"
 *   crossAlign="center"
 *   verticalFrom="bottom"
 *   horizontalFrom="right"
 *   thickness="1px"
 *   color="#fff"
 * />
 */

const CrossDivider = ({
  orientation = "vertical", // "vertical" | "horizontal" — which line is the long one
  length = "100%",
  crossLength = "80px",
  crossPosition = "20px",
  crossPositionFrom = "start", // "start" | "end"
  crossAlign = "center", // "center" | "start" | "end"
  thickness = "1px",
  color = "#fff",
  width,
  height,
  className = "",

  // Animation direction — always tied to axis, not to "main"/"cross" role
  verticalFrom = "top", // "top" | "bottom"
  horizontalFrom = "left", // "left" | "right"

  // Animation timing
  animate = true,
  distance = 48,
  duration = 0.8,
  delay = 0,
  staggerDelay = 0.15, // extra delay added to the crossbar after the main line
  once = true,
  amount = 0.2,
}) => {
  const isVertical = orientation === "vertical";
  const halfThickness = `${parseFloat(thickness) / 2}${
    String(thickness).replace(/[\d.]/g, "") || "px"
  }`;

  // --- Outer wrapper for each line: static positioning + centering only.
  // Framer-motion's own transform (for the reveal slide) lives on a nested
  // element, so it never fights with this static centering transform.
  const mainOuterStyle = isVertical
    ? {
        position: "absolute",
        left: `calc(50% - ${halfThickness})`,
        top: 0,
        width: thickness,
        height: length,
      }
    : {
        position: "absolute",
        top: `calc(50% - ${halfThickness})`,
        left: 0,
        height: thickness,
        width: length,
      };

  const positionAlongMain = isVertical
    ? crossPositionFrom === "end"
      ? { bottom: crossPosition }
      : { top: crossPosition }
    : crossPositionFrom === "end"
      ? { right: crossPosition }
      : { left: crossPosition };

  const alignOnCrossAxis = isVertical
    ? crossAlign === "start"
      ? { right: "50%" }
      : crossAlign === "end"
        ? { left: "50%" }
        : { left: `calc(50% - ${crossLength} / 2)` } // centered on the main line
    : crossAlign === "start"
      ? { bottom: "50%" }
      : crossAlign === "end"
        ? { top: "50%" }
        : { top: `calc(50% - ${crossLength} / 2)` };

  const crossOuterStyle = isVertical
    ? {
        position: "absolute",
        height: thickness,
        width: crossLength,
        ...positionAlongMain,
        ...alignOnCrossAxis,
      }
    : {
        position: "absolute",
        width: thickness,
        height: crossLength,
        ...positionAlongMain,
        ...alignOnCrossAxis,
      };

  // Reveal direction is tied to the AXIS of each line, not its main/cross role.
  const mainRevealFrom = isVertical ? verticalFrom : horizontalFrom;
  const crossRevealFrom = isVertical ? horizontalFrom : verticalFrom;

  const lineFill = { width: "100%", height: "100%", backgroundColor: color };

  const renderLine = (outerStyle, revealFrom, lineDelay) => {
    if (!animate) {
      return <div style={{ ...outerStyle, ...lineFill }} />;
    }
    return (
      <div style={outerStyle}>
        <Reveal
          from={revealFrom}
          distance={distance}
          duration={duration}
          delay={lineDelay}
          once={once}
          amount={amount}
          style={{ width: "100%", height: "100%" }}
        >
          <div style={lineFill} />
        </Reveal>
      </div>
    );
  };

  return (
    <div
      // className="relative"
      className={`relative ${className}`}
      style={{
        width: width || (isVertical ? crossLength : length),
        height: height || (isVertical ? length : crossLength),
      }}
    >
      {renderLine(mainOuterStyle, mainRevealFrom, delay)}
      {renderLine(crossOuterStyle, crossRevealFrom, delay + staggerDelay)}
    </div>
  );
};

export default CrossDivider;
