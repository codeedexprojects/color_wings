import React from 'react';
import image1 from '../../assets/AdvertisingCards/image2.png'
import image2 from '../../assets/AdvertisingCards/image4.png'
import image3 from '../../assets/AdvertisingCards/image6.png'
import image4 from '../../assets/AdvertisingCards/image8.png'
import image5 from '../../assets/BusinessCards/image1.png'
import image6 from '../../assets/BusinessCards/image3.png'
import image7 from '../../assets/BusinessCards/image5.png'
import image8 from '../../assets/BusinessCards/image7.png'
import image9 from '../../assets/BusinessCards/image9.png'
import image10 from '../../assets/CrystalCards/image2.png'
import image11 from '../../assets/CrystalCards/image4.png'
import image12 from '../../assets/CrystalCards/image6.png'
import backgroundImage from '../../assets/bgcolor.jpg' // Add your background image import


const CurvedStripGallery = () => {
  const images = [
    image1, image2, image3, image4,
    image5, image6, image7, image8,
    image9, image10, image11, image12
  ];

  const handleOrderNow = () => {
    const phoneNumber = '971565037735';
    const message = `Hi! I would like to order ${banners[currentBanner].title.toLowerCase()}. Can you please help me with the options and pricing?`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div
      className="w-full py-10 flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Content wrapper with higher z-index */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Top heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            FIRST IMPRESSIONS START HERE
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-md">
            Leave a lasting impression with our stunning business cards. Explore our collection and find the perfect design that reflects your brand's identity.
          </p>
        </div>

        {/* Gallery container with curved ovals */}
        <div className="w-full h-80 flex flex-col justify-center relative overflow-hidden">
          {/* Top curved oval */}
          <div
            className="absolute top-0 h-10 w-full bg-red-500 bg-opacity-80"
            style={{
              borderBottomLeftRadius: '70%',
              borderBottomRightRadius: '70%'
            }}
          />

          {/* Scrollable strip container */}
          <div className="w-full min-w-[1200px] h-75 flex flex-nowrap items-start overflow-x-auto">
            {images.map((imageUrl, index) => (
              <div
                key={index}
                className="h-75 w-75 min-w-[300px] mr-2.5 bg-cover shadow-lg"
                style={{
                  backgroundImage: `url(${imageUrl})`
                }}
              />
            ))}
          </div>

          {/* Bottom curved oval */}
          <div
            className="absolute bottom-0 h-12 w-full bg-red-500 bg-opacity-80"
            style={{
              borderTopLeftRadius: '50%',
              borderTopRightRadius: '50%'
            }}
          />
        </div>

        {/* Get Started button */}
        <button onClick={handleOrderNow} className="cursor-pointer mt-12 px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default CurvedStripGallery;