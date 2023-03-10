import React from 'react';
import { RxCodesandboxLogo } from 'react-icons/rx';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <header className='header fixed w-full p-3'>
        <nav className='navbar flex justify-between items-center'>
          <Link to='/'>
            <div className='site-logo flex items-center'>
              <RxCodesandboxLogo className='text-4xl text-bright-blue-500 m-2' />

              <span className='text-2xl font-bold text-gray-800'>
                Marc
                <span className='font-extralight text-gray-600'>Pro</span>
              </span>
            </div>
          </Link>
          <div>
            <ul className='flex text-lg text-gray-600 capitalize cursor-pointer font-medium'>
              <Link to='/plugins'>
                <li className='p-2 hover:text-black mr-2'>plugins</li>
              </Link>
              <Link to='/pricing'>
                <li className='p-2 hover:text-black mr-2'>pricing</li>
              </Link>
              <Link to='/contact'>
                <li className='p-2 hover:text-black mr-2'>contact</li>
              </Link>
              <button className='px-5 bg-bright-blue-500 text-white rounded-lg font-medium hover:bg-bright-blue-700'>
                Sign up
              </button>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
