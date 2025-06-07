import React, { useEffect, useRef } from 'react';
import { BsBell } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { removeUserData } from '../utils/UserData';
import { defaultUserInfor } from '../types/DefaultValue';
import { useUserInforStore } from '../store/userStore';
import { IAdjustClass, IUser } from '../types/types';
import { superRemoveClass, superToggleClass } from '../utils/AdjustClass';
import { mockAuth } from '../dummyData/mockData';

interface IUserMenuInfo {
  displayName?: string;
  position?: string;
  avatar?: string;
}

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

const UserNavBar = ({ displayName, position, avatar }: IUserMenuInfo) => {
  const navigate = useNavigate();
  const { updateUserInfor } = useUserInforStore();
  //#region  Notification
  //----------------Show Notification------------------
  const notiIcon = useRef<HTMLDivElement | null>(null);
  const notiModal = useRef<HTMLUListElement | null>(null);
  const highLightNotiClass: IAdjustClass = {
    element: notiIcon,
    class0: 'bg-bright-blue-125',
    class1: 'text-bright-blue-500'
  };
  const notiToggle = () => {
    notiModal.current?.classList.toggle('hidden');
    superToggleClass(highLightNotiClass);
  };
  //------------------Hide Notification-----------------
  const hideNoti = (e: MouseEvent) => {
    if (
      // notiModal.current?.contains(e.target as Node) &&
      !notiIcon.current?.contains(e.target as Node)
    ) {
      notiModal.current?.classList.add('hidden');
      superRemoveClass(highLightNotiClass);
    }
  };
  // Call hideNoti in useEffect hide sub menu below

  //#endregion Render Notification

  //#region  Sub user menu
  //-------------Show menu-------------------------
  const userAvatar = useRef<HTMLImageElement | null>(null);
  const userMenu = useRef<HTMLUListElement | null>(null);
  const highLightAvatarClass: IAdjustClass = {
    element: userAvatar,
    class0: 'border-bright-blue-100',
    class1: 'border-bright-blue-300'
  };

  const userToggle = () => {
    userMenu.current?.classList.toggle('hidden');
    superToggleClass(highLightAvatarClass);
  };

  //--------------Hide menu----------------------------
  const hideMenu = (e: MouseEvent) => {
    if (
      !userMenu.current?.contains(e.target as Node) &&
      !userAvatar.current?.contains(e.target as Node)
    ) {
      userMenu.current?.classList.add('hidden');
      superRemoveClass(highLightAvatarClass);
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', hideMenu);
    document.body.addEventListener('click', hideNoti);

    return () => {
      document.body.removeEventListener('click', hideMenu);
      document.body.removeEventListener('click', hideNoti);
    };
  }, []);

  //#endregion Sub user menu

  const handleSignOut = async () => {
    try {
      await mockAuth.signOut();
      removeUserData();
      updateUserInfor(defaultUserInfor);
      navigate('/login');
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <li className='flex items-center gap-3 text-2xl'>
      <div
        className='p-2 rounded-lg relative h-10 select-none'
        ref={notiIcon}
        onClick={notiToggle}
      >
        <BsBell className='' />
        <ul
          className='absolute top-12 right-0 border-bright-blue-200 rounded-md bg-white border min-w-[300px] text-base font-normal p-2 shadow-lg hidden'
          ref={notiModal}
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
      <div className='h-full relative'>
        <img
          src={avatar}
          alt='avatar'
          className='max-h-full w-auto border-2 border-bright-blue-100 rounded-full user-avatar'
          onClick={userToggle}
          ref={userAvatar}
        />
        <div className='user-menu absolute top-12 right-0'>
          <ul
            className=' border-bright-blue-200 rounded-md bg-white border min-w-[250px] text-base font-normal p-2 shadow-lg hidden'
            ref={userMenu}
          >
            <li className='px-4 py-2 border-b-[1px] hover:bg-bright-blue-125 hover:underline group mb-1 '>
              <p className='font-bold text-slate-600 group-hover:text-bright-blue-500'>
                {displayName}
              </p>
              <p className='text-xs text-slate-400 group-hover:text-bright-blue-500 mb-2'>
                {`@${position}`}
              </p>
            </li>
            {userMenuItem.map((link) => (
              <li
                className=' hover:bg-bright-blue-125 hover:underline hover:text-bright-blue-500 text-base text-slate-600'
                key={link.route}
              >
                <Link to={`/${link.route}`} className='w-full block px-4 py-2'>
                  {link.content}
                </Link>
              </li>
            ))}
            <li className='border-t-[1px] mb-1'>
              <button
                className='w-full text-left px-4 py-2 hover:bg-bright-blue-125 hover:underline hover:text-red-600'
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default UserNavBar;
