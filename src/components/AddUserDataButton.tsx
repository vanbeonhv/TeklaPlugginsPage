import React from 'react';
import Button from './Button';
import { IUser } from '../types/types';

//Component to add new user info to local storage

const AddUserDataButton = ({ uid }: { uid: string }) => {
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
    try {
      // Get existing users or initialize empty array
      const usersData = JSON.parse(localStorage.getItem('users') ?? '[]');
      
      // Add new user
      usersData.push(userInfor);
      
      // Save back to localStorage
      localStorage.setItem('users', JSON.stringify(usersData));
      console.log('Added user to local storage');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <Button btnType='btn-primary' type='button' onClick={handleClick}>
      Add user
    </Button>
  );
};

export default AddUserDataButton;
