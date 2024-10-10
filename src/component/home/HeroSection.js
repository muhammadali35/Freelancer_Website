import React, { useEffect } from 'react';
import heroimg from '../images/hero-img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='bg-white flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-5 md:px-20'>
      {/* Text Section */}
      <div className='mt-10 lg:mt-40' data-aos='fade-up'>
        <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold'>
          Hire top <span className='text-[#1F72F2]'>freelancers</span> <br /> for your project.
        </h1>
        <h1 className='mt-5 text-lg lg:text-xl'>
          Find the perfect freelancer and start your project today!
        </h1>
        <div className='flex flex-col lg:flex-row items-start lg:items-center mt-5'>
          <button className='h-10 w-40 bg-[#1F72F2] text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1F72F2] hover:border hover:border-[#1F72F2]'>
            Hire top talent
          </button>
          <h1 className='ml-0 mt-3 lg:ml-7 lg:mt-0'>or</h1>
          <h1 className='ml-0 mt-2 lg:ml-5 lg:mt-0 border-b-[1px] border-black cursor-pointer'>
            Start working as a freelancer
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className='mt-10 lg:mt-20 lg:ml-44' data-aos='fade-left'>
        <img src={heroimg} alt="hero" className='w-full max-w-xs sm:max-w-sm lg:max-w-md' />
      </div>
    </div>
  );
};

export default HeroSection;
