import { dummyUsers as users } from './pluginData';

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
}

// Default test accounts that can be used to login
const testAccounts = [
  {
    email: 'john.smith@example.com',
    password: 'test123',
    name: 'John Smith',
    avatar: 'https://i.pravatar.cc/150?img=12'
  }
];

export const mockAuth = {
  getCurrentUser: () => {
    // For demo purposes, always return null to simulate no user logged in
    return null as User | null;
  },

  signIn: (email: string, password: string) => {
    // First check the test accounts
    const testAccount = testAccounts.find((account) => account.email === email && account.password === password);
    if (testAccount) {
      return Promise.resolve({
        id: 'test-' + testAccount.email,
        email: testAccount.email,
        name: testAccount.name,
        avatar: testAccount.avatar
      });
    }

    // Then check the regular users
    const user = users.find((u) => u.email === email);
    if (user) {
      // In a real app, we would verify the password here
      // For demo, accept any password
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
