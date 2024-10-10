import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurStory = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Image */}
        <div
          className="md:w-1/2 mb-8 md:mb-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            src={require('../images/story.png')} // Replace with your image URL
            alt="About Us"
            className="w-full h-auto md:h-[430px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div
          className="md:w-1/2 text-left space-y-6"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {/* First Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Story</h2>
          {/* Second Heading */}
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">Us and the Rest</h3>
          {/* Paragraph */}
          <p className="text-lg md:text-xl text-gray-600">
            We are a dynamic team driven by innovation, focused on bridging the gap between technology and human needs. Our passion sets us apart from the rest.
          </p>
          {/* Explore More Button */}
          <div>
            <button className="h-10 w-40 bg-[#1F72F2] text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1F72F2] hover:border hover:border-[#1F72F2]">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
