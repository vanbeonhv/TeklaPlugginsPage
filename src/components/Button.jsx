import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HiOutlineDownload } from 'react-icons/hi';
import { ImUpload } from 'react-icons/im';

//btnType: ['.btn-primary', '.btn-secondary'];
const Button = ({
  btnType,
  children,
  linkTo,
  iconName,
  blank,
  onClick,
  type
}) => {
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
  switch (type) {
    case 'button':
      return (
        <Link
          to={linkTo}
          className='inline-block'
          target={blank ? '_blank' : '_self'}
        >
          <button
            type={type}
            className={`${btnType} px-5 py-3 mx-2 mt-2 text-white rounded-lg font-bold capitalize block`}
            onClick={onClick}
          >
            {children}
            {icon}
          </button>
        </Link>
      );
      break;
    case 'submit':
      return (
        <div className=''>
          <button
            type='submit'
            className={`${btnType} px-5 py-3 text-white rounded-lg font-bold capitalize block w-full`}
          >
            {children}
          </button>
        </div>
      );
      break;
    case 'login-button':
      return (
        <button className='px-5 bg-bright-blue-500 text-white rounded-lg font-medium hover:bg-bright-blue-700 inline-block login-button'>
          <Link to={linkTo}>{children}</Link>
        </button>
      );
      break;
  }
};
export default Button;
