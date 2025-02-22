import { useState, useEffect } from "react";

export function useIsMobileOrTablet(): boolean {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(max-width: 1024px)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (!window.matchMedia) return;
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => {
      setIsMobileOrTablet(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handler);
      }
    };
  }, []);

  return isMobileOrTablet;
}
