import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const UserRoutes = () => {
  //get user data from local storage 
  const user = JSON.parse(localStorage.getItem('user'));

  //check user if they are admin or not 
  return user != null ? <Outlet/> : <Navigate to="/login"/>;
}

export default UserRoutes;