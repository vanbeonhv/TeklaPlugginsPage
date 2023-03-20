import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const Button = ({ btnType, children }) => {
  return (
    <button
      className={`${btnType} px-5 py-3 mx-2 mt-2 text-white rounded-lg font-bold capitalize`}
    >
      {children}
      <BsArrowRightCircleFill className='inline-block ml-2 mb-1' />
    </button>
  );
};
export default Button;
