import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='font-openSans'>
      <div>
        <Navbar />
      </div>
      <main className='pt-17'>{children}</main>
    </div>
  );
};

export default Layout;
