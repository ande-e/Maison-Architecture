import React, { useRef, useEffect, useState } from 'react';

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const RevealText: React.FC<RevealTextProps> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};

export default RevealText;