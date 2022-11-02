import { React, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom';
// import Navbar from '../Navbar';
import AppRoutes from 'config/routes';
import 'scss/index.scss';

const App = () => {

  return (
    <BrowserRouter>
      <Fragment>
        {/* <Navbar /> */}
        <AppRoutes />
      </Fragment>
    </BrowserRouter>
  )
}

export default App;