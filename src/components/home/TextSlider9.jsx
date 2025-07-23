import React from 'react';

export default function ExpoSlider9() {
  return (
    <div className="bg-red-500 text-white py-2 overflow-hidden relative">
      <div className="scroll-track flex whitespace-nowrap">
        {/* Three identical sets for smoother looping */}
        <div className="flex items-center space-x-4 text-xl md:text-2xl lg:text-3xl font-bold">
          {Array(10).fill(null).map((_, index) => (
            <React.Fragment key={`set1-${index}`}>
              <span>EXPO</span>
              <span className="text-lg md:text-xl lg:text-2xl">•</span>
            </React.Fragment>
            
          ))}
          <span className="w-2 block"></span>
        </div>

        <div className="flex items-center space-x-4 text-xl md:text-2xl lg:text-3xl font-bold">
          {Array(10).fill(null).map((_, index) => (
            <React.Fragment key={`set2-${index}`}>
              <span>EXPO</span>
              <span className="text-lg md:text-xl lg:text-2xl">•</span>
            </React.Fragment>
          ))}
          <span className="w-2 block"></span>
        </div>

        <div className="flex items-center space-x-4 text-xl md:text-2xl lg:text-3xl font-bold">
          {Array(10).fill(null).map((_, index) => (
            <React.Fragment key={`set3-${index}`}>
              <span>EXPO</span>
              <span className="text-lg md:text-xl lg:text-2xl">•</span>
            </React.Fragment>
          ))}
          <span className="w-2 block"></span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .scroll-track {
          display: flex;
          width: calc(300%);
          animation: scroll 15s linear infinite;
        }

        /* Adjust animation duration based on screen size if needed */
        @media (max-width: 768px) {
          .scroll-track {
            animation-duration: 10s;
          }
        }
      `}</style>
    </div>
  );
}