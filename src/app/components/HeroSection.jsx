"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

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

  const handleNavClick = (id) => {
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full p-4 sm:px-6 lg:px-8 pt-4 sm:pt-5 z-[3000]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/12 bg-[#050507]/72 px-4 py-3 sm:px-5 sm:py-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
        <Link
          to="reCoderr"
          smooth={true}
          duration={800}
          className="group flex cursor-pointer items-center gap-3"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/30 bg-white/5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200 transition-transform duration-300 group-hover:scale-105">
            V
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">Vikash Verma</span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.3em] text-slate-400">Full Stack Developer</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1.5">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              offset={-90}
              onClick={() => handleNavClick(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all cursor-pointer duration-300 ${
                activeSection === item.id
                  ? "text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.18)]"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="contact"
            offset={-90}
            className="inline-flex cursor-pointer items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:border-cyan-200/50 hover:bg-cyan-300/20 hover:text-white"
          >
            Let’s talk
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white cursor-pointer transition hover:bg-white/15 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <RxCross1 className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>

        <div
          className={`fixed inset-0 z-[1999] bg-black/55 transition-opacity duration-300 md:hidden ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <aside
          className={`fixed right-0 top-0 z-[2000] h-[100svh] w-[88vw] max-w-sm border-l border-white/12 bg-[#050507] px-5 py-6 text-white shadow-[0_0_80px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out md:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">Navigation</p>
              <p className="mt-2 text-lg font-semibold text-white">Menu</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white transition cursor-pointer hover:bg-white/15"
              aria-label="Close menu"
            >
              <RxCross1 className="text-lg" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-3">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.id}
                offset={-84}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-lg font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "border-cyan-300/35 bg-cyan-300/10 text-cyan-100"
                    : "border-white/10 bg-white/[0.03] text-white/85 hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs uppercase tracking-[0.28em] text-white/35">0{index + 1}</span>
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    </header>
  );
};

export default HeroSection;
