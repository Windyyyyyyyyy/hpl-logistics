import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router';

const GetQuote = () => {
  return (
    <section className="bg-custom-blue px-0 py-[30px]">
      <div className="mx-auto flex w-[1170px] justify-between px-[15px]">
        <div className="flex items-center">
          <h4 className="text-2xl font-normal text-white">
            Provide Smart Logistic Solution Across The World
          </h4>
        </div>
        <div className="flex justify-center">
          <Link
            to="/"
            className="hover:bg-custom-green flex items-center rounded border-[1px] border-solid border-white px-[60px] py-0 text-[17px] font-normal uppercase leading-[65px] text-white transition-all duration-300 ease-linear"
          >
            Get a Quote
            <div className="pl-5">
              <FaAngleRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
