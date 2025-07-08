import React from 'react';

export default function PrintEssentialsSlider() {
  return (
    <div className="bg-red-500 text-white py-8 overflow-hidden relative">
      <div className="scroll-track flex whitespace-nowrap animate-scroll-fast">
        <div className="flex items-center space-x-4 text-3xl md:text-4xl lg:text-5xl font-bold">
          {Array(10).fill(null).map((_, index) => (
            <React.Fragment key={index}>
              <span>PRINT ESSENTIALS</span>
              <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
            </React.Fragment>
          ))}
        </div>

        <div className="flex items-center space-x-8 text-3xl md:text-4xl lg:text-5xl font-bold">
          {Array(10).fill(null).map((_, index) => (
            <React.Fragment key={`dup-${index}`}>
              <span>PRINT ESSENTIALS</span>
              <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scrollFast 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
