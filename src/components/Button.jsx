import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HiOutlineDownload } from 'react-icons/hi';
import { ImUpload } from 'react-icons/im';

const Button = ({ btnType, children, linkTo, iconName, blank }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case 'link':
        return <BsArrowRightCircleFill className='inline-block ml-2 mb-1' />;
      case 'download':
        return <HiOutlineDownload className='inline-block ml-2 mb-1' />;
      case 'upload':
        return <ImUpload className='inline-block ml-2 mb-1' />;

      default:
        break;
    }
  };
  const icon = getIcon(iconName);
  return (
    <Link
      to={linkTo}
      className='inline-block'
      target={blank ? '_blank' : '_self'}
    >
      <button
        className={`${btnType} px-5 py-3 mx-2 mt-2 text-white rounded-lg font-bold capitalize block`}
      >
        {children}
        {icon}
      </button>
    </Link>
  );
};
export default Button;
