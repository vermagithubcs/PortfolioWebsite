'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { RiJavascriptFill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import Figma from "../assets/figma.png"
import Gsap from "../assets/gsap.png"
import Image from "next/image";

const TechStack = () => {
  const techRef = useRef(null)
  
  useGSAP(() => {
    if (!techRef.current) return;
    const tech = techRef.current.children;
    Array.from(tech).forEach((box) => {
      const element = box as HTMLElement;
      element.addEventListener("mousemove", (e) => {
        gsap.from(e.currentTarget, {
          y: -10,
          duration: 0.3,
          ease: 'power1.in'
        })
      })
      element.addEventListener("mouseleave", (e) => {
        gsap.to(e.currentTarget, {
          y: 0,
          duration: 0.5,
          ease: 'power1.inOut'
        })
      })
    })
  })

  return (
    <div className='lg:min-h-1/2 md:min-h-screen w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-12 sm:mb-16'>
        Tech Stack
      </h1>
      
      <div 
        ref={techRef} 
        className="techstack grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto justify-items-center"
      >
        <div className="reactjs h-36 w-36 sm:h-40 sm:w-40 bg-black rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:bg-black/90 transition-transform duration-300">
          <RiReactjsFill color='aqua' size={60} className="sm:w-20 sm:h-20" />
          <h1 className='text-blue-400 text-base sm:text-xl mt-2'>React js</h1>
        </div>
        
        <div className="reactjs h-36 w-36 sm:h-40 sm:w-40 bg-black rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:bg-black/90 transition-transform duration-300">
          <RiNextjsFill color='aqua' size={60} className="sm:w-20 sm:h-20" />
          <h1 className='text-blue-400 text-base sm:text-xl mt-2'>Next js</h1>
        </div>
        
        <div className="reactjs h-36 w-36 sm:h-40 sm:w-40 bg-black rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:bg-black/90 transition-transform duration-300">
          <RiJavascriptFill color='aqua' size={60} className="sm:w-20 sm:h-20" />
          <h1 className='text-blue-400 text-base sm:text-xl mt-2'>JavaScript</h1>
        </div>
        
        <div className="reactjs h-36 w-36 sm:h-40 sm:w-40 bg-black rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:bg-black/90 transition-transform duration-300">
          <RiTailwindCssFill color='aqua' size={60} className="sm:w-20 sm:h-20" />
          <h1 className='text-blue-400 text-base sm:text-xl mt-2'>TailwindCSS</h1>
        </div>
        
        <div className="reactjs h-36 w-36 sm:h-40 sm:w-40 bg-black rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:bg-black/90 transition-transform duration-300">
          <Image className="h-16 w-16 sm:h-20 sm:w-20" src={Gsap} alt="gsap" />
          <h1 className='text-blue-400 text-base sm:text-xl mt-2'>GSAP</h1>
        </div>
        
        <div className="reactjs h-36 w-36 sm:h-40 sm:w-40 bg-black rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 hover:bg-black/90 transition-transform duration-300">
          <Image className="h-16 w-16 sm:h-20 sm:w-20" src={Figma} alt="figma" />
          <h1 className='text-blue-400 text-base sm:text-xl mt-2'>Figma</h1>
        </div>
      </div>
    </div>
  )
}

export default TechStack
