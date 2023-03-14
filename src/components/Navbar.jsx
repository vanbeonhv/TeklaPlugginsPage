import React from 'react';
import { RxCodesandboxLogo } from 'react-icons/rx';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <header className='header fixed w-full p-3'>
        <nav className='navbar flex justify-between items-center'>
          <div className='site-logo flex items-center'>
            <Link to='/'>
              <RxCodesandboxLogo className='text-4xl text-bright-blue-500 m-2' />
            </Link>

            <span className='text-2xl font-bold text-gray-800 cursor-default'>
              <Link to='/'>Marc</Link>
              <span className='font-extralight text-gray-600'>Pro</span>
            </span>
          </div>
          <div>
            <ul className='flex text-lg text-gray-600 capitalize cursor-pointer font-medium'>
              <li className='p-2 hover:text-black mr-2'>
                <Link to='/plugins'>pluggins</Link>
              </li>
              <li className='p-2 hover:text-black mr-2'>
                <Link to='/pricing'>pricing</Link>
              </li>
              <li className='p-2 hover:text-black mr-2'>
                <Link to='/contact'>contact</Link>
              </li>
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
