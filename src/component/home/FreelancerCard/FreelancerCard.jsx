import React from "react";
import { BsStarFill } from "react-icons/bs";
import Products from "../ProductDetail";
import { Link } from "react-router-dom";

const product=Products;
console.log(product);

const FreelancerCard = ({ product }) => (
  
  <div className="bg-white shadow-md rounded-lg overflow-hidden border-2">
    <div className="p-4">
      <Link to={`/profile/${product.id}`}>
      <div className="flex items-center">
      <img src={product.user.avatar} alt="/" className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h3 className="text-lg font-medium">{product.user.name}</h3>
          <div className="flex items-center ">
          <BsStarFill className="w-4 h-4 text-yellow-500" />
            <span className="ml-2 text-gray-600">
              {product.rating}
            </span>
            <span className="mx-2 text-gray-600">•</span>
            <span className="text-gray-600">
              {product.user.profession}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2 text-black">
      <div className="flex gap-2 mt-2">
            <p className="text-sm">{product.user.locationicon}</p>
            <p>{product.user.city}</p>
          </div>
      <div className="flex gap-2 mt-2">
            <p className="text-sm">{product.user.languageicon}</p>
            <p>{product.user.languages}</p>
          </div>
   
        <p className="text-sm">{product.user.description}</p>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h4 className="text-lg font-medium">{product.user.services.join(", ")}</h4>
          <p className="text-sm">{product.user.servicesCount} services</p>
        </div>
        <div>
          <h4 className="text-lg font-medium">{product.user.price}</h4>
        </div>
      </div>
      </Link>
    </div>
  </div>
);

const Freelancerprofile = () => (
  <div className="w-full px-10 mt-10">
    <h2 className="text-lg font-bold mb-4">Freelancers</h2>
     <div className=" w-full grid grid-cols-3 gap-4">
    {product.map((Product) => (
      <FreelancerCard key={Product.user.name} product={Product} /> 
    ))}
    </div>
  </div>
);

export default Freelancerprofile;