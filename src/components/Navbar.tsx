import React, { useEffect, useState } from 'react';
import { RxCodesandboxLogo } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Button from './Button';
import { BsBell } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  const user = true;

  //#region  Handle show sub menu
  let userAvatar: HTMLElement | null;
  let userMenu: HTMLElement | null;
  const [showUserMenu, setShowUserMenu] = useState(false);
  const handleHideMenu = (e: React.MouseEvent<EventTarget>) => {
    e.stopPropagation();
    const targetNode = e.target as Node;
    const isClickInsideMenu = userMenu.contains(targetNode);
    const isClickAvatar = userAvatar.contains(targetNode);

    if (!isClickInsideMenu && !isClickAvatar) {
      setShowUserMenu(false);
    }
  };

  useEffect(() => {
    userAvatar = document.querySelector('.user-avatar');
    userMenu = document.querySelector('.user-menu');
    document.addEventListener('click', handleHideMenu);
    return () => {
      document.removeEventListener('click', handleHideMenu);
    };
  }, []);

  const userToggle = (e) => {
    setShowUserMenu(!showUserMenu);
  };
  //#endregion Handle show sub menu
  //#region Render Notification
  let notiIcon;
  let notiModal;
  const [showNoti, setShowNoti] = useState(false);
  const noti = [
    { content: 'someone just like your post', route: '/#' },
    { content: 'someone just like your post', route: '/#' },
    { content: 'someone just like your post', route: '/#' },
    { content: 'someone just like your post', route: '/#' }
  ];
  const handleHideNoti = (e) => {
    e.stopPropagation();

    const isClickNotiIcon = notiIcon.contains(e.target);
    const isClickInsideModal = notiModal.contains(e.target);

    if (!isClickNotiIcon && !isClickInsideModal) {
      setShowNoti(false);
    }
  };

  useEffect(() => {
    notiIcon = document.querySelector('.noti-icon');
    notiModal = document.querySelector('.noti-modal');
    document.addEventListener('click', handleHideNoti);
    return () => {
      document.removeEventListener('click', handleHideNoti);
    };
  }, []);

  const notiToggle = () => {
    setShowNoti(!showNoti);
  };

  //#endregion Render Notification

  const handleSignOut = () => {
    console.log('Sign out noti from console! \nPlease add code to handle');
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
          <div className='ml-4 '>
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
                <div
                  className='p-2 hover:bg-bright-blue-125 hover:text-bright-blue-500 rounded-lg relative h-10 select-none noti-icon'
                  onClick={notiToggle}
                >
                  <BsBell className='' />
                  <div className={showNoti ? '' : 'hidden'}>
                    <ul className='absolute top-12 right-0 border-bright-blue-200 rounded-md bg-white border min-w-[300px] text-base font-normal p-2 shadow-lg noti-modal'>
                      {noti.map((noti) => {
                        return (
                          <li
                            key={uuidv4()}
                            className=' hover:bg-bright-blue-125 hover:text-bright-blue-500 text-xs text-slate-600 p-2'
                          >
                            <Link to={noti.route}>{noti.content}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className='h-full relative'>
                  <img
                    src='https://api.multiavatar.com/default.png'
                    alt='avatar'
                    className='max-h-full w-auto border-2 border-bright-blue-100 hover:border-bright-blue-300 rounded-full user-avatar '
                    onClick={userToggle}
                  />
                  <div className='user-menu'>
                    <div className={showUserMenu ? ' ' : ' hidden'}>
                      <ul className='absolute top-12 right-0 border-bright-blue-200 rounded-md bg-white border min-w-[250px] text-base font-normal p-2 shadow-lg'>
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
                            className=' hover:bg-bright-blue-125 hover:underline hover:text-bright-blue-500 text-base text-slate-600'
                            key={link.route}
                          >
                            <Link
                              to={`/${link.route}`}
                              className='w-full block px-4 py-2'
                            >
                              {link.content}
                            </Link>
                          </li>
                        ))}
                        <li
                          className='px-4 py-2 border-t-[1px] hover:bg-bright-blue-125 hover:underline hover:text-red-600 mb-1 
                        '
                          onClick={handleSignOut}
                        >
                          Sign out
                        </li>
                      </ul>
                      <p>aa </p>
                    </div>
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
