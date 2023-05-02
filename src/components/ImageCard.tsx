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
      <img src={src} alt='side part' className='rounded-md' />
    </div>
  );
};

export default ImageCard;
