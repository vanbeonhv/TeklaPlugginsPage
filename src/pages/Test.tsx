import React, { useEffect, useRef, useState } from 'react';

const Test = () => {
  const pTag = useRef<HTMLParagraphElement | null>(null);
  useEffect(() => {
    console.log(pTag.current);
  }, []);
  return (
    <div className='container h-[calc(100vh-183px)]'>
      <div className='gara text-center'>
        <button className='bg-orange-500'>Click me</button>
        <p ref={pTag} className='pt-8'>
          paragrapth
        </p>
      </div>
    </div>
  );
};

export default Test;
