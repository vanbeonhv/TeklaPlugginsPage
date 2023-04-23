import React from 'react';
import LoadingIcon from './LoadingIcon';

const Loading = () => {
  return (
    <div className='text-center inline-block'>
      <LoadingIcon />
      <p className=' block'>Loading....</p>
    </div>
  );
};

export default Loading;
