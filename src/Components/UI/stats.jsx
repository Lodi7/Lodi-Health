import { useEffect, useRef, useState } from "react";

function Stats(props) {
  const { label, value = 0, delay = 0, duration = 1800 } = props;
  const [displayed, setDisplayed] = useState(0);
  const elementRef = useRef(null);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const target =
      typeof value === "string"
        ? parseFloat(value.replace(/[^\d]/g, "")) || 0
        : Number(value);

    const startCountUp = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth cubic ease-out
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOut * target);

        setDisplayed(currentValue);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(update);
        } else {
          setDisplayed(target);
        }
      };

      animationRef.current = requestAnimationFrame(update);
    };

    const current = elementRef.current;
    if (!window.IntersectionObserver) {
      startCountUp();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          if (delay > 0) {
            timeoutRef.current = setTimeout(startCountUp, delay);
          } else {
            startCountUp();
          }
          if (current) observer.unobserve(current);
        }
      },
      { threshold: 0.15 }
    );

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [value, delay, duration]);

  const suffix = typeof value === "string" ? /[^\d]+$/.exec(value)?.[0] || "" : "";

  return (
    <div ref={elementRef} className="flex flex-col text-center">
      <dt className="order-2 mt-2 text-xs lg:text-sm leading-6 font-medium text-slate-500">
        {label}
      </dt>
      <dd className="order-1 text-2xl lg:text-3xl font-extrabold text-slate-800">
        {displayed.toLocaleString("id-ID")}
        {suffix}
      </dd>
    </div>
  );
}

export default Stats;
