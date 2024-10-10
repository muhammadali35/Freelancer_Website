import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-bold mb-4 text-lg">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition">Writing & Translation</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Technology & Programming</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Design</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Video, Photo & Image</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Digital Marketing</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Social Media</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">About</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Career</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Blogs</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">FAQ's</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Jobs</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Freelancers</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Employers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Support</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Terms of Use</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Help Center</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Updates</a></li>
              <li><a href="/" className="hover:text-blue-400 transition">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-lg">Connect</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <a href="/" className="text-white mr-2 hover:text-blue-400 transition">
                  <FaLinkedin className="text-lg" />
                </a>
                <span>LinkedIn</span>
              </li>
              <li className="flex items-center">
                <a href="/" className="text-white mr-2 hover:text-blue-400 transition">
                  <FaTwitter className="text-lg" />
                </a>
                <span>Twitter</span>
              </li>
              <li className="flex items-center">
                <a href="/" className="text-white mr-2 hover:text-blue-400 transition">
                  <FaFacebookF className="text-lg" />
                </a>
                <span>Facebook</span>
              </li>
              <li className="flex items-center">
                <a href="/" className="text-white mr-2 hover:text-blue-400 transition">
                  <FaInstagram className="text-lg" />
                </a>
                <span>Instagram</span>
              </li>
              <li className="flex items-center">
                <a href="/" className="text-white mr-2 hover:text-blue-400 transition">
                  <FaYoutube className="text-lg" />
                </a>
                <span>YouTube</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-6 border-t border-gray-800">
          <div className="text-white text-sm">&copy; 2024 RiceTheme. All Rights Reserved.</div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="/" className="text-white hover:text-blue-400 transition">English</a>
            <a href="/" className="text-white hover:text-blue-400 transition">USD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
