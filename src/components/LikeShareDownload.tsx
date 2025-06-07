import React from 'react';
import { BsShare } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { RiHeartLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IPluginDetail } from '../types/types';
import { HiOutlineDownload } from 'react-icons/hi';
type element = Element | null;

const LikeShareDownload = ({
  pluginDetail
}: {
  pluginDetail: IPluginDetail;
}) => {
  const handleLike = () => {
    const likeIcon: element = document.querySelector('.like-icon');
    likeIcon?.classList.toggle('fill-red-600');
  };

  return (
    <div className='flex flex-col items-end justify-around pt-20 pr-2 gap-4'>
      <div className='flex flex-col  items-center gap-2'>
        <div className='relative text-slate-600'>
          <RiHeartLine
            className='like-icon text-2xl cursor-pointer hover:text-red-600 delay-75 relative'
            onClick={handleLike}
          />
          <FiPlus className='absolute bottom-0 right-0 rounded-full bg-white text-xs text-slate-600' />
        </div>
        <p className='text-slate-600'>0</p>
      </div>
      <div className='flex flex-col  items-center gap-2 text-slate-600 pr-1'>
        <BsShare className='text-xl cusror-pointer delay-75 hover:text-blue-600 ' />
        <p className='text-slate-600'>0</p>
      </div>
      <div className='flex flex-col  items-center gap-2 text-slate-600'>
        <Link to={pluginDetail ? pluginDetail.file : ''} target='_blank'>
          <HiOutlineDownload className='text-2xl cusror-pointer delay-75 hover:text-blue-600 ' />
        </Link>
        <p className='text-slate-600'>{pluginDetail.downloads}</p>
      </div>
    </div>
  );
};

export default LikeShareDownload;
