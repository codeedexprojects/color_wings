import React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import image from '../../assets/bgcolor.jpg'
import image1 from '../../assets/Carousels/image1.jpg'
import image2 from '../../assets/Carousels/image2.jpg'
import image3 from '../../assets/Carousels/image3.jpg'
import image4 from '../../assets/Carousels/image4.jpg'
import image5 from '../../assets/Carousels/image5.jpg'
import image6 from '../../assets/Carousels/image6.jpg'
import image7 from '../../assets/Carousels/image7.jpg'
import image8 from '../../assets/Carousels/image8.jpg'
import image9 from '../../assets/Carousels/image9.jpg'
import image10 from '../../assets/Carousels/image10.jpg'
import image11 from '../../assets/Carousels/image11.jpg'


const OfficeFlowerGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(2)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const flowers = [
    {
      id: 1,
      src: image1,

    },
    {
      id: 2,
      src: image2,
    },
    {
      id: 3,
      src: image3,
    },
    {
      id: 4,
      src: image4,
    },
    {
      id: 5,
      src: image5,
    },
    {
      id: 6,
      src: image6,
    },
    {
      id: 7,
      src: image7,
    },
    {
      id: 8,
      src: image8,
    },
    {
      id: 9,
      src: image9,
    },
    {
      id: 10,
      src: image9,
    },
    {
      id: 11,
      src: image9,
    },
  ]

  const goToSlide = (index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % flowers.length
    goToSlide(nextIndex)
  }

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + flowers.length) % flowers.length
    goToSlide(prevIndex)
  }

  const getCardStyle = (index) => {
    const diff = index - currentIndex
    const totalCards = flowers.length

    // Normalize diff to handle circular array
    const normalizedDiff = diff > totalCards / 2 ? diff - totalCards : diff < -totalCards / 2 ? diff + totalCards : diff

    const isCenter = normalizedDiff === 0
    const isAdjacent = Math.abs(normalizedDiff) === 1
    const isSecondLevel = Math.abs(normalizedDiff) === 2

    if (isCenter) {
      return {
        transform: "translateX(-50%) translateZ(0px) rotateY(0deg) scale(1.1)",
        left: "50%",
        opacity: 1,
        zIndex: 10,
        filter: "blur(0px) brightness(1)",
      }
    } else if (isAdjacent) {
      const side = normalizedDiff > 0 ? 1 : -1
      return {
        transform: `translateX(${side * 140 - 50}%) translateZ(-150px) rotateY(${-side * 35}deg) scale(0.85)`,
        left: "50%",
        opacity: 0.8,
        zIndex: 5,
        filter: "blur(1px) brightness(0.9)",
      }
    } else if (isSecondLevel) {
      const side = normalizedDiff > 0 ? 1 : -1
      return {
        transform: `translateX(${side * 280 - 50}%) translateZ(-300px) rotateY(${-side * 55}deg) scale(0.7)`,
        left: "50%",
        opacity: 0.5,
        zIndex: 2,
        filter: "blur(2px) brightness(0.7)",
      }
    } else {
      // Hidden cards
      const side = normalizedDiff > 0 ? 1 : -1
      return {
        transform: `translateX(${side * 400 - 50}%) translateZ(-450px) rotateY(${-side * 75}deg) scale(0.5)`,
        left: "50%",
        opacity: 0,
        zIndex: 1,
        filter: "blur(3px) brightness(0.5)",
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide()
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [currentIndex, isTransitioning])

  return (
    <div className="relative">
      {/* Hero Section with Offic Image */}
      <div className="relative h-screen w-full flex flex-col">
        <img
          src={image}
          alt="Colorwing Advertising LLC Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
      </div>


      <div className="relative  py-5 overflow-hidden"
        style={{ bottom: "100px", top: "00px" }}>
        <div className="relative w-full max-w-6xl mx-auto px-4">
          {/* 3D Carousel Container */}
          <div className="relative h-80 md:h-96 flex items-center justify-center" style={{ perspective: "1000px" }}>
            <div className="relative w-full h-full preserve-3d">
              {flowers.map((flower, index) => (
                <div
                  key={flower.id}
                  className="absolute w-64 h-80 md:w-72 md:h-80 cursor-pointer transition-all duration-700 ease-out"
                  style={getCardStyle(index)}
                  onClick={() => goToSlide(index)}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white transform-gpu">
                    {/* Image Section */}
                    <div className="relative h-4/4 overflow-hidden">
                      <img
                        src={flower.src || "/placeholder.svg"}
                        alt={flower.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    {/* Card glow effect for center card */}
                    {currentIndex === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 rounded-2xl pointer-events-none"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/95 hover:bg-white rounded-full p-2 shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-white/20"
            >
              <ChevronLeft className="w-4 h-4 text-gray-800" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/95 hover:bg-white rounded-full p-2 shadow-2xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-white/20"
            >
              <ChevronRight className="w-4 h-4 text-gray-800" />
            </button>

          </div>

          {/* Enhanced Pagination */}
          <div className="flex justify-center items-center space-x-3 mt-0"
          >
            {flowers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`transition-all duration-300 rounded-full border-2 ${index === currentIndex
                  ? "w-12 h-4 bg-red-500 border-red-500 shadow-lg shadow-red-500/50"
                  : "w-4 h-4 bg-gray-400 border-gray-400 hover:bg-gray-600 hover:border-gray-600"
                  } disabled:cursor-not-allowed`}
              />
            ))}
          </div>


        </div>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .transform-gpu {
          transform: translateZ(0);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default OfficeFlowerGallery
