import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hero from '../../assets/hero.png';

const BusinessCardShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  const handleContactNow = () => {
    const phoneNumber = '971565037735';
    const message = 'Hi! I would like to order business cards. Can you please help me with the options and pricing?';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2
              className="text-4xl sm:text-5xl font-bold text-red-500 leading-tight"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              FIRST IMPRESSIONS
              <br />
              <span className="text-red-500">START HERE"</span>
            </h2>

            <p
              className="text-gray-600 text-lg leading-relaxed max-w-md"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Leave a lasting impression with high-quality, professionally designed
              business cards. Choose from a variety of textures, finishes and styles to
              showcase your brand with elegance and confidence.
            </p>

            <div data-aos="fade-right" data-aos-delay="300">
              <button onClick={handleContactNow} className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Conatct Now
              </button>
            </div>
          </div>

          {/* Right Image - Business Card Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={hero}
                alt="Business Card Mockup"
                className="w-full max-w-xl lg:max-w-2xl object-cover rounded-lg transform hover:scale-105 transition-all duration-300"
                data-aos="fade-left"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCardShowcase;