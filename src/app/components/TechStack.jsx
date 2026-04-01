'use client';
import { RiJavascriptFill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import Figma from "../assets/figma.png"
import Gsap from "../assets/gsap.png"
import Image from "next/image";

const techItems = [
  {
    name: "React.js",
    level: "Advanced",
    icon: <RiReactjsFill className="text-cyan-300 text-5xl sm:text-6xl" />,
  },
  {
    name: "Next.js",
    level: "Advanced",
    icon: <RiNextjsFill className="text-cyan-300 text-5xl sm:text-6xl" />,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    icon: <RiJavascriptFill className="text-cyan-300 text-5xl sm:text-6xl" />,
  },
  {
    name: "TailwindCSS",
    level: "Advanced",
    icon: <RiTailwindCssFill className="text-cyan-300 text-5xl sm:text-6xl" />,
  },
  {
    name: "GSAP",
    level: "Animation",
    icon: <Image className="h-14 w-14 sm:h-16 sm:w-16" src={Gsap} alt="GSAP" />,
  },
  {
    name: "Figma",
    level: "Design",
    icon: <Image className="h-14 w-14 sm:h-16 sm:w-16" src={Figma} alt="Figma" />,
  },
];

const TechStack = () => {
  return (
    <section id="techStack" className='relative isolate w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 z-0'>

      <div className="relative z-10 text-center mb-10 sm:mb-14">
        <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-cyan-300/85 mb-3">Toolkit</p>
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white'>
          Tech Stack
        </h1>
        <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          Core technologies I use to build performant, animated, and user-focused web experiences.
        </p>
      </div>
      
      <div 
        className="relative z-10 techstack grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 max-w-7xl mx-auto"
      >
        {techItems.map((item) => (
          <article
            key={item.name}
            data-tech-card
            className="group relative min-h-48 sm:min-h-52 rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-cyan-300/45 hover:shadow-[0_12px_32px_rgba(34,211,238,0.14)]"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-cyan-400/10 via-transparent to-transparent" />

            <div className="relative mb-3">{item.icon}</div>
            <h2 className='relative text-cyan-200 text-base sm:text-lg font-semibold'>{item.name}</h2>
            <p className="relative mt-1 text-xs sm:text-sm text-slate-400 uppercase tracking-widest">{item.level}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechStack
