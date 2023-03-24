// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';
// import.meta.env.REACT_APP_API_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBQ3AHosYoEkmE - wcCI0JaqRHkvoQvx9qA',
  authDomain: 'book-manager-719e6.firebaseapp.com',
  databaseURL:
    'https://book-manager-719e6-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'book-manager-719e6',
  storageBucket: 'book-manager-719e6.appspot.com',
  messagingSenderId: '164489247465',
  appId: '1:164489247465:web:ef23c2e69ab19d28070e78',
  measurementId: 'G-BWK34TVB4E'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase(app);
export default app;
