import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaUser,
  FaBriefcase,
  FaSignOutAlt,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className={`bg-blue-700 h-svh p-4 text-white transform transition-transform ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="flex justify-between items-center mb-8">
        <div className="text-xl font-bold">
          <i className="fas fa-bars"></i>
          {isOpen && " Felan"}
        </div>
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </div>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="flex items-center hover:bg-blue-600 p-2 rounded">
          <FaTachometerAlt className="mr-3 text-2xl  md:text-3xl" /> {/* Increased icon size */}
          {isOpen && " Dashboard"}
        </Link>
        <Link to="/profile" className="flex items-center hover:bg-blue-600 p-2 rounded">
          <FaUser className="mr-3 text-2xl md:text-3xl" /> {/* Increased icon size */}
          {isOpen && " Profile"}
        </Link>
        <Link to="/myservices" className="flex items-center hover:bg-blue-600 p-2 rounded">
          <FaBriefcase className="mr-3 text-2xl md:text-3xl" /> {/* Increased icon size */}
          {isOpen && " My Services"}
        </Link>
        <Link to="/logout" className="flex items-center hover:bg-blue-600 p-2 rounded">
          <FaSignOutAlt className="mr-3 text-2xl md:text-3xl" /> {/* Increased icon size */}
          {isOpen && " Logout"}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
