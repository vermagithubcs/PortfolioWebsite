"use client";
import Image from "next/image";
import React from "react";
import Brainitix from "../assets/Brainitix.png";
import DevSummit from "../assets/DevSummit.png";
import GTA from "../assets/Gta6.png";
const Work = () => {
  return (
    <>
      <div id="works" className="w-screen h-auto py-8 border-b-2 border-black">
        {/* Title Section */}
        <div className="text-center border border-black">
          <h1 className="text-[8vw] font-[AtlassianSans]">Work</h1>
        </div>

        {/* Images Section */}
        <div className="works flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center mt-8 p-6">
          <Image
            className="w-84 h-auto rounded-2xl object-cover"
            src={Brainitix}
            alt="Brainitix"
          />
          <Image
            className="w-84 h-auto rounded-2xl object-cover"
            src={DevSummit}
            alt="DevSummit2025"
          />
          <Image
            className="w-84 h-auto rounded-2xl object-cover"
            src={GTA}
            alt="GTA6"
          />
        </div>
      </div>
    </>
  );
};

export default Work;
