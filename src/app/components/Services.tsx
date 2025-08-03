'use client'
import React from "react";

const Services = () => {
  return (
    <>
      <div id="services" className="w-screen min-h-screen px-4 py-8 bg-gray-100">
  {/* Section Heading */}
  <div>
    <h1 className="text-[8vw] text-center border-b-2 border-black font-[AtlassianSans] mb-8">
      Services
    </h1>
  </div>

  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Frontend Development */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
      <h2 className="text-xl font-semibold text-blue-600">Frontend Development</h2>
      <p className="mt-2 text-gray-600">Building responsive and performant interfaces using React, JavaScript, and Tailwind CSS.</p>
    </div>

    {/* Animation Website (GSAP) */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
      <h2 className="text-xl font-semibold text-green-600">GSAP Animations</h2>
      <p className="mt-2 text-gray-600">Smooth animations and scroll-based transitions using GreenSock Animation Platform (GSAP).</p>
    </div>

    {/* Spline 3D Integration */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
      <h2 className="text-xl font-semibold text-purple-600">Spline 3D Integration</h2>
      <p className="mt-2 text-gray-600">Embedding interactive 3D models into websites using Spline and React.</p>
    </div>

    {/* Three.js Web Experience */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
      <h2 className="text-xl font-semibold text-yellow-600">Three.js Web Experiences</h2>
      <p className="mt-2 text-gray-600">Creating immersive 3D experiences using Three.js and WebGL inside your frontend apps.</p>
    </div>

    {/* Skipper UI Components */}
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
      <h2 className="text-xl font-semibold text-rose-600">Skipper UI Styling</h2>
      <p className="mt-2 text-gray-600">Crafting beautiful UIs using pre-styled Skipper UI components for fast development.</p>
    </div>
  </div>
</div>

    </>
  );
};

export default Services;
