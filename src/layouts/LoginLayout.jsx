import React from 'react';
import Footer from 'src/components/Footer';

const LoginLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default LoginLayout;
