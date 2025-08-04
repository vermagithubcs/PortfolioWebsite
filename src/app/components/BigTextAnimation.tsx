'use client'
import React from "react";
import { TextScroll } from "../../components/ui/text-scroll";

const BigTextAnimation = () => {
  return (
    <div
      id="section2"
      className="textAnimation h-60 max-md:h-40 w-full flex flex-col justify-evenly whitespace-nowrap bg-black text-white text-center relative overflow-hidden"
    >
      <h1 className="text-3xl md:text-4xl sm:text-2xl font-serif">Skills💙</h1>
      <TextScroll
        className="font-display text-center text-3xl font-semibold tracking-tighter text-black dark:text-white md:text-4xl md:leading-[4.5rem]"
        text="Frontend Developer | JavaScript | Tailwind CSS | React JS | Next JS | Git & Github | GSAP | Postman API |"
        default_velocity={2}
      />
    </div>
  );
};

export default BigTextAnimation;
