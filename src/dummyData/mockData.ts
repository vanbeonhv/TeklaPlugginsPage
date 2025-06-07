import { dummyUsers as users } from './pluginData';

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

export const mockAuth = {
  getCurrentUser: () => {
    // For demo purposes, always return null to simulate no user logged in
    return null as User | null;
  },

  signIn: (email: string, password: string) => {
    // Find the user with the provided email
    const user = users.find(u => u.email === email);
    
    if (user) {
      // In a real app, we would verify the password here
      return Promise.resolve({
        id: user.uid,
        email: user.email,
        name: user.name,
        avatar: user.avatar
      });
    }
    
    return Promise.reject(new Error('Invalid email or password'));
  },

  signUp: (email: string, password: string) => {
    // In a real app, we would create a new user here
    const newUser = {
      id: 'new-user-' + Date.now(),
      email,
      name: email.split('@')[0],
      avatar: `https://i.pravatar.cc/150?u=${email}`
    };
    return Promise.resolve(newUser);
  },

  signOut: () => {
    return Promise.resolve();
  }
};
