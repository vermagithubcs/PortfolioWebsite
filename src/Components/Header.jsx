import "remixicon/fonts/remixicon.css";
import HeroSection from "./HeroSection";
import Arrow from "../assets/downArrow.png"
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";
const Header = () => {
  const ArrowRef = useRef(null);
  useEffect(()=>{
    gsap.to(ArrowRef.current,{
      y:3,
      duration: .6,
      repeat:-1,
      yoyo: true,
      ease: "power1.inOut"
    })
  },[])
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
    <div id="reCoderr" className="h-screen w-screen bg-white relative">
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
      <div className="downArroww">
        <Link to="about" smooth={true} duration={1000}>
        <img  ref={ArrowRef} className="h-12 max-md:h-6 max-md:top-[50%] w-auto cursor-pointer absolute left-1/2 top-[60%]" src={Arrow} alt="Down Arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
