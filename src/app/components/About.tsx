import React from "react";
const About = () => {
  return (
    <>
      <div
        id="about"
        className="about min-h-screen flex flex-col items-center justify-center px-4 py-8 w-full"
      >
        {/* Heading */}
        <div>
          <h1 className=" text-black text-5xl md:text-6xl text-center uppercase font-[TyproFace] tracking-tighter">
            About
          </h1>
        </div>

        {/* Description Text */}
        <div className="text-about flex items-center justify-center w-full px-4 py-6">
          <h1 className="big-text text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center leading-relaxed max-w-4xl">
            {"I'm"} Vikash Verma, a
            <span className="text-blue-600 font-semibold">
              {" "}
              Frontend Developer{" "}
            </span>
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
              Frontend Developer
            </span>{" "}
            at
            <span className="text-purple-700 font-semibold">
              {" "}
              DevSummit 2025
            </span>{" "}
            and
            <span className="text-rose-700 font-semibold"> Brainitix</span>,
            where I contributed to web-based solutions and user-friendly
            interfaces. I also participated in the
            <span className="text-purple-700 font-semibold">
              {" "}
              DevSummit 2025 Hackathon
            </span>{" "}
            as a
            <span className="text-blue-600 font-semibold">
              {" "}
              Frontend Developer
            </span>{" "}
            and served as a
            <span className="text-yellow-600 font-semibold"> volunteer</span>,
            gaining hands-on experience in collaborative development and tech
            event coordination.
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
