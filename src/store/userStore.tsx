import { create } from 'zustand';
import { IUser } from '../types/types';

import { defaultUserInfor } from '../types/DefaultValue';

//User State
interface IUserState {
  userInfor: IUser;
  updateUserInfor: (userInfor: IUser) => void;
}

export const useUserInforStore = create<IUserState>()((set) => ({
  userInfor: defaultUserInfor,

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
