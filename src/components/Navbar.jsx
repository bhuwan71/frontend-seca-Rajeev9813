/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FaUserAlt, FaUserPlus, FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./utils/userSlice";
import "./Navbar.css"; // If you still have some custom styles
import logoImage from '../img/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-lg z-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="">
              <img
                src={logoImage}
                alt="Logo"
                className="h-[100px] w-[150px]"
              />
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
          <ul className={`lg:flex lg:space-x-4 lg:text-xl lg:font-semibold ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <li className="lg:inline-block">
              <Link to="/" className="block py-2 lg:py-0">Home</Link>
            </li>
            <li className="lg:inline-block">
              <Link to="/quizzes" className="block py-2 lg:py-0 text-white hover:text-gray-900">
                Quizzes
              </Link>
            </li>
            <li className="lg:inline-block">
              <Link to="/courses" className="block py-2 lg:py-0">Courses</Link>
            </li>
            <li className="lg:inline-block">
              <Link to="/about-us" className="block py-2 lg:py-0">About Us</Link>
            </li>
            <li className="lg:inline-block">
              <Link to="/career" className="block py-2 lg:py-0">Career</Link>
            </li>
          </ul>
          {user ? (
            <div className="lg:flex lg:justify-center lg:items-center lg:gap-4 hidden lg:block">
              <Link to="/profile" className="flex text-black">
                <FaUserAlt className="mr-2" />
                {user?.firstName}
              </Link>
              <button className="p-2 px-4 bg-red-500 text-white rounded-lg" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="lg:flex lg:items-center lg:space-x-4 hidden lg:block">
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
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            {user ? (
              <div className="flex flex-col space-y-4 mt-4">
                <Link to="/profile" className="flex items-center text-black">
                  <FaUserAlt className="mr-2" />
                  {user?.firstName}
                </Link>
                <button className="p-2 px-4 bg-red-500 text-white rounded-lg" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-4 mt-4">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
