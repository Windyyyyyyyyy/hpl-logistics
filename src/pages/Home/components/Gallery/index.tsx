import { useState } from 'react';
import { Link } from 'react-router';

const Gallery = () => {
  const imageUrlLst = [
    '../../../../assets/images/aeroplane',
    '../../../../assets/images/aeroplane',
    '../../../../assets/images/aeroplane',
    '../../../../assets/images/aeroplane',
    '../../../../assets/images/aeroplane',
    '../../../../assets/images/aeroplane',
  ];

  const faqLst = [
    {
      question: 'What does FOB and EXW mean?',
      answer:
        'FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier’s place to the final destination address.',
    },
    {
      question: 'What does FOB and EXW mean?',
      answer:
        'FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier’s place to the final destination address.',
    },
    {
      question: 'What does FOB and EXW mean?',
      answer:
        'FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier’s place to the final destination address.',
    },
    {
      question: 'What does FOB and EXW mean?',
      answer:
        'FOB means free on board, if you choose the FOB term; supplier needs to cover the local shipping costs before cargo leaves China. EXW means EX WORKS, if you choose EXW; you need to cover all shipment cost from your supplier’s place to the final destination address.',
    },
  ];

  const [openAnswer, setOpenAnswer] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    setOpenAnswer(openAnswer === index ? null : index);
  };

  return (
    <section className="px-0 py-[100px]">
      <div className="mx-auto flex w-[1170px] px-[15px]">
        <div className="w-[59%]">
          <div className="pr-[15px]">
            <h3 className="text-text-grey pb-[48px] text-[30px] font-bold uppercase">Gallery</h3>
            <div className="flex flex-wrap">
              {imageUrlLst.map((image, index) => (
                <div key={index} className="aspect-[13/9] w-[calc(100%/3)] bg-gray-200">
                  <Link to="/">
                    <img src={image} alt="Gallery Image" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <div className="pl-[15px]">
            <h3 className="text-text-grey pb-[48px] text-[30px] font-bold uppercase">FAQ</h3>
            <div className="-mt-[12px]">
              {faqLst.map((faq, index) => (
                <div key={index} className="border-b-[1px]">
                  <div
                    onClick={() => toggleCollapse(index)}
                    className="cursor-pointer text-[15px] font-bold leading-[48px]"
                  >
                    <h5 className="text-black">{faq.question}</h5>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-1000 ${openAnswer === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="pb-[8px] text-justify text-[15px] font-normal leading-[26px] text-black">
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
