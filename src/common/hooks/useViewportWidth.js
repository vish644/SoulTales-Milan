import { useState, useEffect } from "react";

export default function useViewportWidth() {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    let frame = null;

    const handleResize = () => {
      // Debounce via rAF so rapid resize events don't cause repeated re-animation
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setWidth(window.innerWidth);
      });
    };

    window.addEventListener("resize", handleResize);

    // Sync once in case width changed between initial state and mount (SSR/hydration)
    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return width;
}
