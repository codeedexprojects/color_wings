import React, { useEffect } from 'react';
import image1 from '../../assets/ExpoCards/image1.jpg';
import image2 from '../../assets/ExpoCards/image2.png';
import image3 from '../../assets/ExpoCards/image3.jpg';
import image4 from '../../assets/ExpoCards/image4.jpg';
import image5 from '../../assets/ExpoCards/image5.jpg';
import image6 from '../../assets/ExpoCards/image6.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ExpoCardsSection() {
    const cardData = [
        { src: image1 },
        { src: image2 },
        { src: image3 },
        { src: image4 },
        { src: image5 },
        { src: image6 },
    ];

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className="bg-white pt-4 pb-16 px-4 md:px-20">
            {/* Heading Section */}
            <div 
                className="text-center mb-10 border-red-600 pt-4"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="text-xl md:text-2xl font-semibold text-red-600 tracking-wide leading-snug">
                    EXHIBITION & EVENTS STALL<br />
                    
                </h2>
            </div>

            {/* Cards Grid with Enhanced Hover Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        data-aos-duration="600"
                    >
                        <div className="aspect-square w-full relative">
                            <img
                                src={card.src}
                                alt={`PU Leather Product ${index + 1}`}
                                className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Aspect Ratio Helper */}
            <style jsx>{`
                .aspect-square {
                    position: relative;
                    padding-bottom: 100%;
                }
                .aspect-square > img {
                    object-position: center;
                }
            `}</style>
        </div>
    );
}