import { IUser } from '../types/types';
import { defaultUserInfor } from '../types/DefaultValue';
import { mockAuth } from '../dummyData/mockData';

export const getUserData = async (uid: string): Promise<IUser> => {
  try {
    // Get the currently signed-in user from our mock auth
    const currentUser = mockAuth.getCurrentUser();
    if (!currentUser || currentUser.id !== uid) {
      return defaultUserInfor;
    }

    // Create a user data object that matches IUser interface
    const userData: IUser = {
      uid: currentUser.id,
      email: currentUser.email,
      avatar: currentUser.avatar ?? 'https://api.multiavatar.com/default.png',
      name: currentUser.name ?? currentUser.email.split('@')[0],
      createAt: Date.now(),
      plugin: {}, // Initialize with empty plugin object
      bio: '',    // Optional field
      position: '' // Optional field
    };

    // Store user ID in local storage
    localStorage.setItem('currentUserId', JSON.stringify(userData.uid));

    return userData;
  } catch (error) {
    console.error('Error getting user data:', error);
    return defaultUserInfor;
  }
};

export const removeUserData = () => {
  try {
    // Remove user data from local storage
    localStorage.removeItem('currentUserId');

    // Clear all cookies
    document.cookie.split(';').forEach(cookie => {
      document.cookie = cookie
        .replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
    });

    console.log('User data successfully removed');
  } catch (error) {
    console.error('Error removing user data:', error);
  }
};
