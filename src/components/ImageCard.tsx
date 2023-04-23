import React from 'react';

interface IImageCard {
  src: string;
  title: string;
}

const ImageCard = ({ src, title }: IImageCard) => {
  return (
    <div className='rounded-lg border-neutral-100 border bg-white mb-4 p-4 overflow-hidden sticky top-17'>
      <p className='text-slate-500 text-sm font-semibold leading-5 pb-2 '>
        {title}
      </p>
      <img
        src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
        alt='side part'
        className='rounded-md'
      />
    </div>
  );
};

export default ImageCard;
