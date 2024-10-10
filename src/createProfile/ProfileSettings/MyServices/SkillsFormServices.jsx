import React from 'react';

const SkillsFormServices = () => {
  return (
    <div className="max-w-2xl mx-auto bg-gray-50 p-6 mt-5 shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-6">Skills</h2>

      {/* Select Skills */}
      <div className="mb-4">
        <label htmlFor="skills" className="block text-sm font-medium mb-1">
          Select Skills
        </label>
        <select
          id="skills"
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option>Select skills</option>
          <option >Web Development</option>
          <option >UI/UX Design</option>
          <option >Digital Marketing</option>
          {/* Add your skills options here */}
        </select>
      </div>
    </div>
  );
};

export default SkillsFormServices;
