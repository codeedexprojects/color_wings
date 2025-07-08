import React, { useRef, useState, useEffect } from 'react';
import logo1 from '../../assets/ClientsLogo/logo1.png';
import logo2 from '../../assets/ClientsLogo/logo2.png';
import logo3 from '../../assets/ClientsLogo/logo3.png';
import logo4 from '../../assets/ClientsLogo/logo4.png';
import logo5 from '../../assets/ClientsLogo/logo5.png';
import logo6 from '../../assets/ClientsLogo/logo6.png';
import logo7 from '../../assets/ClientsLogo/logo7.png';
import logo8 from '../../assets/ClientsLogo/logo8.png';
import logo9 from '../../assets/ClientsLogo/logo9.png';
import logo10 from '../../assets/ClientsLogo/logo10.png';
import logo11 from '../../assets/ClientsLogo/logo11.png';
import logo12 from '../../assets/ClientsLogo/logo12.png';

export default function ClientSlider() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const uniqueLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12
  ];
  
  // Duplicate the logos to create a seamless loop
  const images = [...uniqueLogos, ...uniqueLogos, ...uniqueLogos];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: 1,
          behavior: 'smooth'
        });
        
        // Reset to start when reaching the end for seamless looping
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
          sliderRef.current.scrollTo({
            left: 0,
            behavior: 'auto'
          });
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative bg-white py-8 group">
      <button 
        onClick={scrollLeft}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Scroll left"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div 
        ref={sliderRef}
        className="overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="inline-flex">
          {images.map((imgSrc, index) => (
            <div key={`${index}-${imgSrc}`} className="mx-6 flex-shrink-0">
              <img
                src={imgSrc}
                alt={`Client logo ${index % uniqueLogos.length + 1}`}
                className="w-40 h-40 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={scrollRight}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Scroll right"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}