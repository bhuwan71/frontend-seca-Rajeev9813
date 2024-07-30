import React, {useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { IoIosPeople } from "react-icons/io";
import { FaSliders } from "react-icons/fa6";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import Logo from "../img/logo.png";
import { MdOutlineCategory } from "react-icons/md";

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
        <NavLink to="admin/dashboard">
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
                  to="admin/dashboard"
                  className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                    pathname.startsWith("admin/dashboard")
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
                  to="admin/courses"
                  className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                    pathname.startsWith("admin/jobs")
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
                  to="admin/category"
                  className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                    pathname.startsWith("admin/jobs")
                      ? "bg-[#EDE7F6]  text-[#5E35B1]"
                      : ""
                  }`}
                >
                  <MdOutlineCategory />
                  Category
                </NavLink>
              </li>
              <SidebarLinkGroup
                activeCondition={
                  pathname === "admin/users" || pathname.includes("users")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                          pathname.includes("chart") &&
                          "bg-black text-white dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <IoIosPeople size={24} />
                        Users
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      <div
                        className={`transition-max-height ${
                          !open ? "open" : ""
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/users/job-seekers"
                              className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                                pathname.startsWith("/users/employee-list")
                                  ? "bg-[#EDE7F6]  text-[#5E35B1]"
                                  : ""
                              }`}
                            >
                              Student
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="admin/users/employers"
                              className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                                pathname.startsWith("/users/customer-list")
                                  ? "bg-[#EDE7F6]  text-[#5E35B1]"
                                  : ""
                              }`}
                            >
                              Teacher
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
          <div>
            <hr className="border-none bg-[#EEF2F6] h-px mt-2 mb-2" />
            <h3 className="mb-2 text-sm font-semibold text-black">OTHERS</h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <NavLink
                  to="admin/assignment"
                  className={`group relative flex items-center gap-2.5 rounded-full pl-6 font-medium ease-in-out hover:bg-[#EDE7F6] py-2 hover:text-[#5E35B1] transition-colors ${
                    pathname.startsWith("/slider")
                      ? "bg-[#EDE7F6]  text-[#5E35B1]"
                      : ""
                  }`}
                >
                  <FaSliders size={24} />
                  Assignment
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
