
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const pickByBreakpoint = (width, values) => {
  if (width >= BREAKPOINTS.xl && values.xl) return values.xl;
  if (width >= BREAKPOINTS.lg && values.lg) return values.lg;
  if (width >= BREAKPOINTS.md && values.md) return values.md;
  if (width >= BREAKPOINTS.sm && values.sm) return values.sm;
  return values.base;
};
