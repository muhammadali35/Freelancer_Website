import { useState } from 'react';
// Import React Icons
import { AiOutlineDown, AiOutlineUp, AiFillDelete, AiOutlinePlusSquare } from 'react-icons/ai';

const ExperienceForm = () => {
  const [experiences, setExperiences] = useState([
    { jobTitle: '', company: '', present: false, from: '', to: '', description: '', expanded: true }
  ]);

  // Function to add a new experience
  const addExperience = () => {
    setExperiences([
      ...experiences,
      { jobTitle: '', company: '', present: false, from: '', to: '', description: '', expanded: true }
    ]);
  };

  // Function to handle input change
  const handleInputChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  // Function to remove an experience
  const removeExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
  };

  // Function to toggle the experience form open/close
  const toggleExpand = (index) => {
    const newExperiences = [...experiences];
    newExperiences[index].expanded = !newExperiences[index].expanded;
    setExperiences(newExperiences);
  };

  return (
    <div className="p-2 bg-gray-50">
      {/* Main div that wraps everything */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h5 className="text-3xl font-semibold mb-4 text-center">Experience</h5>
        <p className="text-gray-500 text-center mb-8">We recommend at least one experience entry.</p>

        {experiences.map((experience, index) => (
          <div key={index} className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
            {/* Experience Header with Toggle and Delete Icons */}
            <div className="flex justify-between items-center mb-4">
              <h6 className="text-xl font-bold">
                Experience {index + 1}
              </h6>
              <div className="flex items-center">
                {/* Toggle open/close icon */}
                {experience.expanded ? (
                  <AiOutlineUp 
                    className="text-gray-500 cursor-pointer"
                    size={20}
                    onClick={() => toggleExpand(index)}
                  />
                ) : (
                  <AiOutlineDown 
                    className="text-gray-500 cursor-pointer"
                    size={20}
                    onClick={() => toggleExpand(index)}
                  />
                )}
                {/* Delete icon */}
                <AiFillDelete
                  className="text-red-500 cursor-pointer ml-4"
                  size={20}
                  onClick={() => removeExperience(index)}
                />
              </div>
            </div>

            {/* Form for each experience, only visible when expanded */}
            {experience.expanded && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                      type="text"
                      placeholder="Enter Job Title"
                      value={experience.jobTitle}
                      onChange={(e) => handleInputChange(index, 'jobTitle', e.target.value)}
                      className="mt-1 block h-10 w-full  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                      type="text"
                      placeholder="Enter Company"
                      value={experience.company}
                      onChange={(e) => handleInputChange(index, 'company', e.target.value)}
                      className="mt-1 block w-full h-10  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={experience.present}
                      onChange={(e) => handleInputChange(index, 'present', e.target.checked)}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Choose at the present time</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">From</label>
                    <input
                      type="text"
                      placeholder="F j, Y"
                      value={experience.from}
                      onChange={(e) => handleInputChange(index, 'from', e.target.value)}
                      className="mt-1 block w-full h-10 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {!experience.present && (
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700">To</label>
                      <input
                        type="text"
                        placeholder="F j, Y"
                        value={experience.to}
                        onChange={(e) => handleInputChange(index, 'to', e.target.value)}
                        className="mt-1 block w-full h-10 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    placeholder="Short description"
                    value={experience.description}
                    onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                    className="mt-1 block w-full   border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Add experience button */}
        <div className="flex justify-center">
          <button
            onClick={addExperience}
            className="text-indigo-600 text-sm mt-4 flex items-center hover:text-indigo-900"
          >
            <AiOutlinePlusSquare className="mr-2" size={20} />
            Add another experience
          </button>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex justify-end">
          <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-md mr-2">Cancel</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Publish</button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;
