import React from "react";
import SocialNetwork from "./SocialNetwork";

const ProfileForm = () => {
  return (
    <>
    <div className="container mx-auto p-4 md:p-8 lg:p-12 bg-gray-50">
      <h2 className="text-xl font-bold mb-6">Basic Information</h2>
      
      {/* Upload Section */}
      <div className="flex gap-6 mb-6">
        <div className="mb-3">
          <label htmlFor="coverImage" className="block mb-1 font-medium">Your Image</label>
          <input
            type="file"
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            id="coverImage"
            name="coverImage"
          />
        </div>
      </div>
      
      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="First name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Last Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="youremail@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <div className="flex">
            <select className="border border-gray-300 rounded-l p-2">
              <option value="+92">+92</option>
              {/* Add more options */}
            </select>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-r"
              placeholder="Phone number"
            />
          </div>
        </div>
      </div>

      {/* Dropdowns for Position and Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-medium">Current Position</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g. UI/UX Designer"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Select an option</option>
            <option>Customer Support</option>
            <option>UI & UX Design</option>
            <option>Development & IT</option>
            {/* Add more options */}
          </select>
        </div>
      </div>

      {/* Description Field */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          rows="5"
          placeholder="Description..."
        ></textarea>
      </div>

      {/* Additional Info Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input type="date" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Age</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Select an option</option>
            <option>18 to 25</option>
            <option>25 to 30</option>
            {/* Add more options */}
          </select>
        </div>
      </div>

      {/* Gender and Language Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Select an option</option>
            <option>Male</option>
            <option>Female</option>
            {/* Add more options */}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Languages</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Select an option</option>
            <option>English</option>
            <option>Urdu</option>
            {/* Add more options */}
          </select>
        </div>
      </div>

      {/* Qualification and Experience Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-medium">Years of Experience</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Years of experience"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Currency</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>Select an option</option>
            <option>PKR</option>
            <option>USD</option>
            {/* Add more options */}
          </select>
        </div>
      </div>
    </div>
      <SocialNetwork/>

      <div className="flex justify-end space-x-4 mt-5">
          <button
           
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
          >
            Cancel
          </button>
          <button
          
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Publish
          </button>
        </div>
      </>
  );
};

export default ProfileForm;
