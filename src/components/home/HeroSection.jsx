import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import image1 from '../../assets/bgcolor.jpg';
import image2 from '../../assets/Carousels/image1.jpg';
import image3 from '../../assets/Carousels/image2.jpg';
import image4 from '../../assets/Carousels/image3.jpg';
import image5 from '../../assets/Carousels/image4.jpg';
import image6 from '../../assets/Carousels/image5.jpg';
import image7 from '../../assets/Carousels/image6.jpg';
import image8 from '../../assets/Carousels/image7.jpg';
import image9 from '../../assets/Carousels/image9.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const carouselImages = [image1, image2, image3, image4, image5, image6, image7, image8,image9];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isHovered, carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  const handleOrderNow = () => {
  const phoneNumber = '971565037735';
  const message = `Hi! I would like to order ${banners[currentBanner].title.toLowerCase()}. Can you please help me with the options and pricing?`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
};

  return (
    <div 
      className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div 
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-in-out hover:scale-110"
              style={{
                transform: currentSlide === index ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 4000ms ease-in-out'
              }}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0  bg-opacity-10"></div>
            
            {/* Optional: Add text overlay for each slide */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-red-600">
                  FIRST IMPRESSION STARTS HERE
                </h1>
                <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
                 Leave a lasting impression with our stunning business cards. <br />Explore our collection and find the perfect design that reflects your brand's identity.
                </p>
                <button
                 onClick={handleOrderNow}
                  className="bg-red-600 hover:bg-red-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ease-in-out ${
              currentSlide === index 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;