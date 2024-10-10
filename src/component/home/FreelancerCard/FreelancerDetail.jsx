import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../ProductDetail';
import { BsStarFill } from 'react-icons/bs';
import {FaWhatsapp, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
// import { IoLocationOutline } from 'react-icons/io5';
// import { MdLanguage } from 'react-icons/md';

// Left Side Card Component
const LeftSideCard = ({ product }) => (
  <div className="lg:w-1/3 bg-white shadow-md rounded-lg border-2 border-[#1F72F2] p-6">
    {/* Profile Image */}
    <img
      src={product.user.avatar}
      alt={product.user.name}
      className="w-32 h-32 rounded-full mx-auto"
    />
    <h2 className="text-2xl font-bold text-center mt-4">{product.user.name}</h2>

    {/* Profile Rating */}
    <div className="flex justify-center items-center mt-2">
      <BsStarFill className="w-5 h-5 text-yellow-500" />
      <span className="ml-2 text-gray-600">{product.rating} / 5</span>
    </div>

    {/* Contact Information */}
    <div className="mt-4 space-y-2 text-center">
      <p className="flex items-center justify-center gap-2">
        {product.user.phoneicon} {product.user.phone}
      </p>
      <p className="flex items-center justify-center gap-2">
        {product.user.emailicon} {product.user.email}
      </p>
      <p className="flex items-center justify-center gap-2">
        {product.user.locationicon} {product.user.city}
      </p>
      <p className="flex items-center justify-center gap-2">
        {product.user.languageicon} {product.user.languages.join(', ')}
      </p>
    </div>

    {/* Skills */}
    <div className="mt-6">
      <h3 className="text-lg font-bold text-center">Skills</h3>
      <ul className="list-disc mt-2 text-center flex gap-2">
        {product.user.skills.map((skill, index) => (
          <button
            className="h-10 w-40 bg-[#1F72F2] text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1F72F2] hover:border hover:border-[#1F72F2]"
            key={index}
          >
            {skill}
          </button>
        ))}
      </ul>
    </div>

    {/* Total Projects & Earnings */}
    <div className="mt-6 space-y-2 text-center">
      <p><strong>Total Projects:</strong> {product.user.totalProjects}</p>
      <p><strong>Total Earnings:</strong> {product.user.totalEarnings}</p>
    </div>

    {/* Social Media Links */}
    <div className="flex justify-center gap-4 mt-6">
      <a href={product.whatsapp} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="w-6 h-6 text-[#1F72F2]" />
      </a>
      <a href={product.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6 text-[#1F72F2]" />
      </a>
      <a href={product.github} target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6 text-[#1F72F2]" />
      </a>
      <a href={product.twitter} target="_blank" rel="noopener noreferrer">
        <FaTwitter className="w-6 h-6 text-[#1F72F2]" />
      </a>
    </div>

    {/* Send Message Button */}
    <button className="mt-6 w-full bg-[#1F72F2] text-white py-2 rounded-lg hover:bg-white hover:text-[#1F72F2] hover:border hover:border-[#1F72F2] transition-all">
      Send Message
    </button>
  </div>
);

// Right Side (Experience and Education) Component
const RightSideDetails = ({ product }) => (
  <div className="lg:w-2/3 bg-white shadow-md rounded-lg p-6 border-2 border-[#1F72F2]">
    {/* Work Experience */}
    <h3 className="text-2xl font-bold">Work Experience</h3>
    <div className="mt-4 space-y-4">
      <div className="p-4 bg-gray-100 rounded-md">
        <h4 className="font-bold text-lg">{product.workExperience.company}</h4>
        <p className="text-sm">{product.workExperience.role} - {product.workExperience.years}</p>
        <p className="text-sm mt-2">{product.workExperience.description}</p>
      </div>
    </div>

    {/* Education */}
    <h3 className="text-2xl font-bold mt-6">Education</h3>
    <div className="mt-4 space-y-4">
      <div className="p-4 bg-gray-100 rounded-md">
        <h4 className="font-bold text-lg">{product.education.degree}</h4>
        <p className="text-sm">{product.education.institution} - {product.education.years}</p>
      </div>
    </div>
  </div>
);

// Main Component
const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from the URL
  const userId = parseInt(id, 10); // Parse the ID to an integer

  // Fetch product data based on the user ID
  const product = Products.find((product) => product.id === userId); // Find the product based on the ID

  if (!product) {
    return <div>User profile not found.</div>; // Display this if no product is found
  }

  return (
    <div className="container mx-auto p-4 lg:px-20">
      {/* Main Layout: Left and Right Sections */}
      <div className="flex flex-col lg:flex-row mt-10 gap-10">
        <LeftSideCard product={product} />
        <RightSideDetails product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;