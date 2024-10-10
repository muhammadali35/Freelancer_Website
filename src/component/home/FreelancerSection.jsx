import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import HeroVideo from '../videos/freelance.mp4'; // Add your video file path here
import { useNavigate } from 'react-router-dom';

const FreelancerSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);
  const navigate = useNavigate(); 

  const joinus = () => {
    navigate("/profile");
  };
  return (
    <div className="relative rounded-2xl overflow-hidden mb-10">
      {/* Video Background */}
      <video
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-96 object-cover opacity-80 bg-black" // Reduced video opacity
      >
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 text-white">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Start as a Freelancer</h2>
        <p className="mb-6 text-lg max-w-lg" data-aos="fade-up" data-aos-delay="200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis tincidunt metus.
        </p>
        <button onClick={joinus}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" 
          data-aos="fade-up" data-aos-delay="400"
        >
          Become Freelancer Now
        </button>
      </div>
    </div>
  );
};

export default FreelancerSection;
