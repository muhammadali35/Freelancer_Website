import React from "react";
import OurStory from "./OurStory";
import Aboutimg from '../images/teamTop.png';
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className='flex items-center justify-center text-white h-[300px] md:h-[400px] lg:h-[400px]'
        style={{
          backgroundImage: `url(${Aboutimg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
        }}
      >
        <div className='text-center px-4 md:px-8'>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-4'>About</h1>
          <div className='flex justify-center items-center text-lg md:text-xl lg:text-2xl'>
            <Link to='/home' className="hover:underline">Home</Link>
            <MdKeyboardDoubleArrowRight className='h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 mx-2' />
            <h1 className='cursor-pointer'>About</h1>
          </div>
        </div>
      </div>
      
      {/* About Us Section */}
      <section className="bg-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left Side - Content */}
          <div className="md:w-1/2 text-left space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
              We are transforming the way healthcare hires
            </h1>
            <p className="text-base md:text-lg text-black">
              We bring innovation and professionalism to the healthcare industry, 
              providing specialized services to help streamline the hiring process 
              for healthcare professionals. With our expert team and cutting-edge 
              technology, we make it easier for healthcare providers to find the 
              talent they need while offering job seekers a seamless experience.
            </p>
            <p className="text-base md:text-lg text-black">
              Our goal is to redefine healthcare recruitment by providing efficient, 
              scalable, and cost-effective solutions that connect the best talent with 
              the right opportunities, ensuring a better future for the healthcare industry.
            </p>
          </div>

          {/* Right Side - Image or Design */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={require("../images/about.png")} 
              alt="Healthcare Transformation"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <OurStory />
      <Footer />
    </>
  );
};

export default About;
