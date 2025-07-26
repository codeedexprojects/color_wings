import React, { useEffect, useState } from 'react';
import image1 from '../../assets/CrystalCards/image1.png';
import image2 from '../../assets/CrystalCards/image2.png';
import image3 from '../../assets/CrystalCards/image3.png';
import image4 from '../../assets/CrystalCards/image4.png';
import image5 from '../../assets/CrystalCards/image5.png';
import image6 from '../../assets/CrystalCards/image6.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function CrystalCardsSection() {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const displayedCards = isMobile && !showAll ? cardData.slice(0, 3) : cardData;

    const handleViewMore = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="bg-white pt-4 pb-16 px-4 md:px-20">
            {/* Heading Section */}
            <div 
                className="text-center mb-10 border-red-600 pt-4"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="text-xl md:text-2xl font-semibold text-red-600 tracking-wide leading-snug">
                  CUSTOMISED CRYSTAL AWARDS | MEMENTOS
                </h2>
            </div>

            {/* Cards Grid with Zoom Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {displayedCards.map((card, index) => (
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
                                alt={`Crystal Award ${index + 1}`}
                                className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* View More/Less Button (Mobile Only) */}
            {isMobile && cardData.length > 3 && (
                <div className="text-center mt-8">
                    <button
                        onClick={handleViewMore}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        {showAll ? 'View Less' : 'View More'}
                    </button>
                </div>
            )}

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