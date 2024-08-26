import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="relative shadow bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" /> */}
              <h1 className="text-white">Zentex</h1>
            </NavLink>

            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className=" text-gray-200 hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg bg-gray-800 ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            } lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-green-400" : "text-gray-200"
                  } px-3 py-2 mx-3 mt-2 lg:mt-0`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/meals"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-green-400" : "text-gray-200"
                  } px-3 py-2 mx-3 mt-2 lg:mt-0`
                }
              >
                Meals
              </NavLink>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-green-400" : "text-gray-200"
                  } px-3 py-2 mx-3 mt-2 lg:mt-0`
                }
              >
                About us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-green-400" : "text-gray-200"
                  } px-3 py-2 mx-3 mt-2 lg:mt-0`
                }
              >
                Contact us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
