import React from 'react';
import { BsStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const FreelancerProfile = ({ product }) => {


  return (
    <>
      <div className="border border-gray-400 mt-20 p-5 rounded-lg w-[20rem] h-[20rem]">
        <div className="flex space-x-4">
          <div>
            <img className="w-16 h-16 rounded-full" src={product.user.avatar} alt={product.user.name} />
          </div>
          <div className="pt-2">
            <h3>{product.user.name}</h3>
            <h4 className="text-gray-400">{product.category}</h4>
          </div>
        </div>

        {/* Detail */}
        <div className="mt-5 text-black">
          <div className="flex gap-2 mt-2">
            <BsStarFill className="w-4 h-4 text-yellow-500" />
            <span className="ml-2 text-gray-600">{product.rating}</span>
          </div>
          <div className="flex gap-2 mt-2">
            <p className="text-sm">{product.user.locationicon}</p>
            <p>{product.user.city}</p>
          </div>
          <div className="flex gap-2 mt-2">
            <p className="text-sm">{product.user.languageicon}</p>
            <p>{product.user.languages}</p>
          </div>
          <div className="flex gap-2 mt-2">
            <p className="text-sm">{product.user.phoneicon}</p>
            <p>{product.user.phone}</p>
          </div>
          <div className="flex gap-2 mt-2">
            <p className="text-sm">{product.user.emailicon}</p>
            <p>{product.user.email}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex space-x-3 py-2'>
        <Link to={`/profile/${product.id}`}><button  className='px-5 py-2 rounded-2xl bg-blue-600 text-white'>View Profile</button></Link>

          <button className='px-5 py-2 rounded-2xl bg-blue-600 text-white'>
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default FreelancerProfile;