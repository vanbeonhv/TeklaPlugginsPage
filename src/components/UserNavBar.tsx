import React, { useEffect, useRef, useState } from 'react';
import { BsBell } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { removeUserData } from '../utils/UserData';
import { defaultUserInfor } from '../types/DefaultValue';
import { getAuth, signOut } from 'firebase/auth';
import { useUserInforStore } from '../store/userStore';

const noti = [
  { content: 'someone just like your post', route: '/#' },
  { content: 'someone just like your post', route: '/#' },
  { content: 'someone just like your post', route: '/#' },
  { content: 'someone just like your post', route: '/#' }
];

const userMenuItem = [
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
];

const UserNavBar = () => {
  const navigate = useNavigate();
  const { updateUserInfor } = useUserInforStore();
  const [showUserMenu, setShowUserMenu] = useState(false);

  //#region  Handle show sub menu
  let userAvatar: HTMLElement | null;
  let userMenu: HTMLElement | null = null;

  const userToggle = () => {
    setShowUserMenu(!showUserMenu);

    if (showNoti) {
      setShowNoti(false);
    }
  };
  //#endregion Handle show sub menu

  //#region Render Notification
  const [showNoti, setShowNoti] = useState(false);
  let notiIcon: HTMLElement | null;

  const notiModal = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (notiModal.current) {
      console.log('test');
    }
    // notiModal.current = document.querySelector('.noti-modal');
  }, [notiModal]);
  // console.log(notiModal.current);

  const notiToggle = () => {
    setShowNoti(!showNoti);
    if (showUserMenu) {
      setShowUserMenu(false);
    }
  };

  //#endregion Render Notification

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        removeUserData();
        updateUserInfor(defaultUserInfor);
      })
      .catch((error) => {
        console.log(error);
      });
    navigate('/login');
  };
  return (
    <li className='flex items-center gap-3 text-2xl'>
      <div
        className='p-2 hover:bg-bright-blue-125 hover:text-bright-blue-500 rounded-lg relative h-10 select-none noti-icon'
        onClick={notiToggle}
      >
        <BsBell className='' />
        <div className=''>
          <ul
            className='absolute top-12 right-0 border-bright-blue-200 rounded-md bg-white border min-w-[300px] text-base font-normal p-2 shadow-lg noti-modal'
            ref={(el) => (notiModal.current = el)}
          >
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
        <div className='user-menu absolute top-12 right-0'>
          <div className={showUserMenu ? ' ' : ' hidden '}>
            <ul className=' border-bright-blue-200 rounded-md bg-white border min-w-[250px] text-base font-normal p-2 shadow-lg'>
              <li className='px-4 py-2 border-b-[1px] hover:bg-bright-blue-125 hover:underline group mb-1 '>
                <p className='font-bold text-slate-600 group-hover:text-bright-blue-500'>
                  Marc Nguyen
                </p>
                <p className='text-xs text-slate-400 group-hover:text-bright-blue-500 mb-2'>
                  @Bim Designer
                </p>
              </li>
              {userMenuItem.map((link) => (
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
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserNavBar;
