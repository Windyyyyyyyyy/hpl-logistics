import { FaFacebookF, FaInstagram, FaSearch } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { Link, Outlet } from 'react-router';

const UserLayout = () => {
  return (
    <header>
      <div className="flex justify-center bg-white px-0 py-[18px]">
        <div className="flex h-full w-[1080px] items-center justify-between px-[15px]">
          <div className="inline-block leading-[55px]">
            <Link to="/">
              <img
                src="https://hopphatlog.com/wp-content/uploads/2022/01/logo-191-1.png"
                alt="Logo HPL"
                width={170}
                height={50}
              />
            </Link>
          </div>
          <div className="flex">
            <section className="relative mr-[50px]">
              <span className="absolute right-[-25px] top-1/2 h-[43px] w-[1px] translate-y-[-50%] bg-[#f1f1f1]"></span>
              <h5 className="pb-2 text-sm-txt font-normal text-[#8f97a7]">Call us</h5>
              <h4 className="text-body font-normal text-[#0c1832]">(+84)009898789</h4>
            </section>
            <section className="relative mr-[50px]">
              <span className="absolute right-[-25px] top-1/2 h-[43px] w-[1px] translate-y-[-50%] bg-[#f1f1f1]"></span>
              <h5 className="pb-2 text-sm-txt font-normal text-[#8f97a7]">Working Hours</h5>
              <h4 className="text-body font-normal text-[#0c1832]">Mon - Fri 9am to 6pm</h4>
            </section>
            <section className="relative mr-[50px]">
              <span className="absolute right-[-25px] top-1/2 h-[43px] w-[1px] translate-y-[-50%] bg-[#f1f1f1]"></span>
              <h5 className="pb-2 text-sm-txt font-normal text-[#8f97a7]">Email us</h5>
              <h4 className="text-body font-normal text-[#0c1832]">hpl@gmail.com</h4>
            </section>
            <button className="z-[2] overflow-hidden rounded-[5px] bg-[#2ecc71] px-[26px] py-0 text-center text-body leading-[47px] text-[#fff]">
              <Link to="/request-quote">Request a Quote</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="sticky left-0 right-0 top-0 z-50 w-full bg-[#052c7d] shadow-lg">
        <nav className="h-full w-full border-none bg-transparent">
          <div className="mx-auto flex h-full w-[1080px] justify-between px-[15px]">
            <ul className="flex items-center">
              <li className="mr-[18px] h-full">
                <Link
                  to="/"
                  className="group relative flex h-full items-center bg-transparent text-sm font-normal uppercase leading-[67px] text-white"
                  aria-current="page"
                >
                  <span className="absolute bottom-4 right-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                  Home
                </Link>
              </li>
              <li className="mr-[18px] h-full">
                <Link
                  to="/about"
                  className="group relative flex h-full items-center bg-transparent text-sm font-normal uppercase leading-[67px] text-white"
                  aria-current="page"
                >
                  About
                  <span className="absolute bottom-4 right-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="mr-[18px] h-full">
                <Link
                  to="/services"
                  className="group relative flex h-full items-center bg-transparent text-sm font-normal uppercase leading-[67px] text-white"
                  aria-current="page"
                >
                  Services
                  <span className="absolute bottom-4 right-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="mr-[18px] h-full">
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
            <ul className="flex items-center">
              <li className="mr-5 flex h-full items-center">
                <div className="relative">
                  <input
                    type="text"
                    className="h-[37px] rounded-[5px] border-none bg-[#092767] py-0 pl-[8px] pr-[30px] font-normal text-[#fff] focus:outline-none"
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
              <li className="h-full">
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
        </nav>
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-[url(./assets/images/footer-bg.jpg)] bg-cover bg-scroll bg-center bg-no-repeat px-0 pb-[56px] pt-[88px]">
        <div className="flex justify-center">
          <div className="flex w-[1080px] justify-evenly px-[15px]">
            <aside className="flex w-full flex-col px-[15px]">
              <div className="mb-[32px]">
                <h2 className="text-sub-heading font-normal text-white">Quick Links</h2>
              </div>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="<Link></Link>-normal text-sm uppercase leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="<Link></Link>-normal text-sm uppercase leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="<Link></Link>-normal text-sm uppercase leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-sm<Link></Link>-normal uppercase leading-[30px] text-[rgba(255,255,255,0.7)] transition-all duration-300 ease-linear hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </aside>
            <aside className="flex w-full flex-col px-[15px]">
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
            <aside className="flex w-full flex-col px-[15px]">
              <div className="mb-[32px]">
                <h2 className="text-sub-heading font-normal text-white">Contact</h2>
              </div>
              <p className="text-body font-normal text-[rgba(255,255,255,0.7)]">
                Address: 123 Main Street, New York, NY 10001
              </p>
              <p className="text-body font-normal leading-[30px] text-[rgba(255,255,255,0.7)]">
                Email:
              </p>
            </aside>
            <aside className="flex w-full flex-col px-[15px]">
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
    </header>
  );
};

export default UserLayout;
