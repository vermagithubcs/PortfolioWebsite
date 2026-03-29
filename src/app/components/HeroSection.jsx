"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import gsap from "gsap";

const navItems = [
  { id: "reCoderr", label: "Home" },
  { id: "about", label: "About" },
  { id: "techStack", label: "Skills" },
  { id: "works", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("reCoderr");
  const humRef = useRef(null);
  const textRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (tl.current) return;
      gsap.set(humRef.current, { x: "100%" });
      tl.current = gsap.timeline({ paused: true });
      tl.current.to(humRef.current, {
        x: "0%",
        duration: 0.45,
        ease: "power2.inOut",
      });
      if (!textRef.current) return;
      const text = textRef.current.children;
      tl.current.from(text, {
        y: -20,
        duration: 0.4,
        opacity: 0,
        stagger: 0.08,
        ease: "power1.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.45,
      }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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
  const handleNavClick = (id) => {
    setActiveSection(id);
    if (open) {
      toggleMenu();
    }
  };

  return (
    <>
      <div className="fixed left-0 z-[2000] w-full px-4 sm:px-10 py-4 sm:py-6 flex items-center justify-between bg-black/65 backdrop-blur-xl border-b border-white/10">
        {/* Logo */}
        <div className="text-2xl sm:text-4xl uppercase font-semibold cursor-pointer tracking-tight text-white">
          <Link to="reCoderr" smooth={true} duration={800}>
            Vikash
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 uppercase text-sm lg:text-base">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={700}
              offset={-80}
              onClick={() => handleNavClick(item.id)}
              className={`cursor-pointer tracking-wide transition-colors ${
                activeSection === item.id ? "text-cyan-300" : "text-white/85 hover:text-cyan-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* humburger Menu  */}
        <div
          onClick={toggleMenu}
          className="hum relative z-[1000] md:hidden bg-white/10 hover:bg-white/20 p-3 rounded-full text-white border border-white/20 transition"
          aria-label="Toggle menu"
        >
          {open ? <RxCross1 className="cursor-pointer text-2xl" /> : <FiMenu className="cursor-pointer text-2xl" />}
        </div>
        {open && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-[999]"
          />
        )}

        {/* Mobile Menu */}
        <div
          ref={humRef}
          className="fixed h-screen w-full sm:w-96 top-0 right-0 bg-[#060709] text-white z-[1000] border-l border-white/10 md:hidden"
        >
          <ul className="p-5">
            <RxCross1
              onClick={toggleMenu}
              className="text-4xl cursor-pointer"
            />
            <div
              ref={textRef}
              className="flex flex-col gap-7 px-4 sm:px-8 py-10 justify-start h-screen text-3xl sm:text-4xl uppercase"
            >
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={700}
                  offset={-70}
                  onClick={() => handleNavClick(item.id)}
                  className={`cursor-pointer font-semibold transition-colors ${
                    activeSection === item.id ? "text-cyan-300" : "text-white hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
