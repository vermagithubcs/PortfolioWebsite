import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Netflix from "../assets/Netflix.jpg";
import Twitter from "../assets/Twitter.jpg";
import Working from "../assets/Working.jpg";
import Learning from "../assets/Learing.jpg";
const Work = () => {
  return (
    <>
      <div id="works" className="h-auto w-screen">
        <div className="text-center border border-black">
          <h1 className="text-[8vw] font-[AtlassianSans]">Work</h1>
        </div>
        <div className="h-[60vh] max-md:h-[30vh] w-full flex flex-col justify-center">
        <div className="h-auto w-full flex flex-col items-center justify-evenly text-[3vw] font-[AtlassianSans] text-nowrap">
            <a href="https://netflix-clone-website-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-white hover:bg-black hover:h-32 hover:w-1/2 hover:text-center hover:flex hover:items-center hover:justify-center hover:rounded-xl">Netflix</a>
            <h1 className="cursor-pointer hover:text-white hover:bg-black hover:h-32 hover:w-1/2 hover:text-center hover:flex hover:items-center hover:justify-center hover:rounded-xl">Twitter</h1>
            <h1 className="cursor-pointer hover:text-white hover:bg-black hover:h-32 hover:w-1/2 hover:text-center hover:flex hover:items-center hover:justify-center hover:rounded-xl">Admin.Dashboard</h1>
            <h1 className="cursor-pointer hover:text-white hover:bg-black hover:h-32 hover:w-1/2 hover:text-center hover:flex hover:items-center hover:justify-center hover:rounded-xl">Social Media Clone</h1>
        </div>
        </div>
      </div>
    </>
  );
};

export default Work;
