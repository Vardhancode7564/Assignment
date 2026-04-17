import { useState, useEffect, useRef } from "react";

export default function AnimatedCounter({
  value,
  suffix = "",
  isDecimal = false,
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateValue(0, value, 2000);
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const animateValue = (start, end, duration) => {
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      const current = start + (end - start) * eased;
      setCount(
        isDecimal ? parseFloat(current.toFixed(2)) : Math.floor(current),
      );

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(2) : count.toLocaleString()}
      {suffix}
    </span>
  );
}
