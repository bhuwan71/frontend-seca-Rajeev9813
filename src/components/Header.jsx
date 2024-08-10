import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import DropdownUser from "./DropdownUser";

const Header = (props) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg dark:bg-gray-800">
      <div className="flex items-center justify-between py-3 px-6 md:px-8">
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
          <h1 className="font-bold font-serif">My Learning</h1>
        </div>
        {/* User Area */}
        <div className="flex items-center gap-4">
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
