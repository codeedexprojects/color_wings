import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-red-500 text-white p-8 md:p-16 min-h-screen overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 
            className="text-6xl md:text-8xl font-bold mb-4"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            ABOUT
          </h1>
          <h1 
            className="text-6xl md:text-8xl font-bold mb-8"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            US
          </h1>
        </div>

        {/* Mission Statement */}
        <div className="mb-8">
          <h2 
            className="text-xl md:text-2xl font-semibold mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Your Brand, Our Mission — Print with Purpose
          </h2>
          <p 
            className="text-base md:text-lg leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            At ColorWing Ads, we specialize in complete printing and advertising solutions — from business cards, 
            T-shirts, mugs, and packaging to banners, stickers, displays, and custom corporate gifts. Whether you're a 
            startup, a growing business, or an established brand, we help you stand out with creative designs, premium 
            quality, and on-time delivery — always.
          </p>
          <p 
            className="text-base md:text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Driven by a passion for precision and backed by experience, we turn your ideas into powerful visuals that 
            speak louder than words. Because at ColorWing, we don't just print — we bring your brand to life.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12">
          <h2 
            className="text-2xl md:text-3xl font-bold mb-8"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            Why Choose Us
          </h2>
          <div className="space-y-4">
            <div 
              className="flex items-start"
              data-aos="fade-left"
              data-aos-delay="700"
            >
              <span className="text-xl mr-4 mt-1">▷</span>
              <span className="text-base md:text-lg">All-in-One Printing & Advertising Services</span>
            </div>
            <div 
              className="flex items-start"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <span className="text-xl mr-4 mt-1">▷</span>
              <span className="text-base md:text-lg">Creative Design + Quality Output</span>
            </div>
            <div 
              className="flex items-start"
              data-aos="fade-left"
              data-aos-delay="900"
            >
              <span className="text-xl mr-4 mt-1">▷</span>
              <span className="text-base md:text-lg">Fast Turnaround Time</span>
            </div>
            <div 
              className="flex items-start"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <span className="text-xl mr-4 mt-1">▷</span>
              <span className="text-base md:text-lg">Personalized Attention to Every Project</span>
            </div>
            <div 
              className="flex items-start"
              data-aos="fade-left"
              data-aos-delay="1100"
            >
              <span className="text-xl mr-4 mt-1">▷</span>
              <span className="text-base md:text-lg">Affordable Solutions for All Business Sizes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}