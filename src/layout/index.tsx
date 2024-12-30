import { Link, Outlet } from 'react-router';

const UserLayout = () => {
  return (
    <>
      <header className="z-[22] flex h-[158px] w-full flex-col">
        <div className="mx-auto px-0 py-[18px]">
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
                <h5 className="text-sm-txt pb-2 font-normal text-[#8f97a7]">Call us</h5>
                <h4 className="text-body font-normal text-[#0c1832]">(+84)009898789</h4>
              </section>
              <section className="relative mr-[50px]">
                <span className="absolute right-[-25px] top-1/2 h-[43px] w-[1px] translate-y-[-50%] bg-[#f1f1f1]"></span>
                <h5 className="text-sm-txt pb-2 font-normal text-[#8f97a7]">Working Hours</h5>
                <h4 className="text-body font-normal text-[#0c1832]">Mon - Fri 9am to 6pm</h4>
              </section>
              <section className="relative mr-[50px]">
                <span className="absolute right-[-25px] top-1/2 h-[43px] w-[1px] translate-y-[-50%] bg-[#f1f1f1]"></span>
                <h5 className="text-sm-txt pb-2 font-normal text-[#8f97a7]">Email us</h5>
                <h4 className="text-body font-normal text-[#0c1832]">hpl@gmail.com</h4>
              </section>
              <button className="text-body z-[2] overflow-hidden rounded-[5px] bg-[#2ecc71] px-[26px] py-0 text-center leading-[47px] text-[#fff]">
                <Link to="/request-quote">Request a Quote</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#052c7d]">
          <nav className="border-none bg-transparent">
            <div className="flex">
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>About</p>
                </li>
                <li>
                  <p>Services</p>
                </li>
                <li>
                  <p>Contact</p>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <input type="text" />
                  </div>
                </li>
                <li>
                  <div>
                    <p>Icon</p>
                    <select name="language" id="language">
                      <option value="vietnam">Vi</option>
                      <option value="english">En</option>
                      <option value="chinese">Zh</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main className="mt-[158px]">
        <Outlet />
      </main>
      <footer>
        <div>
          <div>
            <section>
              <h2>Quick Links</h2>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </section>
            <section>
              <h2>Services</h2>
              <ul>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Cloud Computing</li>
                <li>DevOps</li>
              </ul>
            </section>
            <section>
              <h2>Contact</h2>
              <p>Address: 123 Main Street, New York, NY 10001</p>
              <p>Email:</p>
            </section>
            <section>
              <h2>HPL Logistics</h2>
              <p>
                HPL is a global logistics company that provides supply chain solutions to the
                world's most successful companies.
              </p>
              <div>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
              </div>
            </section>
          </div>
          <div>
            <p>© 2021 HPL Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default UserLayout;
