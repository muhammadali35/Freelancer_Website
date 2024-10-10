import React from 'react'
import BasicInfoForm from './BasicInfoForm'
import SkillsFormServices from './SkillsFormServices'
import CoverImageUpload from './CoverImageUpload'

const MyServices = () => {
  return (
    <div>
        <BasicInfoForm/>
        <SkillsFormServices/>
        <CoverImageUpload/>

        <div className="flex justify-center mb-5 space-x-4 mt-5">
          <button
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Post Service
          </button>
        </div>
    </div>
  )
}

export default MyServices