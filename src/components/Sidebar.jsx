import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import SidebarLinkGroup from "./SidebarLinkGroup";
// import { IoIosPeople } from "react-icons/io";
// import { FaSliders } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import Logo from "../img/logo.png";
import { FaSlidersH } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { RiUserAddLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { FaQuestion } from "react-icons/fa";
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute shadow-6 left-0 text-white top-0 z-9999 flex h-screen lg:w-[19%] flex-col overflow-y-hidden bg-[#000] duration-300 ease-linear dark:bg-[#000] lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/*">
          <img src={Logo} alt="Logo" className="w-40 h-25 mt-[-20px]  " />
        </NavLink>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar mt-[-60px] flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className=" px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-3">
              <li>
                <h2 className="mb-2 text-md font-semibold text-black">
                  Dashboard
                </h2>
                <NavLink
                  to="/admin/dashboard"
                  className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                    pathname.startsWith("/admin/dashboard")
                      ? "bg-[#EDE7F6]  text-[#5E35B1]"
                      : ""
                  }`}
                >
                  <IoSpeedometerOutline />
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/courses"
                  className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                    pathname.startsWith("/admin/courses")
                      ? "bg-[#EDE7F6]  text-[#5E35B1]"
                      : ""
                  }`}
                >
                  <MdWorkHistory />
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/users"
                  className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                    pathname.startsWith("/admin/users")
                      ? "bg-[#EDE7F6]  text-[#5E35B1]"
                      : ""
                  }`}
                >
                  <RiUserAddLine />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/faq"
                  className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                    pathname.startsWith("/admin/faq")
                      ? "bg-[#EDE7F6]  text-[#5E35B1]"
                      : ""
                  }`}
                >
                  <FaQuestion />
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <hr className="border-none bg-[#EEF2F6] h-px mt-2 mb-2" />
            <h3 className="mb-2 text-white text-sm font-semibold text-black">
              OTHERS
            </h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="/admin/quizzes"
                  className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                    pathname.startsWith("/admin/assignment")
                      ? "bg-[#EDE7F6]  text-[#5E35B1]"
                      : ""
                  }`}
                >
                  <FaSlidersH size={24} />
                  Quizzes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/staff"
                  className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                    pathname.startsWith("/admin/assignment")
                      ? "bg-[#EDE7F6]  text-[#5E35B1]"
                      : ""
                  }`}
                >
                  <GrUserManager size={24} />
                  Staff Management
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/classSchedule"
                  className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                    pathname.startsWith("/admin/classSchedule")
                      ? "bg-[#EDE7F6]  text-[#5E35B1]"
                      : ""
                  }`}
                >
                  <SiGoogleclassroom size={24} />
                  Class Schedule
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
