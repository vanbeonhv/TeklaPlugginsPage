import React, { useEffect } from 'react';
import { useUserInforStore } from '../store/userStore';
import { getDataFromLocal } from '../utils/LocalCache';

const useUserData = () => {
  const { userInfor, fetchUserData } = useUserInforStore();
  const userId = getDataFromLocal('currentUserId');
  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  }, [fetchUserData, userId]);
  return userInfor;
};

export default useUserData;
