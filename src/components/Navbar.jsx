import React from 'react';
import { RxCodesandboxLogo } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Button from './Button';
import { BsBell } from 'react-icons/bs';

const Navbar = () => {
  const user = true;

  const userAvatar = document.querySelector('.user-avatar');
  const userMenu = document.querySelector('.user-menu');

  document.addEventListener('click', (e) => {
    const isClickInside = userMenu.contains(e.target);
    const isClickAvatar = userAvatar.contains(e.target);

    console.log(e.target);
    console.log('isClickInside:', isClickInside);
    console.log('isClickAvatar:', isClickAvatar);
    if (!isClickInside && !isClickAvatar) {
      userMenu.classList.add('hidden');
    }
  });
  const userToggle = (e) => {
    userMenu.classList.remove('hidden');
  };
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
              className='h-14 user-avatar'
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
                    onClick={userToggle}
                  />

                  <ul className='absolute top-12 right-0 border-bright-blue-200 rounded-md bg-white border min-w-[250px] text-base font-normal p-2 shadow-lg user-menu'>
                    <li className='px-4 py-2 border-b-[1px] hover:bg-bright-blue-125 hover:underline group mb-1 '>
                      <p className='font-bold text-slate-600 group-hover:text-bright-blue-500'>
                        Marc Nguyen
                      </p>
                      <p className='text-xs text-slate-400 group-hover:text-bright-blue-500 mb-2'>
                        @Bim Designer
                      </p>
                    </li>
                    {[
                      {
                        content: 'Dash Board',
                        route: 'dashboard'
                      },
                      {
                        content: 'Upload Plugin',
                        route: 'upload'
                      },

                      {
                        content: 'Reading list',
                        route: 'reading-list'
                      },
                      {
                        content: 'Settings',
                        route: 'settings'
                      }
                    ].map((link) => (
                      <li
                        className='px-4 py-2 hover:bg-bright-blue-125 hover:underline hover:text-bright-blue-500 text-base text-slate-600'
                        key={link.route}
                      >
                        <Link to={`/${link.route}`}>{link.content}</Link>
                      </li>
                    ))}
                    <li className='px-4 py-2 border-t-[1px] hover:bg-bright-blue-125 hover:underline group mb-1 '>
                      Sign out
                    </li>
                  </ul>
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
