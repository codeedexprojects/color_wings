import React, { useEffect, useState, useRef } from 'react';
import hero from '../../assets/hero.png';
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png';


const BusinessCardShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  
   const images = [hero, hero1, hero2];


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
          backgroundColor: 0xffffff,
          color1: 0xff6b6b,
          color2: 0x4ecdc4,
          colorMode: 'lerp',
          birdSize: 1.00,
          wingSpan: 20.00,
          speedLimit: 5.00,
          separation: 100.00,
          alignment: 20.00,
          cohesion: 20.00,
          quantity: 3.00
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
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleContactNow = () => {
    const phoneNumber = '971565037735';
    const message = 'Hi! I would like to order business cards. Can you please help me with the options and pricing?';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div 
        ref={vantaRef}
        className="absolute inset-0 z-0"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-red-500 leading-tight">
              FIRST IMPRESSIONS
              <br />
              <span className="text-red-500">START HERE</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Leave a lasting impression with high-quality, professionally designed
              business cards. Choose from a variety of textures, finishes and styles to
              showcase your brand with elegance and confidence.
            </p>
            <div>
              <button
                onClick={handleContactNow}
                className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Now
              </button>
            </div>
          </div>
          
          {/* Right Image Carousel */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={images[currentImage]}
                alt="Business Card Mockup"
                className="w-full max-w-xl lg:max-w-2xl object-cover rounded-lg transform transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCardShowcase;