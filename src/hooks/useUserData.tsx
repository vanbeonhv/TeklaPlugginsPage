import React, { useEffect } from 'react';
import { useUserInforStore } from '../store/userStore';
import { getDataFromLocal } from '../utils/LocalCache';
import { IUser } from '../types/types';
import { defaultUserInfor } from '../types/DefaultValue';

const useUserData = () => {
  const { userInfor, fetchUserData } = useUserInforStore();

  useEffect(() => {
    let userData: IUser = defaultUserInfor;
    const userId = getDataFromLocal('currentUserId');
    if (userId) {
      fetchUserData(userId);
    }
  }, []);

  return <div>useUserData</div>;
};

export default useUserData;
