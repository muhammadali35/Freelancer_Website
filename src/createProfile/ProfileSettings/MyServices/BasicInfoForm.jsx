import React from 'react';

const BasicInfoForm = () => {
  return (
    <div className="max-w-2xl mx-auto bg-gray-50 p-6 shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-6">Basic info</h2>

      {/* Service Title */}
      <div className="mb-4">
        <label htmlFor="serviceTitle" className="block text-sm font-medium mb-1">
          Service title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="serviceTitle"
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter title"
        />
      </div>

      {/* Categories and Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <label htmlFor="categories" className="block text-sm font-medium mb-1">
            Categories <span className="text-red-500">*</span>
          </label>
          <select
            id="categories"
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>Select an option</option>
            <option>AI Services</option>
            <option>AI Aplications</option>
            <option>AI Chatbot</option>
            {/* Add your category options here */}
          </select>
        </div>

        <div>
          <label htmlFor="languages" className="block text-sm font-medium mb-1">
            Languages <span className="text-red-500">*</span>
          </label>
          <select
            id="languages"
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>Select languages</option>
            <option>English</option>
            <option>Urdu</option>
            {/* Add your language options here */}
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          rows="6"
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter your description"
        ></textarea>
      </div>
    </div>
  );
};

export default BasicInfoForm;
