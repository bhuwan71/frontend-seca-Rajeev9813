import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import DropdownUser from "./DropdownUser";

const Header = (props) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg dark:bg-gray-800">
      <div className="flex items-center justify-between py-4 px-6 md:px-8">
        {/* Logo and Hamburger Toggle */}
        <div className="flex items-center gap-4">
          {/* Hamburger Toggle BTN */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="lg:hidden text-gray-800 dark:text-white focus:outline-none"
          >
            {props.sidebarOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
        {/* User Area */}
        <div className="flex items-center gap-4">
          <DropdownUser />
          <button className="hidden lg:flex items-center text-gray-800 dark:text-white focus:outline-none">
            <FaUserCircle className="text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
