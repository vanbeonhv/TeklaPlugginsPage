import React from 'react';
import Footer from 'src/components/Footer';
import Navbar from 'src/components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className='pt-17'>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
