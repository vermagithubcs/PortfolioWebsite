"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import gsap from "gsap";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const humRef = useRef(null);
  const textRef = useRef([]);
  const tl = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(()=>{
      if(tl.current) return;
    gsap.set(humRef.current, { x: "100%" });
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(humRef.current, {
      x: "0%",
      duration: 0.5,
      ease: "power2.inOut",
    });
    if(!tl.current) return;
    const text = textRef.current.children;
    tl.current.from(text, {
      y: -20,
      duration: 0.5,
      opacity: 0,
      stagger: 0.3,
      ease: "power1.inOut",
    });
    })
    return ()=> ctx.revert();
  }, []);

  const toggleMenu = () => {
    if (!tl.current) return;
    const next = !open;
    setOpen(next);
    if (next) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  };
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="fixed left-0 z-[2000] w-full h-30 px-10 flex items-center justify-between bg-gray-50">
        {/* Logo */}
        <div className="text-5xl uppercase font-semibold cursor-pointer">
          <Link to="reCoderr" smooth={true} duration={800}>
            Vikash
          </Link>
        </div>

        {/* humburger Menu  */}
        <div
          onClick={toggleMenu}
          className="hum relative z-[1000] bg-black hover:bg-black/90 p-4 rounded-full text-white"
        >
          {open ? (
            <FiMenu className="cursor-pointer text-4xl" />
          ) : (
            <FiMenu className="cursor-pointer text-4xl" />
          )}
        </div>
        {open && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-[999]"
          />
        )}
        {/* Desktop Menu */}
        <div
          ref={humRef}
          className="fixed h-screen w-96 top-0 right-0 bg-black text-white z-[1000]"
        >
          <ul className="p-5">
            <RxCross1
              onClick={toggleMenu}
              className="text-5xl cursor-pointer"
            />
            <div
              ref={textRef}
              className="flex flex-col gap-10 px-10 py-10 justify-start h-screen text-5xl uppercase text-nowrap"
            >
              <Link
                onClick={() => scrollToSection("reCoderr")}
                className="text cursor-pointer font-semibold hover:text-gray-400"
              >
                <h1>Home</h1>
              </Link>
              <Link
                onClick={() => scrollToSection("about")}
                className="text cursor-pointer font-semibold hover:text-gray-400"
              >
                About
              </Link>
              <Link
                onClick={() => scrollToSection("techStack")}
                className="text cursor-pointer font-semibold hover:text-gray-400"
              >
                Skills
              </Link>
              <Link
                onClick={() => scrollToSection("works")}
                className="text cursor-pointer font-semibold hover:text-gray-400"
              >
                Projects
              </Link>
              <Link
                onClick={() => scrollToSection("services")}
                className="text cursor-pointer font-semibold hover:text-gray-400"
              >
                Services
              </Link>
              <Link
                onClick={() => scrollToSection("contact")}
                className="text cursor-pointer font-semibold hover:text-gray-400"
              >
                Contact us
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
