import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  console.log("Olá")

  return (
    <Fragment>
      <Header /> 
      <Outlet />
    </Fragment>
  )
}

export default App;