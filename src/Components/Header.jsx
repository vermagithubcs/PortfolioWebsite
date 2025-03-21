import "remixicon/fonts/remixicon.css";
import HeroSection from "./HeroSection";
import GithubIcon from "../assets/Github.png";
import CSS from "../assets/css-3.png";
import figma from "../assets/figma.png";
import Html from "../assets/html.png";
import JS from "../assets/java-script.png";
import Node from "../assets/nodejs.png";
import { useEffect, useState } from "react";
const Header = () => {
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
    <div className="h-screen w-screen bg-white relative">
      {/* HeroSection Navbar  */}
      <HeroSection />
      <div className="text h-[90vh] font-[AtlassianSans] flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 m-auto">
        <div className="text-7xl uppercase">
          <h1 className="z-[1000] text-nowrap max-lg:text-[4.5vw]">
            {displayText}
          </h1>
        </div>
        <h1 className="text-5xl max-lg:text-[2vw]">/ Coderr</h1>
      </div>
    </div>
  );
};

export default Header;
