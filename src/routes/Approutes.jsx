import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PrivatRoute from './PrivatRoute';
import MainPage from '../pages/MainPage';
import { useSelector } from 'react-redux';

const Approutes = () => {
  const { isWelding } = useSelector((state) => state.welding);

  const router = createBrowserRouter([
    {
     path: '/',
      element: (<PrivatRoute component={<MainPage />} fallbackPath={'/'} isWelding={!isWelding} />),
    },
    {
     path: '/',
    //   element: (<PrivatRoute component={<MainPage />} fallbackPath={'/'} isWelding={!isWelding} />),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approutes;
