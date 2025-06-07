import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import Plugins from './pages/Plugins';
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
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NewAccount from './pages/NewAccount';
import ErrorBoundary from './pages/ErrorBoundary';
import { AuthProvider } from './dummyData/AuthContext';

const App = () => {
  // Public routes that don't require authentication
  const publicRoutes = [
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
      path: '/policy',
      element: <Policy />
    },
    {
      path: '/termofservice',
      element: <TermOfService />
    }
  ];

  // Protected routes that require authentication
  const protectedRoutes = [
    {
      path: '/upload',
      element: <Upload />
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
    }
  ];

  // Auth routes for login/signup
  const authRoutes = [
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/new-account',
      element: <NewAccount />
    }
  ];

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        ...publicRoutes,
        ...protectedRoutes,
        ...authRoutes
      ]
    }
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
