import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
  icon?: React.ReactNode;
}

export function Counter({ end, suffix = '', duration = 2000, label, icon }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="text-center">
      {icon && <div className="flex justify-center mb-3">{icon}</div>}
      <div className="text-4xl md:text-5xl font-display font-bold text-white">
        {count.toLocaleString()}
        <span className="text-accent-400">{suffix}</span>
      </div>
      <div className="text-sm md:text-base text-white/70 mt-2 font-medium">{label}</div>
    </div>
  );
}
