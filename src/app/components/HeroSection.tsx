import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="fixed top-6 left-0 z-[1000] w-full h-20 px-4 flex items-center justify-between bg-transparent">
        {/* Logo */}
        <div className="logo text-xl md:text-3xl font-semibold bg-black text-white hover:bg-white hover:text-black h-16 w-32 md:w-40 flex items-center justify-center rounded-2xl border-2 border-transparent hover:border-black transition">
          <Link to="reCoderr" smooth={true} duration={800}>
            Vikash
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-lg font-mono">
          {["about", "works", "services", "contact"].map((section) => (
            <li
              key={section}
              className="px-4 py-2 bg-black text-white rounded-xl hover:bg-white hover:text-black hover:border-2 hover:border-black transition cursor-pointer"
            >
              <Link to={section} smooth={true} duration={800}>
                {section === "contact"
                  ? "Contact us"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        {/* Resume Download Link  */}
        <li>
    <a
      href="/resume.pdf"
      target="_blank"
      download
      className="px-4 py-2 rounded-xl bg-green-600 text-white  hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition cursor-pointer"
    >
      Get Resume
    </a>
  </li>
        </ul>



        {/* Mobile Menu Icon - only visible on small screens */}
        <div className="block lg:hidden z-[1001]">
          <Menu
            onClick={toggleMenu}
            className={`h-8 w-8 text-black transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-24 right-4 left-4 bg-white shadow-lg rounded-xl border border-black p-4 flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out z-[999] lg:hidden">
            {["reCoderr", "about", "works", "services", "contact"].map(
              (section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={800}
                  className="w-full text-center py-2 text-base font-medium hover:bg-black hover:text-white rounded transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {section === "reCoderr"
                    ? "Home"
                    : section === "contact"
                    ? "Contact us"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              )
            )}
            <li>
    <a
      href="/resume.pdf"
      target="_blank"
      download
      className="px-4 py-2 rounded-xl bg-green-600 text-white  hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 transition cursor-pointer"
    >
      Get Resume
    </a>
  </li>
          </div>
        )}
      </div>
    </>
  );
};

export default HeroSection;
