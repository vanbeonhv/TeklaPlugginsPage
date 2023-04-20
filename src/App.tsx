import React, { useEffect } from 'react';
import './App.css';
import useRouteElements from './pages/useRouteElements';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  equalTo,
  get,
  getDatabase,
  orderByChild,
  query,
  ref
} from 'firebase/database';
import { IUser } from './types/types';
import { json } from 'react-router-dom';

const auth = getAuth();
const db = getDatabase();
const dbRef = ref(getDatabase());

const App = () => {
  const routeElement = useRouteElements();

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log(parsedUser);
      //Chưa biết làm gì. Liệu có nên save to state không
    } else {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const queryUser = query(
            ref(db, 'users'),
            orderByChild('uid'),
            equalTo(uid)
          );

          let userFetch: IUser = {
            avatar: '',
            bio: '',
            createAt: 0,
            email: '',
            name: '',
            position: '',
            uid: '',
            plugin: {}
          };
          let userData;
          await get(queryUser)
            .then((snapshot) => {
              userFetch = snapshot.val();
              userData = Object.values(userFetch)[0];
              localStorage.setItem('userData', JSON.stringify(userData));
            })
            .catch((e) => console.log('errors:', e));
        } else {
          localStorage.removeItem('userData');
          console.log('user signed out!');
        }
      });
    }
  }, []);

  return <div>{routeElement}</div>;
};

export default App;
