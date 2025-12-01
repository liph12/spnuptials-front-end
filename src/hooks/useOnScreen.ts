import { useEffect, useState } from "react";

export const useOnScreen = (ref: React.RefObject<Element>) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } // 10% visible
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
};
