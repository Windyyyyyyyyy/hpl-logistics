import { useEffect, useState } from 'react';

const ClientLogo = () => {
  const logoLst = [
    '../../../../assets/images/logo',
    '../../../../assets/images/logo',
    '../../../../assets/images/logo',
    '../../../../assets/images/logo',
    '../../../../assets/images/logo',
    '../../../../assets/images/logo',
    '../../../../assets/images/logo',
    '../../../../assets/images/logo',
    '../../../../assets/images/logo',
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const itemWidth = 212;
  const visibleItems = 5;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === logoLst.length - visibleItems ? 0 : prev + 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(handleNext, 3000);
    return () => clearInterval(autoSlide);
  });

  return (
    <section className="bg-custom-grey">
      <div className="mx-auto w-[1170px] px-[15px]">
        <div className="overflow-hidden">
          <div
            className="flex translate-y-[0px] transition-all duration-[1.5s]"
            style={{
              width: `${itemWidth * logoLst.length}px`,
              transform: `translateX(-${currentSlide * itemWidth}px)`,
            }}
          >
            {logoLst.map((logo, index) => (
              <div key={index} className="mr-[20px]">
                <div className="aspect-[11/9]" style={{ width: `${itemWidth}px` }}>
                  <img src={logo} alt="logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogo;
