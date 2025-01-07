import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router';

const GetQuote = () => {
  return (
    <section className="bg-custom-blue px-0 py-[30px]">
      <div className="mx-auto flex px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
        <div className="flex w-full flex-col items-center justify-between lg:flex-row">
          <div className="flex items-center justify-center max-lg:mb-[30px]">
            <h4 className="text-center text-2xl font-normal text-white">
              Provide Smart Logistic Solution Across The World
            </h4>
          </div>
          <div className="flex justify-center">
            <Link
              to="/"
              className="flex items-center rounded border-[1px] border-solid border-white px-[60px] py-0 text-[17px] font-normal uppercase leading-[65px] text-white transition-all duration-300 ease-linear hover:bg-custom-green"
            >
              Get a Quote
              <div className="pl-5">
                <FaAngleRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
