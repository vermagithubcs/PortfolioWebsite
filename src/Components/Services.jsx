import React, { useEffect, useRef } from "react";
import coderr from "../assets/coderr.avif";
import designer from "../assets/designer.avif";
import problem from "../assets/problemsolver.avif";
import gsap from "gsap";

const Services = () => {
  const imageRefs = useRef([]);
  const onhandleEnter = (index) => {
    gsap.to(imageRefs.current[index], {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const onhandleLeave = (index) => {
    gsap.to(imageRefs.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const images = [coderr, designer, problem];
  const hoverText = ["coderrr", "desiGner", "Problem Solver"]
  return (
    <>
      <div id="services" className="max-h-auto max-lg:h-auto w-screen">
        <div>
          <h1 className="text-[8vw] text-center border border-b-black font-[AtlassianSans]">
            Services
          </h1>
        </div>
        <div className="flex flex-row max-lg:flex-col items-center justify-around min-h-screen md:h-auto p-6 gap-6 border border-black">
          {images.map((src, index) => (
            <div
              key={index}
              ref={(e) => (imageRefs.current[index] = e)}
              onMouseEnter={() => onhandleEnter(index)}
              onMouseLeave={() => onhandleLeave(index)}
              className="relative group w-60 md:w-80 h-auto cursor-pointer object-cover"
            >
              <img
                src={src}
                alt={`Image ${index}`}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-opacity-60 text-white flex items-center justify-center text-lg font-semibold rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-3xl">
                {hoverText[index]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
