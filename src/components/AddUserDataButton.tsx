import React from 'react';
import Button from './Button';
import { child, getDatabase, push, ref } from 'firebase/database';
import { IUser } from '../types/types';

//Component to add new user info to database

const AddUserDataButton = ({ uid }: { uid: string }) => {
  const db = getDatabase();
  const userInfor: IUser = {
    avatar: 'https://api.multiavatar.com/default-user.png',
    bio: 'This is a test user',
    createAt: Date.now(),
    email: 'testuser@yahoo.com',
    name: 'test user',
    position: 'test user',
    uid: uid,
    plugin: {}
  };

  const handleClick = () => {
    push(child(ref(db), 'users'), userInfor)
      .then(() => console.log('Added user to database'))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Button btnType='btn-primary' type='button' onClick={handleClick}>
      Add user
    </Button>
  );
};

export default AddUserDataButton;
