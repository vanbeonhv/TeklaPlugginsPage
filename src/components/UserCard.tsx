import React from 'react';
import { IUser } from '../types/types';

const UserCard = ({ authorInfo }: { authorInfo: IUser | undefined }) => {
  const { name, avatar, email, position, bio } = authorInfo as IUser;

  return (
    <div className='rounded-lg border-slate-100 border bg-white mb-4'>
      <div className='bg-black min-h-[32px] w-full rounded-t-lg '></div>
      <div className='flex justify-start items-center px-4 gap-2 relative'>
        <img
          src={avatar}
          alt='avatar'
          className='h-12 border-sm rounded-md relative top-[-15px]'
        />
        <h3 className='inline-block text-xl font-bold  capitalize text-gray-700 cursor-pointer hover:text-bright-blue-500 delay-75 ease-in-out'>
          {name}
        </h3>
      </div>
      <div className='mx-4'>
        <button
          type='button'
          className='bg-bright-blue-500 hover:bg-bright-blue-700 capitalize rounded-md text-white  py-2 w-full  font-semibold'
        >
          follow
        </button>
      </div>
      <div className='mx-4 mt-2'>
        <p className='text-sm text-slate-700 pb-4'>{bio}</p>
        <div className='pb-4 text-sm text-slate-700'>
          <h3 className='uppercase text-sm font-semibold '>work</h3>
          <p className='pt-1 capitalize'>{position}</p>
        </div>
        <div className='pb-4 text-sm text-slate-700'>
          <h3 className='uppercase text-sm font-semibold '>contact</h3>
          <a
            className='pt-1 hover:text-bright-blue-700  '
            href={`mailto:${email}`}
          >
            <p className='first-letter:uppercase'>{email}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
