import React from 'react';

export default function PrintEssentialsSlider() {
  return (
    <div className="bg-red-500 text-white py-2 overflow-hidden relative">
      <div className="scroll-track flex whitespace-nowrap animate-scroll-fast">
        <div className="flex items-center space-x-4 text-xl md:text-2xl lg:text-3xl font-bold">
          {Array(10).fill(null).map((_, index) => (
            <React.Fragment key={index}>
              <span>PRINT ESSENTIALS</span>
              <span className="text-lg md:text-xl lg:text-2xl">•</span>
            </React.Fragment>
          ))}
          <span className="w-2 block"></span>
        </div>

        <div className="flex items-center space-x-4 text-xl md:text-2xl lg:text-3xl font-bold">
          {Array(10).fill(null).map((_, index) => (
            <React.Fragment key={`dup-${index}`}>
              <span>PRINT ESSENTIALS</span>
              <span className="text-lg md:text-xl lg:text-2xl">•</span>
            </React.Fragment>
          ))}
          <span className="w-2 block"></span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollFast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-fast {
          animation: scrollFast 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
