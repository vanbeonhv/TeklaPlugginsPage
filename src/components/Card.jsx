import React from 'react';
import { BsArrowRight, BsFastForwardFill } from 'react-icons/bs';
import { FaAngleDoubleUp, FaBookOpen, FaShapes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const getIconByName = (iconName) => {
  switch (iconName) {
    case 'block':
      return <FaShapes />;
    case 'fast':
      return <BsFastForwardFill />;
    case 'update':
      return <FaAngleDoubleUp />;
    case 'docs':
      return <FaBookOpen />;
  }
};

const Card = ({ iconName, header, content }) => {
  const icon = getIconByName(iconName);
  return (
    <div className='bg-white rounded-lg shadow-sm xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full p-6'>
      <div className='rounded-full bg-bright-blue-100 text-bright-blue-500 inline-block p-4 text-2xl'>
        {icon}
      </div>
      <h2 className='text-2xl font-semibold capitalize'>{header}</h2>
      <p className='text-md text-slate-500 py-5'>{content}</p>
      <div className='text-bright-blue-500 hover:underline '>
        <Link to='/plugins'>
          <span className='font-medium'>Learn more</span>
          <BsArrowRight className='m-0 inline-block' />
        </Link>
      </div>
    </div>
  );
};

export default Card;
