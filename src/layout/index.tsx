import { Outlet } from 'react-router';

const UserLayout = () => {
  return (
    <>
      <header className="z-[22] flex h-[158px] w-full flex-col">
        <div className="mx-auto px-0 py-[18px]">
          <div className="h-full w-[970px] px-[15px]">
            <div className="float-left">HPL Logo</div>
            <div className="float-right flex">
              <div>
                <p>Call us</p>
                <p>(+84)009898789</p>
              </div>
              <div>
                <p>Working Hours</p>
                <p>Mon - Fri 9am to 6pm</p>
              </div>
              <div>
                <p>Email us</p>
                <p>hpl@gmail.com</p>
              </div>
              <button>Request a Quote</button>
            </div>
          </div>
        </div>
        <div>
          <nav className="bg-blue-400">
            <div>
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
              <div>
                <p>Search</p>
                <div>
                  <p>Icon</p>
                  <select name="language" id="language">
                    <option value="vietnam">Vi</option>
                    <option value="english">En</option>
                    <option value="chinese">Zh</option>
                  </select>
                </div>
              </div>
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
