// import { SwiperSlide, Swiper } from 'swiper/react';

// const ClientLogo = () => {
//   const logoLst = [
//     '../../../../assets/images/logo',
//     '../../../../assets/images/logo',
//     '../../../../assets/images/logo',
//     '../../../../assets/images/logo',
//     '../../../../assets/images/logo',
//     '../../../../assets/images/logo',
//     '../../../../assets/images/logo',
//     '../../../../assets/images/logo',
//     '../../../../assets/images/logo',
//   ];

//   // const [currentSlide, setCurrentSlide] = useState<number>(0);
//   // const itemWidth = 212;
//   // const visibleItems = 5;

//   // const handleNext = () => {
//   //   setCurrentSlide((prev) => (prev === logoLst.length - visibleItems ? 0 : prev + 1));
//   // };

//   // useEffect(() => {
//   //   const autoSlide = setInterval(handleNext, 3000);
//   //   return () => clearInterval(autoSlide);
//   // });

//   return (
//     <section className="bg-custom-grey">
//       <div className="mx-auto px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
//         <div className="overflow-hidden">
//           <div className="w-[3000px]">
//             <Swiper autoplay={{ delay: 1500, disableOnInteraction: false }} centeredSlides={true}>
//               {logoLst.map((logo, index) => (
//                 <div key={index} className="">
//                   <SwiperSlide>
//                     <img src={logo} alt="logo" />
//                   </SwiperSlide>
//                 </div>
//               ))}
//             </Swiper>
//           </div>
//           {/* <div
//             className="flex translate-y-[0px] transition-all duration-[1.5s]"
//             style={{
//               width: `${itemWidth * logoLst.length}px`,
//               transform: `translateX(-${currentSlide * itemWidth}px)`,
//             }}
//           >
//             {logoLst.map((logo, index) => (
//               <div key={index} className="mr-[20px]">
//                 <div className="aspect-[11/9]" style={{ width: `${itemWidth}px` }}>
//                   <img src={logo} alt="logo" />
//                 </div>
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientLogo;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

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

  return (
    <section className="bg-custom-grey">
      <div className="mx-auto px-[15px] md:w-[768px] lg:w-[970px] xl:w-[1170px]">
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 400px
              350: {
                slidesPerView: 2,
              },
              // when window width is >= 640px
              600: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 4,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 5,
              },
            }}
            className="w-full"
          >
            {logoLst.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[12/9] w-full">
                  <img src={logo} alt={`Client logo ${index + 1}`} className="h-full w-full" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientLogo;
