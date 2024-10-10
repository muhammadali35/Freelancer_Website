import React from "react";

const SocialNetwork = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-5 mt-5 bg-gray-50 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Social Network</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-4">
        {/* Twitter */}
        <div>
          <label className="block mb-1 text-gray-700">Twitter</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="twitter.com/freelancer"
          />
        </div>

        {/* Linkedin */}
        <div>
          <label className="block mb-1 text-gray-700">Linkedin</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="linkedin.com/freelancer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        {/* Facebook */}
        <div>
          <label className="block mb-1 text-gray-700">Facebook</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="facebook.com/freelancer"
          />
        </div>

        {/* Instagram */}
        <div>
          <label className="block mb-1 text-gray-700">Instagram</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="instagram.com/freelancer"
          />
        </div>
      </div>

      
    </div>
  );
};

export default SocialNetwork;
