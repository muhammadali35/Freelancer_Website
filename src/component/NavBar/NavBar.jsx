import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To track the current active route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate(); 

  const joinus = () => {
    navigate("/profile");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link to="/">Logo</Link>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className={`text-gray-300 hover:text-white ${
                  location.pathname === "/"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-gray-300 hover:text-white ${
                  location.pathname === "/about"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`text-gray-300 hover:text-white ${
                  location.pathname === "/services"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-gray-300 hover:text-white ${
                  location.pathname === "/contact"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Join Us Button for larger screens */}
        <div className="hidden md:flex">
          <button onClick={joinus} className="h-10 w-40 bg-[#1F72F2] text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1F72F2] hover:border hover:border-[#1F72F2]">
            Join Us
          </button>
        </div>
      </div>

      {/* Mobile Menu (only visible on small screens) */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-4">
          <Link
            to="/"
            className={`text-gray-300 hover:text-white ${
              location.pathname === "/" ? "bg-blue-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-gray-300 hover:text-white ${
              location.pathname === "/about" ? "bg-blue-500" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`text-gray-300 hover:text-white ${
              location.pathname === "/services"
                ? "bg-blue-500"
                : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`text-gray-300 hover:text-white ${
              location.pathname === "/contact"
                ? "bg-blue-500"
                : ""
            }`}
          >
            Contact
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Join Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;