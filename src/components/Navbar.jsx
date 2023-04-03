import React from 'react';
import { RxCodesandboxLogo } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Button from './Button';
const Navbar = () => {
  return (
    <header className='h-17 fixed w-full p-3 bg-white shadow-md z-50'>
      <nav className=' flex justify-between items-center relative top-[-5px]'>
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
              src='../../src/assets/img/tekla_structures.png'
              alt=''
              className='h-14 '
            />
          </div>
        </div>
        <div>
          <ul className='flex text-lg text-gray-600 capitalize cursor-pointer font-medium'>
            <Link to='/plugins'>
              <li className='p-2 hover:text-black mr-2 inline-block'>
                plugins
              </li>
            </Link>
            <Link to='/pricing'>
              <li className='p-2 hover:text-black mr-2 inline-block'>
                pricing
              </li>
            </Link>
            <Link to='/about'>
              <li className='p-2 hover:text-black mr-2 inline-block '>about</li>
            </Link>
            <button className='px-5 bg-bright-blue-500 text-white rounded-lg font-medium hover:bg-bright-blue-700 inline-block'>
              <Link to='/login'>Login</Link>
            </button>
            {/* <Button btnType='btn-primary'>Login</Button> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
