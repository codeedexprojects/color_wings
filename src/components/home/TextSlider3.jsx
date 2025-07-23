import React from 'react';

export default function PrintEssentialsSlider3() {
  return (
    <div className="bg-red-500 text-white py-2 overflow-hidden relative">
      <div className="scroll-track flex whitespace-nowrap animate-scroll-fast">
        {/* Original set */}
        <div className="flex items-center space-x-4 text-xl md:text-2xl lg:text-3xl font-bold">
          {Array(10).fill(null).map((_, index) => (
            <React.Fragment key={index}>
              <span>CUSTOM MERCHANDISE</span>
              <span className="text-lg md:text-xl lg:text-2xl">•</span>
            </React.Fragment>
          ))}
          <span className="w-2 block"></span>
        </div>

        {/* Duplicate set for infinite loop */}
        <div className="flex items-center space-x-4 text-xl md:text-2xl lg:text-3xl font-bold">
          {Array(10).fill(null).map((_, index) => (
            <React.Fragment key={`dup-${index}`}>
              <span>CUSTOM MERCHANDISE</span>
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
