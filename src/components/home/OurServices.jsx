import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        <div>
          <h2 
            className="text-5xl font-extrabold text-red-600 leading-tight"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            OUR <br /> SERVICES<span className="text-red-600">.</span>
          </h2>
        </div>

        <div 
          className="max-w-2xl text-red-600 text-lg leading-relaxed"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <p>
            <strong>Printing & Advertising Solutions, All in One Place</strong><br />
            At ColorWing Ads, we offer a complete range of creative, printing, and branding services tailored to help your business stand out. From basic print essentials to full-fledged promotional materials, we bring your ideas to life with quality, speed, and care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;