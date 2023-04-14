import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className='pt-17'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
