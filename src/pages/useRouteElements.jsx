import React from 'react';
import { useRoutes } from 'react-router-dom';
import LandingPage from './LandingPage';
import MainLayout from 'src/layouts/MainLayout';
import Plugins from './Plugins';
import PluginDetail from './PluginDetail';
import Pricing from './Pricing';
import About from './About';
import SignUp from './SignUp';
import Login from './Login';
import LoginLayout from 'src/layouts/LoginLayout';

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <LandingPage />
        </MainLayout>
      )
    },

    {
      path: '/plugins',
      element: (
        <MainLayout>
          <Plugins />
        </MainLayout>
      )
    },
    {
      path: '/plugins/:id',
      element: (
        <MainLayout>
          <PluginDetail />
        </MainLayout>
      )
    },
    {
      path: '/pricing',
      element: (
        <MainLayout>
          <Pricing />
        </MainLayout>
      )
    },
    {
      path: '/about',
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      )
    },

    {
      path: '/signup',
      element: (
        <MainLayout>
          <SignUp />
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <LoginLayout>
          <Login />
        </LoginLayout>
      )
    }
  ]);
  return routeElements;
};

export default useRouteElements;
