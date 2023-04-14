import React from 'react';
import Footer from '../components/Footer';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default LoginLayout;
