'use client'
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 z-0">
      {/* Section Heading */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-[AtlassianSans] text-white">
          What I Know?
        </h1>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
        {/* Frontend Development */}
        <div className="bg-white/5 border border-white/12 p-6 sm:p-8 w-full h-auto min-h-[240px] sm:min-h-[260px] flex flex-col items-center justify-center rounded-xl shadow-md shadow-black/40 hover:shadow-cyan-500/10 hover:scale-105 transition duration-300 text-center cursor-pointer">
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-300">Full Stack Developer</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Building responsive, scalable websites using MERN + Next.js.
          </p>
        </div>

        {/* Animation Website (GSAP) */}
        <div className="bg-white/5 border border-white/12 p-6 sm:p-8 w-full h-auto min-h-[240px] sm:min-h-[260px] flex flex-col items-center justify-center rounded-xl shadow-md shadow-black/40 hover:shadow-cyan-500/10 hover:scale-105 transition duration-300 text-center cursor-pointer">
          <h2 className="text-xl sm:text-2xl font-semibold text-emerald-300">GSAP Animations</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Building smooth websites using GSAP animation library.
          </p>
        </div>

        {/* Three.js Web Experience */}
        <div className="bg-white/5 border border-white/12 p-6 sm:p-8 w-full h-auto min-h-[240px] sm:min-h-[260px] flex flex-col items-center justify-center rounded-xl shadow-md shadow-black/40 hover:shadow-cyan-500/10 hover:scale-105 transition duration-300 text-center cursor-pointer">
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-300">Figma Designer</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Creating Amazing Web Design for portfolio websites and brand websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
