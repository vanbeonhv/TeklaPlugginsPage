import React from 'react';
import {
  equalTo,
  get,
  getDatabase,
  orderByChild,
  query,
  ref
} from 'firebase/database';
import app from '../../firebase';
import { getAuth } from 'firebase/auth';
import { IUser, IUsers } from '../types/types';
import { saveUserIdToLocal } from './LocalCache';
import { defaultUserInfor } from '../types/DefaultValue';

const auth = getAuth(app);
const db = getDatabase();

export const getUserData = async (uid: string): Promise<IUser> => {
  const queryUser = query(ref(db, 'users'), orderByChild('uid'), equalTo(uid));

  let userData: IUser = defaultUserInfor;
  await get(queryUser)
    .then((snapshot) => {
      const userFetch: IUsers = snapshot.val();
      userData = Object.values(userFetch)[0];
      const currentUserId = JSON.stringify(userData.uid);
      saveUserIdToLocal(currentUserId);

      return userData;
    })
    .catch((e) => console.log('errors:', e));
  return userData;
};

export const removeUserData = () => {
  localStorage.removeItem('userData');
  document.cookie =
    'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  console.log('user signed out!');
};
