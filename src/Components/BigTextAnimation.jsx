import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const BigTextAnimation = () => {
  const textRef = useRef(null);
  
  useEffect(() => {
    const animation = gsap.to(textRef.current, {
      x: '-100%',
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });

    return () => {
      // Cleanup animation on unmount
      animation.kill();
    };
  }, []);

  return (
    <div
      id="section2" 
      className="textAnimation h-40 max-lg:h-32 w-[100%] flex flex-col justify-evenly whitespace-nowrap bg-black text-white text-center relative overflow-hidden"
    >
      <h4 className="text-2xl max-lg:text-[3vw]">© reCoderr 2025 | Learn to Code</h4>
      <div ref={textRef} className="scrolling-text flex text-5xl font-bold max-lg:text-[3vw] uppercase">
        <h1>🚀 Frontend Developer ✨ | Web Designer 🎨 | JavaScript Enthusiast ⚙️ | React.js Expert 🔥 | Next.js Ninja 💻 </h1>
        <h1>| 🚀 Frontend Developer ✨ | Web Designer 🎨 | JavaScript Enthusiast ⚙️ | React.js Expert 🔥 | Next.js Ninja 💻 </h1>
      </div>
    </div>
  );
};

export default BigTextAnimation;
