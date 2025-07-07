import React from 'react';

export default function PrintEssentialsSlider() {
  return (
    <div className="bg-red-500 text-white py-8 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll-faster">
        {/* Repeated text for continuous scrolling */}
        <div className="flex items-center space-x-8 text-3xl md:text-4xl lg:text-5xl font-bold">
          <span>PRINT ESSENTIALS</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PRINT ESSENTIALS</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PRINT ESSENTIALS</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PRINT ESSENTIALS</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PRINT ESSENTIALS</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PRINT ESSENTIALS</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PRINT ESSENTIALS</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">•</span>
          <span>PRINT ESSENTIALS</span>
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
        
        /* Original speed (slower) */
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        
        /* Faster version */
        .animate-scroll-faster {
          animation: scroll 8s linear infinite;
        }
        
        /* Even faster version */
        .animate-scroll-fastest {
          animation: scroll 5s linear infinite;
        }
      `}</style>
    </div>
  );
}