import React, { useEffect } from "react";
import { FaUserAlt, FaUserPlus } from "react-icons/fa"; // Import icons
import "./Navbar.css"; // If you still have some custom styles
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./utils/userSlice";


const Navbar = () => {
  const user = useSelector(store => store.user.userData)
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    // Get user data from local storage
    fetchUserData();
  // eslint-disable-next-line
  },[]);

  const fetchUserData = ()=>{
    dispatch(setUserData(JSON.parse(localStorage.getItem("user"))));

  }
  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    toast.success("User Loggedout");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-blue-50 shadow-lg  z-10 fixed w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <img
              src="assets/images/logo.png"
              alt="Logo"
              className="h-[70px] w-[150px]"
            />
          </div>
          <ul className="flex space-x-4 text-xl font-semibold ">
            <li>
              <a href="/dashboard" className="text-black hover:text-gray-900">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/courses" className="text-black hover:text-gray-900">
                Courses
              </a>
            </li>
            <li>
              <a href="/about-us" className="text-black hover:text-gray-900">
                About Us
              </a>
            </li>
            <li>
              <a href="/career" className="text-black hover:text-gray-900">
                Career
              </a>
            </li>
          </ul>
          {user ? (
              <Link to={"/profile"}><div className="flex  justify-center items-center gap-4 ">
                <div className="flex text-black"><FaUserAlt className="mr-2 " />
                {user?.firstName}</div>

                <button className="p-2 px-4 bg-red-500 text-white rounded-lg" onClick={handleLogout}>Logout</button>
                
              </div>
              </Link>
          ):
          (
          <div className="flex items-center space-x-4">
            {/* <select className="border border-gray-300 rounded-lg py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="en">English (United States)</option>
              <option value="fr">Français (France)</option>
              <option value="es">Español (España)</option>
              <option value="de">Deutsch (Deutschland)</option>
            </select> */}
            <a
              href="/login"
              className="flex items-center bg-blue-600 text-black px-3 py-2 rounded-md hover:bg-blue-700 transition"
            >
              <FaUserAlt className="mr-2" />
              Log in
            </a>
            <a
              href="/register"
              className="flex items-center bg-green-600 text-black px-3 py-2 rounded-md hover:bg-green-700 transition"
            >
              <FaUserPlus className="mr-2" />
              Sign up
            </a>
          </div>)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
