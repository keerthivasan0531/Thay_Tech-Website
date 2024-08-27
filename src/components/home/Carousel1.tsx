import React, { useState, useEffect } from 'react';
import './Carousel1.css';

const Carousel1: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateDirection, setAnimateDirection] = useState('default');

  const slides = [
    {
      id: 1,
      src: 'public/img1.avif',
      alt: 'Slide 1',
      heading: 'Welcome to Our Website',
      subContent: 'Discover amazing features and content',
    },
    {
      id: 2,
      src: 'public/img2.avif',
      alt: 'Slide 2',
      heading: 'Explore Our Services',
      subContent: 'We offer a wide range of solutions',
    },
    {
      id: 3,
      src: 'public/img3.avif',
      alt: 'Slide 3',
      heading: 'Join Us Today',
      subContent: 'Be part of an exciting community',
    },
    {
      id: 4,
      src: 'public/img4.avif',
      alt: 'Slide 4',
      heading: 'Innovative Solutions',
      subContent: 'Tailored solutions for your business',
    },
    {
      id: 5,
      src: 'public/img5.avif',
      alt: 'Slide 5',
      heading: 'Get Started Now',
      subContent: 'Take your business to the next level',
    },
  ];

  const autoScroll = true;
  const intervalTime = 3000; // 3 seconds

  useEffect(() => {
    let slideInterval: number;

    if (autoScroll) {
      const startAutoScroll = () => {
        slideInterval = window.setInterval(() => {
          setAnimateDirection('default');
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, intervalTime);
      };

      startAutoScroll();

      return () => clearInterval(slideInterval);
    }
  }, [currentIndex, autoScroll, slides.length]);

  const goToSlide = (index: number, direction: string) => {
    setAnimateDirection(direction);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setAnimateDirection('right-to-left');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setAnimateDirection('left-to-right');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="carousel-slides flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide relative w-full h-full flex items-center justify-center"
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay Content with Animation */}
            <div
              className={`absolute text-center text-white px-4 carousel-text ${
                animateDirection === 'default'
                  ? 'animate-right-to-left'
                  : animateDirection === 'left-to-right'
                  ? 'animate-left-to-right'
                  : 'animate-right-to-left'
              }`}
            >
              <h2 className="carousel-heading text-4xl font-bold mb-2">
                {slide.heading}
              </h2>
              <p className="carousel-subtext text-lg">{slide.subContent}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow with Circle */}
      <div className="carousel-arrow-container left-4 bottom-4">
        <button
          className="carousel-prev bg-gray-700 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          <div className="arrow-circle">
            <span>&#10094;</span>
          </div>
        </button>
      </div>

      {/* Right Arrow with Circle */}
      <div className="carousel-arrow-container right-4 bottom-4">
        <button
          className="carousel-next bg-gray-700 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          <div className="arrow-circle">
            <span>&#10095;</span>
          </div>
        </button>
      </div>

      {/* Circle Indicators */}
      <div className="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-[#4dabce] w-7 h-3'
                : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index, 'default')}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel1;
