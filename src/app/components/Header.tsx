"use client";
import "remixicon/fonts/remixicon.css";
import HeroSection from "./HeroSection";
import Arrow from "../assets/downArrow.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";
import Image from "next/image";
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
  const textArray = [
    "Frontend Developer🧑‍💻",
    "Designer🚀",
    "Coderrr😁",
    "Problem Solver😋",
    "Programmer✌️",
  ];
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
    <div id="reCoderr" className="relative w-full h-screen overflow-hidden">
      {/* Hero Section Navbar */}
      <HeroSection />

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center font-[AtlassianSans] text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase z-10 whitespace-nowrap">
          {displayText}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl whitespace-nowrap">
          / Coderr
        </h2>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <Link to="about" smooth={true} duration={1000}>
          <Image
            ref={ArrowRef}
            className="h-8 sm:h-10 md:h-12 w-auto cursor-pointer animate-bounce"
            src={Arrow}
            alt="Down Arrow"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
