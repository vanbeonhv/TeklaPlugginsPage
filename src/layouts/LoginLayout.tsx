import React from 'react';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default LoginLayout;
