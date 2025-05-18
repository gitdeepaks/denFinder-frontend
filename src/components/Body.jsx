import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export const Body = () => {
  return (
    <div className="">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};
