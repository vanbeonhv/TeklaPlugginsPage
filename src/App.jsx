import React from 'react';
import './App.css';
import useRouteElements from './pages/useRouteElements';

const App = () => {
  const routeElement = useRouteElements();
  return (
    <div className='scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      {routeElement}
    </div>
  );
};

export default App;
