import { isVisible } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";

export default function useOnScreen(ref, rootMargin) {
  const [visible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(rootMargin);
    if (ref.current == null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [ref.current, rootMargin]);
  return isVisible;
}
