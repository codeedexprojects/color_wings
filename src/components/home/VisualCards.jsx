import React, { useEffect, useState } from 'react';
import mockup from '../../assets/bscard.png';
import image1 from '../../assets/VisualCards/image1.png';
import image2 from '../../assets/VisualCards/image2.png';
import image3 from '../../assets/VisualCards/image3.png';
import image4 from '../../assets/VisualCards/image4.png';
import image5 from '../../assets/VisualCards/image5.png';
import image6 from '../../assets/VisualCards/image6.png';
import image7 from '../../assets/VisualCards/image7.png';
import image8 from '../../assets/VisualCards/image8.png';
import image9 from '../../assets/VisualCards/image9.png';
import image10 from '../../assets/VisualCards/image10.png';
import image11 from '../../assets/VisualCards/image11.png';
import image12 from '../../assets/VisualCards/image12.png';
import image13 from '../../assets/VisualCards/image13.png';
import image14 from '../../assets/VisualCards/image14.png';
import image15 from '../../assets/VisualCards/image15.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function VisualCardsSection() {
    const [showAllSection1, setShowAllSection1] = useState(false);
    const [showAllSection2, setShowAllSection2] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const sectionOneCards = [
        { src: image1 },
        { src: image2 },
        { src: image3 },
        { src: image4 },
        { src: image5 },
        { src: image6 },
        { src: image7 },
        { src: image8 },
        { src: image9 },
    ];

    const sectionTwoCards = [
        { src: image10 },
        { src: image11 },
        { src: image12 },
        { src: image13},
        { src: image14 },
        { src: image15 },
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
    const displayedSection1Cards = isMobile && !showAllSection1 ? sectionOneCards.slice(0, 3) : sectionOneCards;
    const displayedSection2Cards = isMobile && !showAllSection2 ? sectionTwoCards.slice(0, 3) : sectionTwoCards;

    const handleViewMoreSection1 = () => {
        setShowAllSection1(!showAllSection1);
    };

    const handleViewMoreSection2 = () => {
        setShowAllSection2(!showAllSection2);
    };

    return (
        <div className="bg-white py-16 px-4 md:px-20">
            {/* Section 1 */}
            <div className="mb-16">
                <div className="text-center mb-10  border-red-600 pt-4"
                data-aos="fade-up"
        data-aos-duration="1000">
                    <h2 className="text-xl md:text-2xl font-semibold text-red-600 tracking-wide leading-snug">
                        HANGING SIGNAGE | LIGHTBOX SIGNAGE | NEON LIGHT SIGN | ACRYLIC SIGN <br />
                        OFFICE ROOM NAMEPLATE | DIRECTIONAL SIGN | 3D WALL SIGNAGE | BACKLIT LETTERS
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {displayedSection1Cards.map((card, index) => (
                        <div
                            key={`section1-${index}`}
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="600"
                        >
                            <img
                                src={card.src}
                                alt={`Section 1 Card ${index + 1}`}
                                className="w-full h-80 object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* View More Button - Only show on mobile for Section 1 */}
                {isMobile && sectionOneCards.length > 3 && (
                    <div className="text-center mt-8">
                        <button
                            onClick={handleViewMoreSection1}
                            className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {showAllSection1 ? 'View Less' : 'View More'}
                        </button>
                    </div>
                )}
            </div>

            {/* Section 2 */}
            <div>
                <div className="text-center mb-10  border-red-600 pt-4"
                 data-aos="fade-up"
        data-aos-duration="1000">
                    <h2 className="text-xl md:text-2xl font-semibold text-red-600 tracking-wide leading-snug">
                        CLEAR / VINYL WALL STICKERS | FROSTED STICKER<br />
                        GLASS WINDOW ADVERTISING | WINDOW WRAPS | ONE WAY VISION
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {displayedSection2Cards.map((card, index) => (
                        <div
                            key={`section2-${index}`}
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                             data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="600"
                        >
                            <img
                                src={card.src}
                                alt={`Section 2 Card ${index + 1}`}
                                className="w-full h-80 object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* View More Button - Only show on mobile for Section 2 */}
                {isMobile && sectionTwoCards.length > 3 && (
                    <div className="text-center mt-8">
                        <button
                            onClick={handleViewMoreSection2}
                            className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {showAllSection2 ? 'View Less' : 'View More'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}