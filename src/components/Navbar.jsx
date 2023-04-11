import React from 'react';
import { RxCodesandboxLogo } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Button from './Button';
import { BsBell } from 'react-icons/bs';

const Navbar = () => {
  const user = true;
  return (
    <header className='h-17 fixed w-full p-3 bg-white shadow-md z-50'>
      <nav className=' flex justify-between items-center h-full'>
        <div className='flex'>
          <Link to='/'>
            <div className='site-logo flex items-center'>
              <RxCodesandboxLogo className='text-4xl text-bright-blue-500 m-2' />

              <span className='text-2xl font-bold text-gray-800'>
                Marc
                <span className='font-extralight text-gray-600'>Pro</span>
              </span>
            </div>
          </Link>
          <div className='ml-4 inline-block'>
            <img
              src='https://www.wohhup.com/wp-content/uploads/2021/02/woh-hup.svg'
              alt=''
              className='h-14 p-3 inline-block'
            />
          </div>
          <div className='ml-4'>
            <img
              src='https://assets-us-01.kc-usercontent.com/1ca05609-4ad1-009e-bc40-2e1230b16a75/290606c0-4f8a-401b-a70e-434ccc4a36b0/tekla%20structures.png?w=400&h=300&fit=clip'
              alt=''
              className='h-14 '
            />
          </div>
        </div>
        <div className='h-full'>
          <ul className='flex flex-endtext-lg text-gray-600 capitalize cursor-pointer font-medium h-full text-xl'>
            <li className='p-2 hover:text-black mr-2 inline-block'>
              <Link to='/plugins'>plugins</Link>
            </li>
            <li className='p-2 hover:text-black mr-2 inline-block'>
              <Link to='/pricing'>pricing</Link>
            </li>
            <li className='p-2 hover:text-black mr-2 inline-block '>
              <Link to='/about'>about</Link>
            </li>
            {user ? (
              <li className='flex items-center gap-3 text-2xl'>
                <div className='p-2 pt-3 hover:bg-bright-blue-125 hover:text-bright-blue-500 rounded-lg relative h-12'>
                  <BsBell />
                  <div className='absolute top-10 right-0 border-bright-blue-200 rounded-md bg-white border'>
                    <p>test</p>
                  </div>
                </div>
                <div className='h-full relative'>
                  <img
                    src='https://api.multiavatar.com/default.png'
                    alt='avatar'
                    className='max-h-full w-auto border-2 border-bright-blue-100 hover:border-bright-blue-300  rounded-full '
                  />
                  <div className='absolute top-10 right-0 border-bright-blue-200 rounded-md bg-white border'>
                    <p>test</p>
                  </div>
                </div>
              </li>
            ) : (
              <Button type='login-button' linkTo='/login'>
                Login
              </Button>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
