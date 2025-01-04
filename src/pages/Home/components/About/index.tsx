import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router';

const About = () => {
  const aboutObject = {
    aboutUs: {
      title: 'About Us',
      description:
        'LOYO International Logistics Co., Ltd is a professional integrated international logistics companies in China. with its head officelocated in Shenzhen---the leading port in China. Meanwhile, in China, Shenzhen is the richest(per-capita income) city, one of the four first-tier(Beijing, Shanghai, Guangzhou, Shenzhen) cities, the biggest international trading center(import-export volume) and the second largest internationallogistics center, electronics manufacturing center, geek and entrepreneurship center.As the first-class international logistics agencies set up with the approval of the Ministry of Commerce, the Ministry of Communications and the General Administration of Customs of the People’s Republic of China, LoyoLogistics has grown into maturity from the simplicity after many years of striving. ',
      final:
        'Loyo Logistics would like to be your reliable assistant and faithful friend in Logistics.',
    },
    ourLocation: {
      title: 'Our Location',
      imageUrl: '/src/assets/images/icon',
    },
  };

  return (
    <section className="bg-[#f5f7f9] py-[100px]">
      <div className="mx-auto w-[1170px] px-[15px]">
        <div className="-mx-[15px] flex">
          <div className="w-full px-[15px]">
            <div className="">
              <h3 className="text-text-grey pb-[48px] text-[30px] font-bold uppercase">
                {aboutObject.aboutUs.title}
              </h3>
              <p className="pb-[30px] text-justify text-body font-normal leading-[30px] text-black">
                {aboutObject.aboutUs.description}
              </p>
              <p className="pb-[30px] text-justify text-body font-normal leading-[30px] text-black">
                {aboutObject.aboutUs.final}
              </p>
              <div className="inline-block">
                <Link
                  to="/about"
                  className="flex items-center rounded border-[1px] border-solid border-custom-blue px-[32px] py-0 text-sm font-normal uppercase leading-[50px] text-custom-blue transition-all duration-300 ease-linear hover:bg-custom-blue hover:text-white"
                >
                  Know More
                  <div className="pl-[10px]">
                    <FaAngleRight />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-[15px]">
            <h4 className="text-text-grey pb-[48px] text-[30px] font-bold uppercase">
              {aboutObject.ourLocation.title}
            </h4>
            <div className="aspect-[16x9] h-[320px] bg-gray-200">
              <img src={aboutObject.ourLocation.imageUrl} alt="Our Location" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
