import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import ProductCard from './ProductCard';
import Products from './ProductDetail';

const ProductList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1-second animation duration
  }, []);

  return (
    <>
      <div className="ml-20 mt-20">
        <h1 className="text-black text-3xl font-bold">Trending Services</h1>
        <h1 className="mt-2 text-xl">Explore the best services that suit you</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-20 px-10 gap-10">
        {Products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button className="h-10 mb-10 w-40 bg-[#1F72F2] text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1F72F2] hover:border hover:border-[#1F72F2] mt-10 mx-auto block">
        Explore All Services
      </button>
    </>
  );
};

export default ProductList;