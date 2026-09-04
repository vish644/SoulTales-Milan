/**
 * Returns a CSS clamp() string that linearly interpolates a pixel value
 * between a small-screen minimum and the original large-screen (design)
 * value, based on viewport width. At viewport widths >= maxVw (1440 by
 * default) it always resolves to exactly `max` — i.e. your original
 * design value, unchanged. Below minVw it resolves to exactly `min`.
 *
 * Used for components (like CrossDivider) that take raw pixel props via
 * inline styles rather than Tailwind classes, so they can still scale
 * fluidly with the rest of the page.
 */
export const fluid = (min, max, minVw = 370, maxVw = 1440) =>
  `clamp(${min}px, calc(${min}px + (${max} - ${min}) * ((100vw - ${minVw}px) / (${maxVw} - ${minVw}))), ${max}px)`;
