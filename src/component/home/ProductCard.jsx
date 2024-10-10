import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FiHeart } from 'react-icons/fi';
import { BsStarFill } from 'react-icons/bs';

const ProductCard = ({ product }) => {
  return (
    <div
      className="border rounded-lg shadow-md mb-10 mt-10 w-full sm:w-72 lg:w-80 relative border-yellow-400 cursor-pointer"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {product.featured && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-white text-sm px-2 py-1 rounded">
          Featured
        </div>
      )}
      <div className="absolute top-2 right-2">
        <FiHeart className="w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500" />
      </div>
      <Link to={`/product/${product.id}`}>
        {/* Link wrapping the image and info */}
        <img src={product.image} alt="Product" className="w-full h-40 object-cover rounded-lg" />
        <div className="mt-3 p-4">
          <p className="text-sm text-black">{product.category}</p>
          <h2 className="font-semibold text-lg mt-1">{product.title}</h2>
          <p className="text-sm text-black mt-2">From {product.price}</p>
        </div>
      </Link>
      <div className="flex items-center mt-3 p-4">
        <img src={product.user.avatar} alt={product.user.name} className="w-8 h-8 rounded-full" />
        <p className="ml-2 text-blue-500 cursor-pointer">{product.user.name}</p>
      </div>
      <hr />
      <div className="flex items-center justify-between mt-3 text-sm p-4">
        <div className="flex items-center">
          <BsStarFill className="w-5 h-5 text-yellow-500" />
          <span className="ml-1">{product.rating} ({product.reviews})</span>
        </div>
        <p>{product.deliveryTime} delivery</p>
      </div>
    </div>
  );
};

export default ProductCard;