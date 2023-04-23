import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { IPlugin } from '../types/types';

interface IPluginItem {
  data: IPlugin;
  index: string;
}

const PluginItem = ({ data, index }: IPluginItem) => (
  <div className='border rounded-2xl p-4 sm:m-8 md:m-8 lg:m-4 shadow-sm hover:shadow-lg h-[454px]'>
    <div className=' '>
      <h5 className=' mb-3 text-2xl font-semibold text-center capitalize cursor-default hover:underline'>
        <Link to={`/plugins/${index}`} key={index}>
          {data[index].name}
        </Link>
      </h5>
      <div className='card-text cursor-default min-h-[96px]'>
        {data[index].description}
      </div>
      <img
        src={data[index].thumbnail}
        alt='plugin image'
        className='h-52 mx-auto'
      />

      <div className='mt-2 flex p-2 justify-between items-center bottom-5 '>
        <div className='text-bright-blue-500 hover:underline '>
          <Link to={`/plugins/${index}`} key={index}>
            <span className='font-medium text-xl'>Learn more</span>
            <BsArrowRight className='m-0 inline-block' />
          </Link>
        </div>
        <div>
          <a href={data[index].file} target='_blank'>
            <HiDownload className='text-4xl md:text-5xl border rounded-full p-2 text-bright-blue-500 bg-bright-blue-100  ' />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default PluginItem;
