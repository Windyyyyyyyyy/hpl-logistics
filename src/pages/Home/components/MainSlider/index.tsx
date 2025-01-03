import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router';

const MainSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [prevSlide, setPrevSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: '/src/assets/images/slider-1.jpg',
      title: 'Reliable and flexible Logistics',
      heading: 'PERSONALIZED CARGO SERVICES IN WORLDWIDE COMMERCE',
      buttonText: 'KNOW MORE',
    },
    {
      image: '/src/assets/images/slider-1.jpg',
      title: 'Global Shipping Solutions',
      heading: 'EFFICIENT MARITIME TRANSPORTATION',
      buttonText: 'LEARN MORE',
    },
    {
      image: 'src/assets/images/slider-1.jpg',
      title: 'Smart Supply Chain',
      heading: 'INNOVATIVE LOGISTICS MANAGEMENT',
      buttonText: 'DISCOVER MORE',
    },
  ];

  const handleSlideChange = (next: number) => {
    // setPrevSlide(currentSlide);
    setCurrentSlide(next);
    setIsAnimating(true);
  };

  const nextSlideBtn = () => {
    const next = (currentSlide + 1) % slides.length;
    handleSlideChange(next);
  };

  const prevSlideBtn = () => {
    const next = (currentSlide - 1 + slides.length) % slides.length;
    handleSlideChange(next);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="mx-[150px] flex h-full flex-col items-start justify-center overflow-hidden px-8">
              {/* Button Next/Prev */}
              <div className="z-10 mb-4 space-x-2">
                <button
                  onClick={prevSlideBtn}
                  className="hover:bg-custom-blue rounded bg-white p-3 transition-colors hover:text-white"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlideBtn}
                  className="hover:bg-custom-blue rounded bg-white p-3 transition-colors hover:text-white"
                  aria-label="Next slide"
                >
                  <FaChevronRight size={20} />
                </button>
              </div>
              {/* Title Animation */}
              <div className="mb-4 overflow-hidden">
                <h3
                  className={`transform text-xl text-gray-300 transition-all duration-[500ms] ${
                    currentSlide === index && !isAnimating
                      ? 'translate-y-0 opacity-100'
                      : currentSlide === index
                        ? '-translate-y-full opacity-0'
                        : 'translate-y-full opacity-0'
                  }`}
                >
                  {slide.title}
                </h3>
              </div>

              {/* Heading Animation */}
              <div className="mb-8 overflow-hidden">
                <h2
                  className={`max-w-3xl transform text-xl font-bold text-white transition-all duration-[500ms] md:text-5xl ${
                    currentSlide === index && !isAnimating
                      ? 'translate-y-0 opacity-100'
                      : currentSlide === index
                        ? '-translate-y-full opacity-0'
                        : 'translate-y-full opacity-0'
                  }`}
                >
                  {slide.heading}
                </h2>
              </div>

              {/* Button Animation */}
              <div className="overflow-hidden">
                <Link
                  to="/contact"
                  className={`inline-block transform rounded bg-green-500 px-8 py-2 text-white transition-all duration-[500ms] hover:bg-green-600 ${
                    currentSlide === index && !isAnimating
                      ? 'translate-y-0 opacity-100'
                      : currentSlide === index
                        ? '-translate-y-full opacity-0'
                        : 'translate-y-full opacity-0'
                  }`}
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSlider;
