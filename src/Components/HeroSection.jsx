import React, { useEffect, useRef, useState } from "react";
import Hero from "../assets/MainImage.avif";
import MainText from "./MainText";
import BottomText from "./BottomText";
import { gsap } from "gsap";
import menuBar from "../assets/menu.png";
const HeroSection = () => {
  const[isOpen, setIsOpen] = useState(false);
  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="h-20 fixed top-0 left-0 z-1000 w-screen flex items-center justify-around">
        <div className="logo text-3xl bg-black text-white hover:bg-white hover:text-black h-16 rounded-2xl hover:border-2 hover:border-black w-40 flex items-center justify-center cursor-pointer max-md:text-[4vw]">
          <h1>reCoderr</h1>
        </div>
        <div className="text">
          <div className="menubar">
          <img onClick={toggleMenu} className={`h-10 lg:hidden cursor-pointer transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-90' : 'rotate-0'}`} src={menuBar} alt="Menu Bar" />
          </div>
          <ul className="flex gap-16 rounded-xl bg-black text-white w-auto hover:bg-white hover:text-black cursor-pointer hover:border-2 hover:border-black text-3xl font-mono overflow-hidden max-lg:hidden">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Works</li>
            <li className="cursor-pointer">Contact us</li>
            <li className="cursor-pointer">Services</li>
          </ul>
        <div className={` lg:hidden absolute top-20 right-0 text-center h-96 z-[1000] bg-gray-400 w-full border flex flex-col items-center justify-around rounded-2xl p-3 border-black space-y-2 ${isOpen ? 'block' : 'hidden'}`}>
                <a href="#" className="block h-16  w-80 text-[3.5vw] rounded hover:bg-black hover:text-white">Home</a>
                <a href="#" className="block h-16  w-80 text-[3.5vw] rounded  hover:bg-black hover:text-white">About</a>
                <a href="#" className="block h-16  w-80 text-[3.5vw] rounded  hover:bg-black hover:text-white">Works</a>
                <a href="#" className="block h-16  w-80 text-[3.5vw] rounded  hover:bg-black hover:text-white">Contact us</a>
                <a href="#" className="block h-16  w-80 text-[3.5vw] rounded  hover:bg-black hover:text-white">Services</a>
            </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
