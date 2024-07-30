import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoutes = () => {
  //get all user information
  const user = JSON.parse(localStorage.getItem('user'));

  //check if user is admin
  //check isAdmin = true
  //if true, access all the routes of admin ()
  //if false: Navigate to login

  return user != null && user.isAdmin ? <Outlet/>
  : <Navigate to="/login"/>

}

export default AdminRoutes;