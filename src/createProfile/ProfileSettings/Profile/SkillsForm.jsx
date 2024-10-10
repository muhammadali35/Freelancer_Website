import React, { useState } from 'react';

const SkillsForm = () => {
  const [selectedSkill, setSelectedSkill] = useState('');
  const [skillsList, setSkillsList] = useState([]);

  const handleAddSkill = () => {
    if (selectedSkill && !skillsList.includes(selectedSkill)) {
      setSkillsList([...skillsList, selectedSkill]); // Add skill to the list
      setSelectedSkill(''); // Clear the selection
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkillsList(skillsList.filter(item => item !== skill)); // Remove skill from the list
  };

  const handlePublish = () => {
    // Publish action logic
    console.log('Published skills:', skillsList);
  };

  const handleCancel = () => {
    // Cancel action logic
    setSkillsList([]); // Clear the skills list
    console.log('Action cancelled');
  };

  return (
    <div className="flex justify-center items-center  bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full mt-10 mb-10 max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
        <p className="text-gray-500 mb-4">We recommend selecting at least one skill entry</p>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="skills">
            Select <span className="text-blue-600">Skills</span>
          </label>
          <select
            id="skills"
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select skill</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Tailwind CSS">Tailwind CSS</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
            {/* Add more options */}
          </select>
          <button
            onClick={handleAddSkill}
            className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Skill
          </button>
        </div>

        {/* Display the list of added skills */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Selected Skills:</h3>
          <ul className="list-disc list-inside">
            {skillsList.map((skill, index) => (
              <li key={index} className="flex justify-between items-center mb-1">
                {skill}
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={handleCancel}
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
          >
            Cancel
          </button>
          <button
            onClick={handlePublish}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
