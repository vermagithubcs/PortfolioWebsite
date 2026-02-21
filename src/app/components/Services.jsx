'use client'
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full min-h-screen bg-gray-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-[AtlassianSans]">
          What I Know?
        </h1>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {/* Frontend Development */}
        <div className="bg-white p-6 sm:p-8 w-full h-auto min-h-[240px] sm:min-h-[260px] flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 text-center cursor-pointer">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-600">Frontend Engineer</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Building responsive, scalable websites using React.js, Next.js and TailwindCSS.
          </p>
        </div>

        {/* Animation Website (GSAP) */}
        <div className="bg-white p-6 sm:p-8 w-full h-auto min-h-[240px] sm:min-h-[260px] flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 text-center cursor-pointer">
          <h2 className="text-xl sm:text-2xl font-semibold text-green-600">GSAP Animations</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Building smooth websites using GSAP animation library.
          </p>
        </div>

        {/* Three.js Web Experience */}
        <div className="bg-white p-6 sm:p-8 w-full h-auto min-h-[240px] sm:min-h-[260px] flex flex-col items-center justify-center rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 text-center cursor-pointer">
          <h2 className="text-xl sm:text-2xl font-semibold text-yellow-600">Three.js Model</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Creating immersive 3D experiences using Three.js and WebGL inside your frontend apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
