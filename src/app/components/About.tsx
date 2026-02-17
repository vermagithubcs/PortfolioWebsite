import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="about min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full"
    >
      {/* Heading */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center uppercase font-[TyproFace] tracking-tighter">
          About
        </h1>
      </div>

      {/* Description Text */}
      <div className="text-about flex items-center justify-center w-full">
        <h1 className="big-text text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center leading-relaxed max-w-5xl px-4">
          {"I'm"} Vikash Verma, a
          <span className="text-blue-600 font-semibold">
            {" "}
            Full Stack Web Developer
          </span>{" "}
          and
          <span className="text-pink-600 font-semibold"> Figma Designer</span>
          , passionate about building
          <span className="text-green-600 font-semibold">
            {" "}
            impactful real-world projects
          </span>{" "}
          and continuously expanding my skills every day. I have worked as a
          <span className="text-blue-600 font-semibold">
            {" "}
            Frontend Engineer
          </span>{" "}
          at
          <span className="text-purple-700 font-semibold">
            {" "}
            <a href="https://devsummit.vercel.app/" target="_blank" className="hover:underline">
              DevSummit 2025.
            </a>
          </span>{" "}
          I continuously build websites with smooth{" "}
          <span className="text-blue-500 font-semibold">Three.js</span> and{" "}
          <span className="text-blue-500 font-semibold">GSAP animations.</span>
        </h1>
      </div>
    </div>
  );
};

export default About;
