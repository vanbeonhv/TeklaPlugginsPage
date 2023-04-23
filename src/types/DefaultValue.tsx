import { IdTokenResult } from 'firebase/auth';
import { IUser } from './types';

// const defaultIdTokenResult: IdTokenResult = {
//   authTime: '',
//   expirationTime: '',
//   issuedAtTime:
//   signInProvider:
//   signInSecondFactor:
//   token: ''
// };

export const defaultUserInfor: IUser = {
  avatar: '',
  bio: '',
  createAt: 0,
  email: '',
  name: '',
  position: '',
  uid: '',
  plugin: {}
};
