import React, { useState } from "react";

const CoverImageUpload = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12 max-w-2xl mt-5 bg-gray-50 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Cover Image</h2>
      <div>
        <label className="block mb-1 text-gray-700">Cover image</label>
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg h-48 flex flex-col justify-center items-center cursor-pointer"
          onClick={() => document.getElementById("fileInput").click()}
        >
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <div className="text-center">
            <svg
              className="h-8 w-8 text-gray-400 mx-auto mb-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <p className="text-blue-600">
              <span className="underline">Click here</span> or drop files to upload
            </p>
          </div>
        </div>
        {fileName && <p className="text-sm mt-2 text-gray-600">{fileName}</p>}
        <p className="text-gray-400 text-sm mt-2">
          The cover image size should be max 1920 x 400px
        </p>
      </div>
    </div>
  );
};

export default CoverImageUpload;
