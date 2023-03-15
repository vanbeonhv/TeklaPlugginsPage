import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import PluginDetail from './pages/PluginDetail';
import Plugins from './pages/Plugins';
import Pricing from './pages/Pricing';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/plugins' element={<Plugins />} />
      <Route path='/plugins/:id' element={<PluginDetail />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default App;
