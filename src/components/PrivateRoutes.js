import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoutes;
