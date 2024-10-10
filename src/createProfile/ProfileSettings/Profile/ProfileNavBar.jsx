import React, { useState } from 'react'
import ExperienceForm from './ExperienceForm'
import EducationForm from './EducationForm';
import SkillsForm from './SkillsForm';
import ProfileForm from './ProfileForm';
const ProfileNavBar = () => {
    const [activeTab, setActiveTab] = useState('Basic Info');

    const tabs = ['Basic Info', 'Education', 'Experience', 'Skills'];
  
    return (
      <div className="w-full p-6 ">
        <h1 className="text-2xl font-semibold mb-4">Profile Settings</h1>
        <div className="flex space-x-4 border-b border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-lg font-medium ${
                activeTab === tab
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-6">
          {/* Conditionally render content based on the active tab */}
          {activeTab === 'Basic Info' && <div><ProfileForm/></div>}
          {activeTab === 'Education' && <div>
           <EducationForm/>
            </div>}
          {activeTab === 'Experience' && <div> <ExperienceForm/></div>}
          {activeTab === 'Skills' && <div><SkillsForm/></div>}
        </div>
      </div>
  )
}

export default ProfileNavBar