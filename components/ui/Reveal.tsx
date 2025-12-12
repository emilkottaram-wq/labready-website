import React, { useEffect, useRef, useState } from 'react';
import { RevealProps } from '../../types';

export const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", className = "", delay = 0 }) => {
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
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={className} 
      style={{ 
        position: "relative", 
        overflow: "visible",
        width: width 
      }}
    >
      <div
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(25px)",
          opacity: isVisible ? 1 : 0,
          transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </div>
  );
};