import { MutableRefObject } from 'react';

export interface IPluginDetail {
  author: string;
  time?: string;
  heading?: string;
  description: string;
  name: string;
  thumbnail: string;
  title?: string;
  file: string;
  content?: string[];
  image?: string[];
  tags?: string[];
  youtubeId?: string;
  createdAt?: number;
  downloads?: number;
  rating?: number;
  version?: string;
}

export interface IPlugin {
  [id: string]: IPluginDetail;
}

interface IUserPlugin {
  [id: string]: boolean;
}
export interface IUser {
  avatar: string;
  bio?: string;
  createAt: number;
  email: string;
  name?: string;
  position?: string;
  uid: string;
  plugin: IUserPlugin;
}

export interface IUsers {
  [id: string]: IUser;
}

export interface IUserResponse {
  email: string;
  photoURL?: string;
  stsTokenManager: {
    accessToken: string;
    expirationTime: number;
    refreshToken: string;
    uid: string;
  };
}

export interface IAdjustClass {
  element: MutableRefObject<Element | null>;
  class0: string;
  class1: string;
  class2?: string;
}
