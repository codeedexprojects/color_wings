import React from 'react';

export default function PrintEssentialsSlider8() {
  return (
    <div className="bg-red-500 text-white py-8 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll-faster">
        {/* Repeated text for continuous scrolling */}
        <div className="flex items-center space-x-8 text-3xl md:text-4xl lg:text-5xl font-bold">
          <span>PU CUSTOMISED</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PU CUSTOMISED</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PU CUSTOMISED</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PU CUSTOMISED</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PU CUSTOMISED</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PU CUSTOMISED</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PU CUSTOMISED</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PU CUSTOMISED</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
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
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
}