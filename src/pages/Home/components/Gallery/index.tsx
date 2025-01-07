// import { useState } from 'react';
// import { Link } from 'react-router';

// const Gallery = () => {
//   const imageUrlLst = [
//     '../../../../assets/images/aeroplane',
//     '../../../../assets/images/aeroplane',
//     '../../../../assets/images/aeroplane',
//     '../../../../assets/images/aeroplane',
//     '../../../../assets/images/aeroplane',
//     '../../../../assets/images/aeroplane',
//   ];

//   const faqLst = [
//     {
//       question: 'What does FOB and EXW mean?',
//       answer:
//         'FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier’s place to the final destination address.',
//     },
//     {
//       question: 'What does FOB and EXW mean?',
//       answer:
//         'FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier’s place to the final destination address.',
//     },
//     {
//       question: 'What does FOB and EXW mean?',
//       answer:
//         'FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier’s place to the final destination address.',
//     },
//     {
//       question: 'What does FOB and EXW mean?',
//       answer:
//         'FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier’s place to the final destination address.',
//     },
//   ];

//   const [openAnswer, setOpenAnswer] = useState<number | null>(null);

//   const toggleCollapse = (index: number) => {
//     setOpenAnswer(openAnswer === index ? null : index);
//   };

//   return (
//     <section className="px-0 py-[100px]">
//       <div className="mx-auto flex w-[1170px] px-[15px]">
//         <div className="w-[59%]">
//           <div className="pr-[15px]">
//             <h3 className="text-text-grey pb-[48px] text-[30px] font-bold uppercase">Gallery</h3>
//             <div className="flex flex-wrap">
//               {imageUrlLst.map((image, index) => (
//                 <div key={index} className="aspect-[13/9] w-[calc(100%/3)] bg-gray-200">
//                   <Link to="/">
//                     <img src={image} alt="Gallery Image" />
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="w-[40%]">
//           <div className="pl-[15px]">
//             <h3 className="text-text-grey pb-[48px] text-[30px] font-bold uppercase">FAQ</h3>
//             <div className="-mt-[12px]">
//               {faqLst.map((faq, index) => (
//                 <div key={index} className="border-b-[1px]">
//                   <div
//                     onClick={() => toggleCollapse(index)}
//                     className="cursor-pointer text-[15px] font-bold leading-[48px]"
//                   >
//                     <h5 className="text-black">{faq.question}</h5>
//                   </div>
//                   <div
//                     className={`overflow-hidden transition-all duration-1000 ${openAnswer === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
//                   >
//                     <p className="pb-[8px] text-justify text-[15px] font-normal leading-[26px] text-black">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import { useState } from 'react';
import { Link } from 'react-router';

const Gallery = () => {
  const imageUrlLst = [
    '/api/placeholder/400/280', // Using placeholder images for demonstration
    '/api/placeholder/400/280',
    '/api/placeholder/400/280',
    '/api/placeholder/400/280',
    '/api/placeholder/400/280',
    '/api/placeholder/400/280',
  ];

  const faqLst = [
    {
      question: 'What does FOB and EXW mean?',
      answer: `FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier's place to the final destination address.`,
    },
    {
      question: 'What does FOB and EXW mean?',
      answer: `FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier's place to the final destination address.`,
    },
    {
      question: 'What does FOB and EXW mean?',
      answer: `FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier's place to the final destination address.`,
    },
    {
      question: 'What does FOB and EXW mean?',
      answer: `FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier's place to the final destination address.`,
    },
  ];

  const [openAnswer, setOpenAnswer] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    setOpenAnswer(openAnswer === index ? null : index);
  };

  return (
    <section className="py-[100px]">
      <div className="mx-auto px-4 md:w-[750px] lg:w-[970px] lg:px-6 xl:w-[1170px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Gallery Section */}
          <div className="w-full lg:w-[60%]">
            <h3 className="mb-6 text-2xl font-bold uppercase text-gray-800 md:mb-12 md:text-3xl">
              Gallery
            </h3>
            <div className="flex flex-wrap">
              {imageUrlLst.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[13/9] w-full overflow-hidden bg-gray-200 3sm:w-1/2 md:w-1/3"
                >
                  <Link to="/" className="block h-full w-full">
                    <img
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="w-full lg:w-[40%]">
            <h3 className="mb-6 text-2xl font-bold uppercase text-gray-800 md:mb-12 md:text-3xl">
              FAQ
            </h3>
            <div className="space-y-2">
              {faqLst.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleCollapse(index)}
                    className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-sm font-bold md:text-base"
                  >
                    <h5 className="pr-4">{faq.question}</h5>
                    <span
                      className={`transform transition-transform duration-300 ${
                        openAnswer === index ? 'rotate-180' : ''
                      }`}
                    >
                      ↓
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAnswer === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="pb-4 text-justify text-sm leading-relaxed text-gray-700 md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
