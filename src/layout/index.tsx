import { Outlet } from 'react-router';
import { Footer, Header } from './components';

const UserLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
