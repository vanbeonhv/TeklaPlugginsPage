import './App.css';

import { getDatabase, ref } from 'firebase/database';
import {
  RouterProvider,
  createBrowserRouter,
  useRouteError
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import Plugins from './pages/Plugins';
import app from '../firebase';
import PluginDetail from './pages/PluginDetail';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Upload from './pages/Upload';
import Policy from './pages/Policy';
import TermOfService from './pages/TermOfService';
import PostUpload from './pages/PostUpload';
import Dashboard from './pages/Dashboard';
import ReadingList from './pages/ReadingList';
import Settings from './pages/Settings';
import LoginLayout from './layouts/LoginLayout';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NewAccount from './pages/NewAccount';
import Test from './pages/Test';
import { getAuth } from 'firebase/auth';
import ErrorBoundary from './pages/ErrorBoundary';

const auth = getAuth(app);
const db = getDatabase();
const dbRef = ref(getDatabase());

const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <LandingPage />
        },
        {
          path: '/plugins',
          element: <Plugins />
        },
        {
          path: '/plugins/:id',
          element: <PluginDetail />
        },
        {
          path: '/pricing',
          element: <Pricing />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/upload',
          element: <Upload />
        },
        {
          path: '/policy',
          element: <Policy />
        },
        {
          path: '/termofservice',
          element: <TermOfService />
        },
        {
          path: '/post-upload',
          element: <PostUpload />
        },
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/reading-list',
          element: <ReadingList />
        },
        {
          path: '/settings',
          element: <Settings />
        },

        {
          path: '/test',
          element: <Test />
        }
      ],
      errorElement: <ErrorBoundary />
    },
    {
      element: <LoginLayout />,
      children: [
        {
          path: '/signup',
          element: <SignUp />
        },

        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/new-account',
          element: <NewAccount />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
