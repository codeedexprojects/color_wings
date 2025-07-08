import React, { useEffect, useState, useRef } from 'react';
import image1 from '../../assets/hero2.png';
import image2 from '../../assets/hero1.png';
import stationeryBanner from '../../assets/hero.png';

const ProductBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  const banners = [
    // First banner - WHITE THEME
    {
      id: 1,
      title: "PROFESSIONAL",
      subtitle: "STATIONERY",
      description: "From business cards to letterheads, create a cohesive brand identity with our premium stationery printing services. Quality materials, stunning designs.",
      buttonText: "Contact Now",
      bgColor: "bg-white",
      titleColor: "text-red-600",
      subtitleColor: "text-red-600",
      descriptionColor: "text-gray-600",
      buttonBg: "bg-red-600",
      buttonTextColor: "text-white",
      image: stationeryBanner,
      alt: "Professional stationery showcase"
    },
    // Second banner - RED THEME
    {
      id: 2,
      title: "PRINT MEMORIES",
      subtitle: "ON EVERY SIP",
      description: "Whether it's for your brand, your bestie, or a special event - our custom-printed mugs turn simple moments into lasting impressions. Choose your design, and we'll make it unforgettable.",
      buttonText: "Contact Now",
      bgColor: "bg-red-600",
      titleColor: "text-white",
      subtitleColor: "text-white",
      descriptionColor: "text-gray-200",
      buttonBg: "bg-white",
      buttonTextColor: "text-red-600",
      image: image1,
      alt: "Custom printed mugs showcase"
    },
    // Third banner - WHITE THEME
    {
      id: 3,
      title: "WEAR YOUR BRAND",
      subtitle: "WITH STYLE",
      description: "Bring your ideas to life on fabric. From corporate uniforms to event wear, we print high-quality, comfortable t-shirts that reflect your brand personality.",
      buttonText: "Contact Now",
      bgColor: "bg-white",
      titleColor: "text-red-600",
      subtitleColor: "text-red-600",
      descriptionColor: "text-gray-600",
      buttonBg: "bg-red-600",
      buttonTextColor: "text-white",
      image: image2,
      alt: "Custom printed t-shirts showcase"
    },
  ];

  useEffect(() => {
    const initVanta = () => {
      if (window.VANTA && vantaRef.current) {
        vantaEffect.current = window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: currentBanner === 1 ? 0xff6b6b : 0xffffff, // Red for middle banner, white for others
          color1: 0xff6b6b,
          color2: 0x4ecdc4,
          colorMode: 'lerp',
          birdSize: 0.8,
          wingSpan: 15.00,
          speedLimit: 3.00,
          separation: 80.00,
          alignment: 15.00,
          cohesion: 15.00,
          quantity: 4.00
        });
      }
    };

    if (!window.VANTA) {
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      threeScript.onload = () => {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.birds.min.js';
        vantaScript.onload = initVanta;
        document.head.appendChild(vantaScript);
      };
      document.head.appendChild(threeScript);
    } else {
      initVanta();
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [currentBanner]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleOrderNow = () => {
    const phoneNumber = '971565037735';
    const message = `Hi! I would like to order ${banners[currentBanner].title.toLowerCase()}. Can you please help me with the options and pricing?`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const currentBannerData = banners[currentBanner];

  return (
    <section className={`relative ${currentBannerData.bgColor} py-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ease-in-out`}>
      <div 
        ref={vantaRef}
        className="absolute inset-0 z-0 opacity-30 transition-all duration-1000 ease-in-out"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 transition-all duration-1000 ease-in-out">
            <h2 className={`text-4xl sm:text-5xl font-bold ${currentBannerData.titleColor} leading-tight transition-all duration-1000 ease-in-out`}>
              {currentBannerData.title}
              <br />
              <span className={currentBannerData.subtitleColor}>{currentBannerData.subtitle}</span>
            </h2>
            <p className={`${currentBannerData.descriptionColor} text-lg leading-relaxed max-w-md transition-all duration-1000 ease-in-out`}>
              {currentBannerData.description}
            </p>
            <div>
              <button
                onClick={handleOrderNow}
                className={`cursor-pointer ${currentBannerData.buttonBg} ${currentBannerData.buttonTextColor} font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                {currentBannerData.buttonText}
              </button>
            </div>
          </div>
          
          {/* Right Product Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative transition-all duration-1000 ease-in-out">
              <img
                src={currentBannerData.image}
                alt={currentBannerData.alt}
                className="w-full max-w-xl lg:max-w-2xl object-cover rounded-lg transform transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Banner Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner 
                ? banners[index].bgColor === 'bg-red-600' 
                  ? 'bg-white shadow-lg' 
                  : 'bg-red-600 shadow-lg'
                : 'bg-gray-400 bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductBanner;