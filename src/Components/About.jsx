import React from "react";
const About = () =>{
  return (
    <>
      <div id="about" className="about h-screen max-sm:h-60 w-screen">
        <div>
          <h1 className="border border-black text-black text-[8vw] text-center uppercase font-[TyproFace] tracking-tighter">
            About
          </h1>
        </div>
        <div className="text-about flex items-center justify-center h-1/2">
          <h1 className="big-text text-3xl max-lg:text-[3vw] text-nowrap">
          For a decade, we've been creating dynamic,<br /> custom-built websites that empower brands <br /> to stand out. Now, we're channeling our <br />  expertise to take your projects to the next <br />  level—innovative, impactful, and future-ready.
          </h1>
          <h1 className="text-7xl font-[TyproFace] text-nowrap max-lg:text-[3vw]">- Vikash</h1>
        </div>
      </div>
    </>
  );
}

export default About;
