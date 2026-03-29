"use client";
import "remixicon/fonts/remixicon.css";
import HeroSection from "./HeroSection";
import Arrow from "../assets/downArrow.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";

const textArray = [
  "Frontend Developer🧑‍💻",
  "Designer🚀",
  "Coderrr😁",
  "Problem Solver😋",
  "Programmer✌️",
];

const Header = () => {
  const ArrowRef = useRef(null);
  
  useEffect(() => {
    gsap.to(ArrowRef.current, {
      y: 3,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
  
  const [displayText, setDisplayText] = useState("Frontend Developer🧑‍💻");

  useEffect(() => {
    const changeText = () => {
      const randomIndex = Math.floor(Math.random() * textArray.length);
      setDisplayText(textArray[randomIndex]);
    };
    changeText();
    const timer = setInterval(changeText, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="reCoderr" className="relative w-full min-h-[100svh] overflow-hidden bg-transparent">
      {/* Hero Section Navbar */}
      <HeroSection />

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center font-[AtlassianSans] text-center px-4 sm:px-6 pt-16 sm:pt-20">
        <h1 className="text-[10vw] min-[380px]:text-[11vw] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase z-10 leading-[1.08] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] max-w-[92vw] sm:max-w-none">
          {displayText}
        </h1>
        <h2 className="text-base min-[380px]:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 sm:mt-4 text-cyan-300/90">
          / Coderr
        </h2>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-5 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <Link to="about" smooth={true} duration={1000}>
          <Image
            ref={ArrowRef}
            className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto cursor-pointer animate-bounce brightness-0 invert"
            src={Arrow}
            alt="Down Arrow"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
