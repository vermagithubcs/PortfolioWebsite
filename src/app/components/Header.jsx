"use client";
import "remixicon/fonts/remixicon.css";
import HeroSection from "./HeroSection";
import { Link } from "react-scroll";
import { ChevronDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const textArray = [
  "Frontend Developer",
  "UI Engineer",
  "Design Builder",
  "Problem Solver",
  "Motion Crafter",
];

const heroStats = [
  { value: "3+", label: "Years building interfaces" },
  { value: "20+", label: "Projects shipped" },
  { value: "100%", label: "Focus on clean UX" },
];

const focusAreas = ["Next.js", "GSAP", "Tailwind CSS", "Figma"];

const Header = () => {
  const [displayText, setDisplayText] = useState(textArray[0]);

  useEffect(() => {
    const changeText = () => {
      const randomIndex = Math.floor(Math.random() * textArray.length);
      setDisplayText(textArray[randomIndex]);
    };
    changeText();
    const timer = setInterval(changeText, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="reCoderr" className="relative w-full min-h-screen overflow-visible pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20">

      <HeroSection />

      <main className="relative -top-6 mx-auto flex w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-10">
        <div className="grid w-full items-start gap-7 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs sm:text-sm uppercase tracking-[0.26em] text-cyan-100/90">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Available for freelance work!
            </div>

            <h1 className="mt-4 font-[AtlassianSans] text-4xl sm:text-5xl md:text-6xl lg:text-[4.3rem] xl:text-[4.9rem] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white">
              Full Stack Web Apps and
              <span className="block text-cyan-300 drop-shadow-[0_0_24px_rgba(34,211,238,0.22)]">
                digital products.
              </span>
            </h1>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link
                to="works"
                offset={-90}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-600 border border-white/15"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                to="contact"
                offset={-90}
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/90 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/10 hover:text-white"
              >
                Let’s Talk
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-slate-200/90"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
                >
                  <p className="text-xl sm:text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1.5 text-xs sm:text-sm leading-5 text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="relative lg:pl-4 mt-2 lg:mt-0">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.05] p-5 sm:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">

              <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Portfolio Overview</p>
                  <p className="mt-1.5 text-xl sm:text-2xl font-semibold text-white">{displayText}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-slate-300">
                  2026
                </div>
              </div>

              <div className="relative z-10 mt-4 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Primary Focus</p>
                  <p className="mt-2 text-sm sm:text-base leading-6 text-white">
                    Building premium UI systems with responsive layouts, smooth
                    interaction design, and clear product structure.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Tooling</p>
                    <p className="mt-2 text-sm leading-6 text-white/90">Next.js, React, Tailwind CSS, GSAP</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Approach</p>
                    <p className="mt-2 text-sm leading-6 text-white/90">Fast iteration, strong polish, practical execution</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 hidden xl:block">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/80">Current Motto</p>
                  <p className="mt-2 text-base leading-7 text-white">
                    Make the first impression clear, then make the experience feel effortless.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Header;
