import React from "react";
import { useParams } from "react-router-dom";
import Products from "./ProductDetail";
import FreelancerProfile from "./FreelancerProfile";

const ProductDisplay = () => {
  const { id } = useParams(); 
  const productId = parseInt(id, 10);
  const product = Products.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
  
    <div className="p-4 sm:p-6 md:p-10">

      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left side content */}
        <div className="w-full lg:w-[70%] mb-6 lg:mb-0">
          <h1 className="text-2xl sm:text-[29px] font-bold">{product.title}</h1>
          <h3 className="mt-2">
            by <span className="text-blue-500">Freelancer</span>
          </h3>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 sm:h-72 md:h-96 object-cover mt-4"
          />
          {/* Image thumbnails */}
          <div className="flex gap-4 flex-wrap mt-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-[45%] md:w-[205px] h-20 md:h-28 object-cover"
            />
            <img
              src={product.image}
              alt={product.title}
              className="w-[45%] md:w-[205px] h-20 md:h-28 object-cover"
            />
            <img
              src={product.image}
              alt={product.title}
              className="w-[45%] md:w-[205px] h-20 md:h-28 object-cover"
            />
            <img
              src={product.image}
              alt={product.title}
              className="w-[45%] md:w-[205px] h-20 md:h-28 object-cover"
            />
          </div>

          {/* Descriptions */}
          <div className="py-6">
            <h1 className="text-lg md:text-2xl">Descriptions</h1>
            <p className="text-justify mt-2 text-sm md:text-base">
              OverviewSed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo...
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h1 className="text-lg md:text-2xl">Skills</h1>
            <div className="flex flex-wrap gap-2 md:space-x-4">
              <button className="px-4 py-2 md:px-9 md:py-2 rounded-2xl bg-gray-300">Digital</button>
              <button className="px-4 py-2 md:px-9 md:py-2 rounded-2xl bg-gray-300">Digital</button>
              <button className="px-4 py-2 md:px-9 md:py-2 rounded-2xl bg-gray-300">Digital</button>
            </div>
          </div>
        </div>

        {/* Right side - Freelancer Profile */}
        <div className="w-full lg:w-[28%]">
          <FreelancerProfile product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;