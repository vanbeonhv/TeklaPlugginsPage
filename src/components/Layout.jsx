import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='font-openSans'>
      <Navbar />

      <main className='pt-17'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
