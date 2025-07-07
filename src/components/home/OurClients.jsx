import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OurClientsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#ED1C24] py-10 px-4 text-center">
      <h2 
        className="text-white text-2xl md:text-4xl font-bold mb-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        OUR VALUABLE CLIENTS
      </h2>
      <p 
        className="text-white text-sm md:text-lg font-light"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        WE DON'T JUST DELIVER PRINTS, WE BUILD LASTING PARTNERSHIP
      </p>
    </div>
  );
}