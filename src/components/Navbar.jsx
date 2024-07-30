import React from "react";
import { FaUserAlt, FaUserPlus } from "react-icons/fa"; // Import icons
import "./Navbar.css"; // If you still have some custom styles

const Navbar = () => {
  // Get user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="bg-black shadow-lg z-10 fixed w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="assets/images/logo.png"
              alt="Logo"
              className="h-10 w-28 bg-white rounded-full"
            />
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="text-white hover:text-gray-900">
                Courses
              </a>
            </li>
            <li>
              <a href="/about-us" className="text-white hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="/career" className="text-white hover:text-gray-900">
                Career
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            {/* <select className="border border-gray-300 rounded-lg py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="en">English (United States)</option>
              <option value="fr">Français (France)</option>
              <option value="es">Español (España)</option>
              <option value="de">Deutsch (Deutschland)</option>
            </select> */}
            <a
              href="/login"
              className="flex items-center bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
            >
              <FaUserAlt className="mr-2" />
              Log in
            </a>
            <a
              href="/register"
              className="flex items-center bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition"
            >
              <FaUserPlus className="mr-2" />
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
