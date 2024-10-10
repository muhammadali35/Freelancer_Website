import { useState } from 'react';
// Import React Icons
import { AiOutlineDown, AiOutlineUp, AiFillDelete, AiOutlinePlusSquare } from 'react-icons/ai';

const EducationForm = () => {
  const [educations, setEducations] = useState([
    { degree: '', institution: '', present: false, from: '', to: '', description: '', expanded: true }
  ]);

  // Function to add a new education entry
  const addEducation = () => {
    setEducations([
      ...educations,
      { degree: '', institution: '', present: false, from: '', to: '', description: '', expanded: true }
    ]);
  };

  // Function to handle input change
  const handleInputChange = (index, field, value) => {
    const newEducations = [...educations];
    newEducations[index][field] = value;
    setEducations(newEducations);
  };

  // Function to remove an education entry
  const removeEducation = (index) => {
    const newEducations = educations.filter((_, i) => i !== index);
    setEducations(newEducations);
  };

  // Function to toggle the education form open/close
  const toggleExpand = (index) => {
    const newEducations = [...educations];
    newEducations[index].expanded = !newEducations[index].expanded;
    setEducations(newEducations);
  };

  return (
    <div className="p-2 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h5 className="text-3xl font-semibold mb-4 text-center">Education</h5>
        <p className="text-gray-500 text-center mb-8">We recommend at least one education entry.</p>

        {educations.map((education, index) => (
          <div key={index} className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h6 className="text-xl font-bold">
                Education {index + 1}
              </h6>
              <div className="flex items-center">
                {education.expanded ? (
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
                <AiFillDelete
                  className="text-red-500 cursor-pointer ml-4"
                  size={20}
                  onClick={() => removeEducation(index)}
                />
              </div>
            </div>

            {education.expanded && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Degree</label>
                    <input
                      type="text"
                      placeholder="Enter Degree"
                      value={education.degree}
                      onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                      className="mt-1 block h-10 w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Institution</label>
                    <input
                      type="text"
                      placeholder="Enter Institution"
                      value={education.institution}
                      onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
                      className="mt-1 block w-full h-10 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={education.present}
                      onChange={(e) => handleInputChange(index, 'present', e.target.checked)}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Currently studying</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">From</label>
                    <input
                      type="text"
                      placeholder="F j, Y"
                      value={education.from}
                      onChange={(e) => handleInputChange(index, 'from', e.target.value)}
                      className="mt-1 block w-full h-10 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {!education.present && (
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700">To</label>
                      <input
                        type="text"
                        placeholder="F j, Y"
                        value={education.to}
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
                    value={education.description}
                    onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="flex justify-center">
          <button
            onClick={addEducation}
            className="text-indigo-600 text-sm mt-4 flex items-center hover:text-indigo-900"
          >
            <AiOutlinePlusSquare className="mr-2" size={20} />
            Add another education
          </button>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-md mr-2">Cancel</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">Publish</button>
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
