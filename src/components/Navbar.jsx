import React, { useEffect, useState } from "react";
import { FaUserAlt, FaUserPlus } from "react-icons/fa"; // Import icons
import "./Navbar.css"; // If you still have some custom styles
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { toast } from "react-toastify";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

=======
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./utils/userSlice";


const Navbar = () => {
  const user = useSelector(store => store.user.userData)
>>>>>>> 4818a34177d275dad19ef3f644b53320f14a8295
  const navigate = useNavigate();
  const dispatch = useDispatch();

<<<<<<< HEAD
  // Print Hello!, when page load (Automatic)
=======

>>>>>>> 4818a34177d275dad19ef3f644b53320f14a8295
  useEffect(() => {
    // Get user data from local storage
<<<<<<< HEAD
    setLoggedInUser(JSON.parse(localStorage.getItem("user")));
    // console.log(loggedInUser)
    // trigger testAPI
    // testApi().then((res) => {
    //   console.log(res); // Test api is working!
    // });
  }, []);
  // const user = JSON.parse(localStorage.getItem("user"));
=======
    fetchUserData();
>>>>>>> 4818a34177d275dad19ef3f644b53320f14a8295

  },[]);

  const fetchUserData = ()=>{
    dispatch(setUserData(JSON.parse(localStorage.getItem("user"))));

  }
  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    toast.success("User Loggedout");
    // window.location.href = "/login";
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
<<<<<<< HEAD
    <nav className="bg-black shadow-lg z-50 fixed w-full">
=======
    <nav className="bg-blue-50 shadow-lg  z-10 fixed w-full">
>>>>>>> 4818a34177d275dad19ef3f644b53320f14a8295
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center ">
            <img
              src="assets/images/logo.png"
              alt="Logo"
<<<<<<< HEAD
              className="h-[70px] w-full max-w-[200px] md:max-w-[150px] lg:max-w-[100px]"
            />

          <ul className="flex space-x-4">
=======
              className="h-[70px] w-[150px]"
            />
          </div>
          <ul className="flex space-x-4 text-xl font-semibold ">
>>>>>>> 4818a34177d275dad19ef3f644b53320f14a8295
            <li>
              <a href="/dashboard" className="text-black hover:text-gray-900">
                Dashboard
              </a>
            </li>
            <li>
<<<<<<< HEAD
              <a href="/quizzes" className="text-white hover:text-gray-900">
                Quizzes
              </a>
            </li>
            <li>
              <a href="/courses" className="text-white hover:text-gray-900">
=======
              <a href="/courses" className="text-black hover:text-gray-900">
>>>>>>> 4818a34177d275dad19ef3f644b53320f14a8295
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
<<<<<<< HEAD
          {loggedInUser ? (
            <Link to={"/profile"}>
              <div className="flex  justify-center items-center gap-4">
                <div className="flex">
                  <FaUserAlt className="mr-2" />
                  {loggedInUser?.firstName}
                </div>
=======
          {user ? (
              <Link to={"/profile"}><div className="flex  justify-center items-center gap-4 ">
                <div className="flex text-black"><FaUserAlt className="mr-2 " />
                {user?.firstName}</div>
>>>>>>> 4818a34177d275dad19ef3f644b53320f14a8295

                <button
                  className="p-2 px-4 bg-red-500 text-white rounded-lg"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </Link>
          ) : (
            <div className="flex items-center space-x-4">
              {/* <select className="border border-gray-300 rounded-lg py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="en">English (United States)</option>
              <option value="fr">Français (France)</option>
              <option value="es">Español (España)</option>
              <option value="de">Deutsch (Deutschland)</option>
            </select> */}
<<<<<<< HEAD
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
          )}
=======
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
>>>>>>> 4818a34177d275dad19ef3f644b53320f14a8295
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
