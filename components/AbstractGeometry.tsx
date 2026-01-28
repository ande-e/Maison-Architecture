import React from 'react';

const AbstractGeometry: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative ${className} opacity-80`}>
      <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_20s_linear_infinite]">
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink opacity-20" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink opacity-40" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink opacity-60" />
        <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" className="text-ink opacity-30" />
        <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-ink opacity-30" />
      </svg>
      {/* The "Eye" */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-int-orange rounded-full shadow-[0_0_15px_rgba(255,51,51,0.5)]" />
    </div>
  );
};

export default AbstractGeometry;