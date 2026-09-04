import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // Don't scroll to top if we're navigating here to scroll to a section instead
    if (state?.scrollTo) return;
    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;
