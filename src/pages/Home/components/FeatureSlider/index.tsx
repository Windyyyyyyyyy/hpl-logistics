// import { useState } from 'react';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import { Link } from 'react-router';
// import Aeroplane from '../../../../assets/images/aeroplane.svg';
// import Ship from '../../../../assets/images/ship.svg';
// import DeliveryTruck from '../../../../assets/images/delivery-truck.svg';

// const FeatureSlider = () => {
//   const services = [
//     {
//       image: Aeroplane,
//       title: 'Air Cargo',
//       description:
//         "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
//     },
//     {
//       image: Ship,
//       title: 'Air Cargo',
//       description:
//         "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
//     },
//     {
//       image: DeliveryTruck,
//       title: 'Air Cargo',
//       description:
//         "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
//     },
//     {
//       image: Aeroplane,
//       title: 'Air Cargo',
//       description:
//         "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
//     },
//     {
//       image: Aeroplane,
//       title: 'Air Cargo',
//       description:
//         "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
//     },
//     {
//       image: Ship,
//       title: 'Air Cargo',
//       description:
//         "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const itemWidth = 392;
//   const visibleItems = 3;
//   const totalDots = Math.ceil(services.length / visibleItems);

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev === services.length - visibleItems ? 0 : prev + 1));
//   };

//   const handlePrevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? services.length - visibleItems : prev - 1));
//   };

//   return (
//     <div className="pb-[100px]">
//       <div className="mx-auto w-[1175px]">
//         <div className="relative z-10 mt-[-60px]">
//           <div className="overflow-hidden transition-all">
//             <div
//               className="flex translate-y-[0px] transition-all duration-[1.5s]"
//               style={{
//                 transform: `translateX(-${currentSlide * itemWidth}px)`,
//                 width: `${services.length * itemWidth}px`,
//               }}
//             >
//               {services.map((service, index) => (
//                 <div key={index} style={{ width: `${itemWidth}px` }}>
//                   <div className="px-[18px]">
//                     <div className="mb-[15px] flex flex-col items-center bg-white px-[28px] pb-[30px] pt-[20px] shadow-featured-card">
//                       <img className="h-[47px]" src={service.image} />
//                       <Link to="/">
//                         <h4 className="mb-[22px] mt-[15px] px-0 text-h3 font-bold uppercase text-custom-blue">
//                           {service.title}
//                         </h4>
//                       </Link>
//                       <p className="text-center text-[15px] font-normal leading-[26px] text-[#434345]">
//                         {service.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//            </div>
//           <div className="btnGroup">
//             <div
//               className="absolute left-[-60px] top-1/2 flex h-[42px] w-[42px] translate-y-[-50%] transform cursor-pointer items-center justify-center bg-[#f2f5fb] leading-[40px] transition-all duration-300 ease-linear hover:bg-custom-blue hover:text-white"
//               onClick={handlePrevSlide}
//             >
//               <FaAngleLeft size={15} />
//             </div>
//             <div
//               className="absolute right-[-60px] top-1/2 flex h-[42px] w-[42px] translate-y-[-50%] transform cursor-pointer items-center justify-center bg-[#f2f5fb] leading-[40px] transition-all duration-300 ease-linear hover:bg-custom-blue hover:text-white"
//               onClick={handleNextSlide}
//             >
//               <FaAngleRight size={15} />
//             </div>
//           </div>
//           <div className="absolute left-1/2 mt-[20px] flex -translate-x-1/2 transform">
//             {[...Array(totalDots)].map((_, index) => (
//               <div
//                 key={index}
//                 onClick={() => setCurrentSlide(index * visibleItems)}
//                 className={`mr-[10px] inline-block h-[10px] w-[10px] cursor-pointer rounded-[50%] bg-black ${
//                   Math.floor(currentSlide / visibleItems) === index
//                     ? 'bg-custom-blue'
//                     : 'bg-gray-300'
//                 }`}
//               >
//                 <span></span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSlider;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import Aeroplane from '../../../../assets/images/aeroplane.svg';
import Ship from '../../../../assets/images/ship.svg';
import DeliveryTruck from '../../../../assets/images/delivery-truck.svg';

const FeatureSlider = () => {
  const services = [
    {
      image: Aeroplane,
      title: 'Air Cargo',
      description:
        "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
    },
    {
      image: Ship,
      title: 'Air Cargo',
      description:
        "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
    },
    {
      image: DeliveryTruck,
      title: 'Air Cargo',
      description:
        "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
    },
    {
      image: Aeroplane,
      title: 'Air Cargo',
      description:
        "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
    },
    {
      image: Aeroplane,
      title: 'Air Cargo',
      description:
        "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
    },
    {
      image: Ship,
      title: 'Air Cargo',
      description:
        "Air freight is often used for high value and low volume shipments. It's the fastest way to ship goods internationally.",
    },
  ];

  return (
    <div className="pb-8 md:pb-16 lg:pb-24">
      <div className="mx-auto px-4 md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <div className="relative z-10 -mt-[60px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            //   bulletClass:
            //     'swiper-pagination-bullet bg-gray-200 inline-block rounded-full cursor-pointer',
            //   bulletActiveClass: 'bg-custom-blue',
            // }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="px-4"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="h-full">
                  <div className="mb-4 flex h-full flex-col items-center bg-white px-6 pb-8 pt-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
                    <img className="h-12 object-contain" src={service.image} alt={service.title} />
                    <a href="#" className="group">
                      <h4 className="mb-5 mt-4 text-xl font-bold uppercase text-custom-blue transition-colors duration-300 group-hover:text-blue-700">
                        {service.title}
                      </h4>
                    </a>
                    <p className="text-center text-sm leading-relaxed text-gray-700">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
          </Swiper>
          <div className="btnGrp">
            <button className="swiper-button-prev absolute top-[45%] z-10 -translate-y-1/2 transform rounded bg-[#f2f5fb] p-3 text-gray-600 transition-all hover:bg-custom-blue hover:text-white max-sm:hidden sm:left-[-20px] lg:left-[-60px]">
              ←
            </button>
            <button className="swiper-button-next absolute top-[45%] z-10 -translate-y-1/2 transform rounded bg-[#f2f5fb] p-3 text-gray-600 transition-all hover:bg-custom-blue hover:text-white max-sm:hidden sm:right-[-20px] lg:right-[-60px]">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;
