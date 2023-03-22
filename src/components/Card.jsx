import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Card = (icon, header, content) => {
  return (
    <div className='bg-white rounded-md w-1/4'>
      <div className='rounded-full bg-bright-blue-100 text-bright-blue-500'>
        {icon}
      </div>
      <h2 className='text-lg font-semibold'>{header}</h2>
      <p className='text-md text-slate-500'>{content}</p>
      <div className='text-bright-blue-500 hover:underline '>
        <Link to={`/plugins`}>
          <span className=''>Learn more</span>
          <BsArrowRight className='m-0 inline-block' />
        </Link>
      </div>
    </div>
  );
};

export default Card;
