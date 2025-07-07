import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mockup from '../../assets/bscard.png';
import image3 from '../../assets/BusinessCards/image3.png';
import image2 from '../../assets/BusinessCards/image2.png';
import image4 from '../../assets/BusinessCards/image4.png';
import image5 from '../../assets/BusinessCards/image5.png';
import image6 from '../../assets/BusinessCards/image6.png';
import image7 from '../../assets/BusinessCards/image7.png';
import image8 from '../../assets/BusinessCards/image8.png';
import image9 from '../../assets/BusinessCards/image9.png';

export default function BusinessCardsSection() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cardData = [
    { src: mockup },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
    { src: image9 },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show only first 3 cards on mobile if showAll is false
  const displayedCards = isMobile && !showAll ? cardData.slice(0, 3) : cardData;

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="bg-white py-16 px-4 md:px-20">
      {/* Heading Section */}
      <div
        className="text-center mb-10 border-red-600 pt-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-red-600 tracking-wide leading-snug">
          BUSINESS CARDS | LETTERHEADS | ENVELOPES | FLYER | NAME TAG & LANYARD <br />
          BROCHURES | BILL BOOKS | INVOICE PADS | STAMP | DOOR HANGER | CUSTOMISED CALENDAR
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {displayedCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="600"
          >
            <img
              src={card.src}
              alt={`Card ${index + 1}`}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>

      {isMobile && cardData.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {showAll ? 'View Less' : `View More `}
          </button>
        </div>
      )}
    </div>
  );
}