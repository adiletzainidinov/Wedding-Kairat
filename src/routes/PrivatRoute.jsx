import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivatRoute = ({ component, fallbackPath, isWelding }) => {
  if (isWelding) {
    return component;
  }

  return <Navigate to={fallbackPath} />;
};

export default PrivatRoute;