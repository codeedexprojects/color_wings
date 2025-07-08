import React from 'react';
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
  const images = [
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
    logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
     logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
     logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
     logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
     logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
     logo1, logo2, logo3, logo4, logo5, logo6,
    logo7, logo8, logo9, logo10, logo11, logo12,
  ];

  return (
    <div className="bg-white py-8 overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide group relative">
      <div className="inline-flex animate-scroll group-hover:pause-scroll">
        {images.map((imgSrc, index) => (
          <div key={index} className="mx-6 flex-shrink-0">
            <img
              src={imgSrc}
              alt={`Slider ${index}`}
              className="w-40 h-40 object-contain"
            />
          </div>
        ))}
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
          animation: scroll 60s linear infinite;
        }

        .pause-scroll {
          animation-play-state: paused;
        }

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
