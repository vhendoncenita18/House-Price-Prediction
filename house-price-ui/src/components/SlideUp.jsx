import { useEffect, useRef, useState } from 'react';

export default function SlideUp({
  children,
  delay = 50,         // ms before animation starts
  duration = 700,     // ms animation duration
  distance = 24,      // px translateY start distance
  once = true,        // disconnect observer after first reveal
  className = '',
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.disconnect();
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    } else {
      const t = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(t);
    }
  }, [delay, once]);

  const style = {
    transform: visible ? 'translateY(0)' : `translateY(${distance}px)`,
    opacity: visible ? 1 : 0,
    transition: `transform ${duration}ms cubic-bezier(.22,.9,.3,1) ${delay}ms, opacity ${duration}ms ease ${delay}ms`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}