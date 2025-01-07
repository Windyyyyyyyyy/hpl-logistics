import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { Link } from 'react-router';

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleClick = () => {
    setToggleNav((prev) => !prev);
  };

  return (
    <>
      <div className="px-0 py-[18px]">
        <div className="max-3sm:flex-col mx-auto flex h-full items-center justify-between px-[15px] transition-all duration-500 md:w-[750px] lg:w-[970px] xl:w-[1170px]">
          <div className="max-3sm:mb-3 inline-block leading-[55px]">
            <Link to="/">
              <img
                src="https://hopphatlog.com/wp-content/uploads/2022/01/logo-191-1.png"
                alt="Logo HPL"
                width={170}
                height={50}
                className="max-2sm:w-[140px]"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <section className="relative mr-[50px] max-lg:hidden">
              <span className="absolute right-[-25px] top-1/2 h-[43px] w-[1px] translate-y-[-50%] bg-[#f1f1f1]"></span>
              <h5 className="pb-2 text-sm-txt font-normal text-[#8f97a7]">Call us</h5>
              <h4 className="text-body font-normal text-[#0c1832]">(+84)009898789</h4>
            </section>
            <section className="relative mr-[50px] max-lg:hidden">
              <span className="absolute right-[-25px] top-1/2 h-[43px] w-[1px] translate-y-[-50%] bg-[#f1f1f1]"></span>
              <h5 className="pb-2 text-sm-txt font-normal text-[#8f97a7]">Working Hours</h5>
              <h4 className="text-body font-normal text-[#0c1832]">Mon - Fri 9am to 6pm</h4>
            </section>
            <section className="relative mr-[50px] max-lg:hidden">
              <span className="absolute right-[-25px] top-1/2 h-[43px] w-[1px] translate-y-[-50%] bg-[#f1f1f1]"></span>
              <h5 className="pb-2 text-sm-txt font-normal text-[#8f97a7]">Email us</h5>
              <h4 className="text-body font-normal text-[#0c1832]">hpl@gmail.com</h4>
            </section>
            <button className="max-2sm:px-[18px] max-2sm:text-sm-txt max-2sm:leading-[38px] z-[2] overflow-hidden rounded-[5px] bg-[#2ecc71] px-[26px] py-0 text-center text-body leading-[47px] text-[#fff]">
              <Link to="/request-quote">Request a Quote</Link>
            </button>
          </div>
        </div>
      </div>
      <header className="sticky left-0 right-0 top-0 z-50 w-full bg-[#052c7d] shadow-lg">
        <nav className="h-full w-full border-none bg-transparent">
          <div className="mx-auto flex flex-col transition-all duration-500 md:w-[750px] lg:w-[970px] xl:w-[1170px]">
            <div className="">
              <button
                className="relative float-left my-[8px] ml-[15px] rounded border-[1px] border-solid border-[rgba(255,255,255,0.35)] bg-transparent px-[10px] py-[9px] md:hidden"
                onClick={handleClick}
              >
                <span className="mt-[4px] block h-[2px] w-[22px] rounded-[1px] bg-white"></span>
                <span className="mt-[4px] block h-[2px] w-[22px] rounded-[1px] bg-white"></span>
                <span className="mt-[4px] block h-[2px] w-[22px] rounded-[1px] bg-white"></span>
              </button>
            </div>
            <div
              className={`flex justify-between overflow-hidden transition-all duration-500 max-md:flex-col max-md:border-[rgba(255,255,255,0.35)] ${toggleNav ? 'max-md:max-h-[350px] max-md:border-t-[1px]' : 'max-md:max-h-0'} `}
            >
              <ul className="mx-[15px] flex items-center max-md:flex-col max-md:items-start">
                <li className="mr-[18px] h-full max-sm:w-full">
                  <Link
                    to="/"
                    className="group relative flex h-full items-center bg-transparent text-sm font-normal uppercase leading-[67px] text-white"
                    aria-current="page"
                  >
                    <span className="absolute bottom-4 right-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                    Home
                  </Link>
                </li>
                <li className="mr-[18px] h-full max-md:w-full">
                  <Link
                    to="/about"
                    className="group relative flex h-full items-center bg-transparent text-sm font-normal uppercase leading-[67px] text-white"
                    aria-current="page"
                  >
                    About
                    <span className="absolute bottom-4 right-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="mr-[18px] h-full max-md:w-full">
                  <Link
                    to="/services"
                    className="group relative flex h-full items-center bg-transparent text-sm font-normal uppercase leading-[67px] text-white"
                    aria-current="page"
                  >
                    Services
                    <span className="absolute bottom-4 right-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  </Link>
                </li>
                <li className="mr-[18px] h-full max-md:w-full">
                  <Link
                    to="/contact"
                    className="group relative flex h-full items-center bg-transparent text-sm font-normal uppercase leading-[67px] text-white"
                    aria-current="page"
                  >
                    Contact
                    <span className="absolute bottom-4 right-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
              <ul className="mx-[15px] flex items-center">
                <li className="mr-5 w-full max-md:-mr-5 max-md:mb-5">
                  <div className="relative">
                    <input
                      type="text"
                      className="h-[37px] w-full rounded-[5px] border-none bg-[#092767] py-0 pl-[8px] pr-[30px] font-normal text-[#fff] focus:outline-none"
                      placeholder="Search here..."
                    />
                    <span className="absolute right-0 top-0 h-full">
                      <button
                        type="button"
                        className="absolute right-3 z-[5] h-full border-none bg-transparent p-0 text-white"
                      >
                        <FaSearch />
                      </button>
                    </span>
                  </div>
                </li>
                <li className="max-md:absolute max-md:right-[15px] max-md:top-[12px]">
                  <div className="flex h-full items-center">
                    <span className="mr-1 text-white">
                      <MdLanguage size={23} />
                    </span>
                    <div className="text-white">
                      <select
                        name="language"
                        id="language"
                        className="cursor-pointer rounded-md border-none bg-transparent py-1 text-white transition-colors duration-200 focus:outline-none"
                      >
                        <option value="vietnam" className="bg-white text-black">
                          Vi
                        </option>
                        <option value="english" className="bg-white text-black">
                          En
                        </option>
                        <option value="chinese" className="bg-white text-black">
                          Zh
                        </option>
                      </select>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
