import React from 'react';
import { assets } from '../assets/assets'; // Make sure your new image exists in assets

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-[#fefefe]">
      {/* Left Content */}
      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left py-12 px-6 sm:px-12">
        <p className="text-sm text-gray-500 tracking-widest mb-2">NEW SEASON STYLES</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Discover Your Style<br /> This Summer
        </h1>
        <p className="text-md text-gray-600 mt-4 mb-6">
          Explore our latest collection of dresses, casuals, and accessories. Trendy &amp; elegant looks curated just for you.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition-all duration-200">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
     <div className="w-full sm:w-1/2 flex flex-col items-center justify-center py-10 px-6 sm:px-10 text-center bg-gradient-to-br from-pink-50 to-white">
        <p className="text-xl sm:text-2xl text-gray-600 italic">"Style is a way to say who you are without having to speak."</p>
        <hr className="my-6 w-16 border-pink-400" />
        <p className="text-lg text-gray-500">— DRESSIFY Studio</p>
      </div>
    </div>
  );
};

export default Hero;
