import React from 'react';

function Spinner({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'h-5 w-5 border-2',
    md: 'h-8 w-8 border-[3px]',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`inline-block animate-spin rounded-full border-solid border-r-transparent ${sizeClasses[size]} ${
          className || 'text-primary'
        }`}
        style={{
          animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
