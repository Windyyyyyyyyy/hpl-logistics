import { FaFacebookF, FaInstagram } from 'react-icons/fa';

import { Link, Outlet } from 'react-router';
import { Header } from './components';

const UserLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
      <footer className="bg-[url(./assets/images/footer-bg.jpg)] bg-cover bg-scroll bg-center bg-no-repeat px-0 pb-[56px] pt-[88px]">
        <div className="flex justify-center">
          <div className="mx-auto flex flex-wrap justify-center px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]">
            <aside className="3sm:w-1/2 flex w-full flex-col px-[15px] py-[30px] md:w-1/3 lg:w-1/4">
              <div className="mb-[32px]">
                <h2 className="text-sub-heading font-normal text-white">Quick Links</h2>
              </div>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-sm font-normal uppercase leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm font-normal uppercase leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm font-normal uppercase leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm font-normal uppercase leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </aside>
            <aside className="3sm:w-1/2 flex w-full flex-col px-[15px] py-[30px] md:w-1/3 lg:w-1/4">
              <div className="mb-[32px]">
                <h2 className="text-sub-heading font-normal text-white">Services</h2>
              </div>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-sm font-normal leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm font-normal leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm font-normal leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    Cloud Computing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm font-normal leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    DevOps
                  </Link>
                </li>
              </ul>
            </aside>
            <aside className="2sm:w-1/2 flex w-full flex-col px-[15px] py-[30px] md:w-1/3 lg:w-1/4">
              <div className="mb-[32px]">
                <h2 className="text-sub-heading font-normal text-white">Contact</h2>
              </div>
              <p className="text-ellipsis text-body font-normal text-[rgba(255,255,255,0.7)]">
                Address: 123 Main Street, New York, NY 10001
              </p>
              <p className="text-body font-normal leading-[30px] text-[rgba(255,255,255,0.7)]">
                Email:
              </p>
            </aside>
            <aside className="2sm:w-1/2 flex w-full flex-col px-[15px] py-[30px] md:w-1/3 lg:w-1/4">
              <div className="mb-[32px]">
                <h2 className="text-h3 font-normal text-[rgba(255,255,255,0.7)]">
                  Hoa Phat Logistics
                </h2>
              </div>
              <p className="text- p- font-normal leading-[25px] text-[rgba(255,255,255,0.7)]">
                HPL is a global logistics company that provides supply chain solutions to the
                world's most successful companies.
              </p>
              <ul className="flex flex-row py-[25px]">
                <li className="mr-[10px] flex items-center">
                  <Link
                    to="/"
                    className="rounded-[50%] bg-[#213258] p-3 text-white transition-all duration-300 ease-linear hover:bg-[#1877F2]"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="mr-[10px] flex items-center">
                  <Link
                    to="/"
                    className="rounded-[50%] bg-[#213258] p-3 text-white transition-all duration-300 ease-linear hover:bg-[linear-gradient(45deg,_#405de6,_#5851db,_#833ab4,_#c13584,_#e1306c,_#fd1d1d)]"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="/"></Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="pt-[85px] text-center">
          <div>
            <h4 className="text-sm-txt font-normal text-[rgba(255,255,255,0.7)]">
              © 2025 HPL Logistics. All rights reserved.
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
};

export default UserLayout;
