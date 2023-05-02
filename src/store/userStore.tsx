import { create } from 'zustand';
import { IUser } from '../types/types';
import { defaultUserInfor } from '../types/DefaultValue';
import { getUserData } from '../utils/UserData';

async function fetchUserData(userId: string) {
  userData = await getUserData(userId);
  console.log('userData data from store: ', userData);
}

let userData: IUser = defaultUserInfor;

//User State
interface IUserState {
  userInfor: IUser;
  updateUserInfor: (userInfor: IUser) => void;
  fetchUserData: (userId: string) => Promise<IUser>;
}

export const useUserInforStore = create<IUserState>()((set) => ({
  userInfor: userData,
  fetchUserData: async (userId) => {
    const userData = await getUserData(userId);
    set({ userInfor: userData });
    return userData;
  },
  updateUserInfor: (userInfor: IUser) => set(() => ({ userInfor: userInfor }))
}));

//Login State
interface LoginState {
  isLoggedIn: boolean;
  updateLoginState: (state: boolean) => void;
}

export const useLoginStore = create<LoginState>()((set) => ({
  isLoggedIn: false,
  updateLoginState: (loginState) => set(() => ({ isLoggedIn: loginState }))
}));
