import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/Data/Data';

const PluginDetail = () => {
  const { id } = useParams();
  const detail = data.pluginDetail.find((detail) => detail.id == id);
  const { _id, author, avatar, time, heading, content, image } = detail;
  return (
    <div className='bg-gray-100'>
      <div className='p-4 grid grid-cols-12 container'>
        <aside className='col-span-1'>aside</aside>
        <main className='col-span-8 bg-white pt-8 px-16 rounded-md border border-slate-300'>
          <div className='flex justify-start items-center'>
            <img src={avatar} alt='avatar' className='h-10 rounded-full' />
            <div className='ml-3'>
              <h5 className='text-sm font-bold capitalize'>{author}</h5>
              <div className='flex text-gray-500 text-xs'>
                <p>Posted on </p>
                <p className='pl-1'>{time}</p>
              </div>
            </div>
          </div>
          <div className='title'>
            <h1 className='font-bold text-5xl mt-8 leading-[3.5rem]'>
              {heading}
            </h1>
            <div className=''></div>
          </div>
        </main>
        <aside className='col-span-3'>aside</aside>
      </div>
    </div>
  );
};

export default PluginDetail;
