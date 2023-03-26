import React from 'react';
import './App.css';
import useRouteElements from './pages/useRouteElements';

const App = () => {
  const routeElement = useRouteElements();
  return <div>{routeElement}</div>;
};

export default App;
