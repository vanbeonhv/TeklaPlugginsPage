import React from 'react';

const Button = ({ btnType, children }) => {
  if (btnType === 'primary') {
  }
  return (
    <button
      className={`${btnType} px-5 py-2 mx-2 text-white rounded-lg font-medium capitalize`}
    >
      {children}
    </button>
  );
};

// ${btnType}
export default Button;
