import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../../../assets/logo/logo1.png";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import useAdmin from "../../../customHooks/useAdmin";
import { FaCartPlus } from "react-icons/fa";
import useAddedItemData from "../../../customHooks/useAddedItemData";
import Loading from "../../Loading/Loading";

const NavBar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [addedData, refetch, isLoading] = useAddedItemData();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  console.log(addedData);

  // logout user
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "you are log out now",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // nav links
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/bikes">Bikes</NavLink>
      </li>
      <li>
        <NavLink to="/cycles">Cycles</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {isAdmin && (
        <li>
          <NavLink to="/dashboard/admin-home">Dashboard</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <>
          <li>
            <NavLink to="/dashboard/user-dashboard">Dashboard</NavLink>
          </li>
          <li>
            <Link to="/dashboard/added-items">
              <span className="badge badge-secondary">
                <FaCartPlus />
                <span className="ml-2"> {addedData.length}</span>
              </span>
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 fixed bg-opacity-25 z-30 md:max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <img className="w-12" src={logoImg} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {/* dark light mode  */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleToggle}
            className="theme-controller"
            checked={theme === "light" ? false : true}
          />

          {/* sun icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        <div className="ml-2">
          {user ? (
            <>
              <div ref={dropdownRef} className="relative inline-block">
                <div
                  className="w-10 rounded-full"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img className="rounded-full" alt="" src={user?.photoURL} />
                </div>

                {/* Dropdown menu */}
                {isOpen && (
                  <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                    <Link
                      to="/user-profile"
                      className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <img
                        className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                        src={user?.photoURL}
                        alt="jane avatar"
                      />
                      <div className="mx-1">
                        <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                          {user?.displayName}
                        </h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {user?.email}
                        </p>
                      </div>
                    </Link>

                    <hr className="border-gray-200 dark:border-gray-700" />

                    <Link
                      to="/user-profile"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      View Profile
                    </Link>
                    <a
                      href="#"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Settings
                    </a>

                    <hr className="border-gray-200 dark:border-gray-700" />

                    <Link
                      to="/about"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Company Details
                    </Link>

                    <a
                      onClick={handleLogout}
                      href="#"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Sign Out
                    </a>
                  </div>
                )}
              </div>

              {/* <button onClick={handleLogout} className="btn btn-sm btn-outline">
                Log Out
              </button> */}
            </>
          ) : (
            <button className="btn btn-sm btn-outline">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
