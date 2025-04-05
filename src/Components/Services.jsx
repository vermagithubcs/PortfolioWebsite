import React, { useEffect, useRef } from "react";
import coderr from "../assets/coderr.avif"
import designer from "../assets/designer.avif"
import problem from "../assets/problemsolver.avif"
import gsap from "gsap";

const Services = () => {
  return (
    <>
      <div id="services" className="max-h-auto max-lg:h-auto w-screen">
        <div>
          <h1 className="text-[8vw] text-center border border-b-black font-[AtlassianSans]">
            Services
          </h1>
        </div>
        <div className="flex max-md:flex-col items-center justify-around h-screen max-md:h-[150vh] border border-black">
          <div className="h-auto font-[TyproFace] flex items-center justify-center cursor-pointer w-1/4 max-md:w-1/2 relative">
            <img src={coderr} alt="Coderr" className=" w-full h-auto object-cover rounded-2xl" />
            <h1 className="text-[3.5vw] flex justify-center items-center text-white absolute">Coderr</h1>
          </div>
          <div className="h-auto font-[TyproFace] flex items-center justify-center cursor-pointer w-1/4 max-md:w-1/2  relative">
            <img src={designer} alt="Designer" className="w-full h-auto object-cover rounded-2xl" />
            <h1 className="text-[3.5vw] cursor-pointer absolute text-white">DesiGner</h1>
          </div>
          <div className="h-auto font-[TyproFace] flex items-center justify-center cursor-pointer w-1/4 max-md:w-1/2 relative">
            <img src={problem} alt="Problem Solver" className="w-full h-auto object-cover rounded-2xl" />
            <h1 className="text-[3vw] absolute text-white text-nowrap cursor-pointer">Problem Solver</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
