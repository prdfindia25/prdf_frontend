import React, { useState, useEffect, useRef } from "react";
import ImageInfoCard from "./ImageInfoCard";

const ImageCarousel = ({ images, autoSlideInterval = 5000 }) => {
  // Start at index 1 (first real slide, after duplicate last slide)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const intervalRef = useRef(null);

  // Create infinite loop: [last, ...all, first]
  const infiniteSlides = [
    images[images.length - 1], // Duplicate last slide at start
    ...images,
    images[0], // Duplicate first slide at end
  ];

  useEffect(() => {
    // Auto-slide functionality
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= infiniteSlides.length - 1) {
          // If we're at the duplicate last slide, jump to real first slide
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(1);
            setTimeout(() => setIsTransitioning(true), 50);
          }, 700);
          return nextIndex;
        }
        return nextIndex;
      });
    }, autoSlideInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length, autoSlideInterval, infiniteSlides.length]);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // +1 because of duplicate at start
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex <= 0) {
        // If we're at the duplicate first slide, jump to real last slide
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(infiniteSlides.length - 2);
          setTimeout(() => setIsTransitioning(true), 50);
        }, 700);
        return 0;
      }
      return newIndex;
    });
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= infiniteSlides.length - 1) {
        // If we're at the duplicate last slide, jump to real first slide
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(1);
          setTimeout(() => setIsTransitioning(true), 50);
        }, 700);
        return newIndex;
      }
      return newIndex;
    });
  };

  // Get the real index for dots (0 to images.length - 1)
  const getRealIndex = () => {
    if (currentIndex === 0) return images.length - 1;
    if (currentIndex === infiniteSlides.length - 1) return 0;
    return currentIndex - 1;
  };

  const realIndex = getRealIndex();

  return (
    <div className="relative w-full overflow-hidden">
      {/* ImageInfoCard Display with Infinite Sliding Animation */}
      <div
        className="flex"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 700ms ease-in-out" : "none",
        }}
      >
        {infiniteSlides.map((image, index) => (
          <div
            key={`${index}-${image.src || image.image}`}
            className="w-full flex-shrink-0"
          >
            <ImageInfoCard
              image={image.src || image.image}
              title={image.title || image.alt}
              description={image.description || image.caption || ""}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90  text-prdf-primary p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        aria-label="Previous image"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 text-prdf-primary p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        aria-label="Next image"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === realIndex
                ? "bg-prdf-primary"
                : "bg-prdf-secondary bg-opacity-70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
