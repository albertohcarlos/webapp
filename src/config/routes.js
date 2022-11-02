import { Route, Routes, Navigate } from 'react-router-dom';
import React, { Fragment } from 'react';

import Home from 'app/screens/Home';
import Search from 'app/screens/Search';
import Details from 'app/screens/Details';

const AppRoutes = () => {
  return (< Fragment>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/items' element={<Search />} />
      <Route path='/items/:id' element={<Details />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  </Fragment>
  );
}

export default AppRoutes;