import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  // Get all user information
  const user = JSON.parse(localStorage.getItem("adminData"));

  if (user === null) {
    // If no adminData, redirect to login page
    return <Navigate to="/admin/login" />;
  }
  if (user) {
    // If user is an admin, render the Outlet
    return <Outlet />;
  }
};

export default AdminRoutes;
