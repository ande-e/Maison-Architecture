
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-trigger')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'transform 0.1s ease-out',
        mixBlendMode: 'normal' // Explicitly normal to avoid contrast effects
      }}
    >
      <div
        className={`relative -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out flex items-center justify-center
          ${isHovering ? 'w-16 h-16' : 'w-4 h-4'}
        `}
      >
        {/* Outer Ring */}
        <div className={`absolute border border-int-orange w-full h-full rounded-full transition-all duration-700 ease-out ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Inner Dot */}
        <div className={`bg-int-orange rounded-full transition-all duration-700 ease-out ${isHovering ? 'w-2 h-2' : 'w-3 h-3'}`} />
      </div>
    </div>
  );
};

export default CustomCursor;
