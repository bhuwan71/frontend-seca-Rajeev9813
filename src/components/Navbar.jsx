import React, { useEffect, useState } from "react";
import { FaUserAlt, FaUserPlus } from "react-icons/fa"; // Import icons
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./utils/userSlice";
import "./Navbar.css"; // If you still have some custom styles
import logoImage from '../img/logo.png'

const Navbar = () => {
  const user = useSelector(store => store.user.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Get user data from local storage
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    dispatch(setUserData(JSON.parse(localStorage.getItem("user"))));
  }

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    toast.success("User Logged out");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <nav className="bg-black text-white shadow-lg z-50  w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <Link to="/" className="">
              <img
                src={logoImage}
                alt="Logo"
                className="h-[70px] w-[150px]"
              />
            </Link>
          </div>
          <ul className="flex space-x-4 text-xl font-semibold">
            <li>
              <Link to="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link to="/quizzes" className="text-white hover:text-gray-900">
                Quizzes
              </Link>
            </li>
            <li>
              <Link to="/courses" className="">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/career" className="">
                Career
              </Link>
            </li>
          </ul>
          {user ? (
            <div className="flex justify-center items-center gap-4">
              <Link to="/profile" className="flex text-black">
                <FaUserAlt className="mr-2" />
                {user?.firstName}
              </Link>
              <button className="p-2 px-4 bg-red-500 text-white rounded-lg" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="flex items-center bg-blue-600 text-black px-3 py-2 rounded-md hover:bg-blue-700 transition"
              >
                <FaUserAlt className="mr-2" />
                Log in
              </Link>
              <Link
                to="/register"
                className="flex items-center bg-green-600 text-black px-3 py-2 rounded-md hover:bg-green-700 transition"
              >
                <FaUserPlus className="mr-2" />
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;