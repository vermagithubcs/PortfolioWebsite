import React from "react";

const MainText = (props) => {
  return (
    <>
      <div
        id="titleDiv"
        ref={props.abc}
        className="main-text text-white uppercase relative top-[4.5rem]"
      >
        <h1 className="text-[5vw] font-extrabold leading-[4vw]">
          I am <span className="text-black">Vikash</span> <sup>TM</sup>
        </h1>
        <h1 className="text-[6vw] leading-[7vw] font-extrabold">Frontend <span className="text-xl">Developer</span></h1>
        <h1 className="text-[5vw] leading-[4vw] font-extrabold">To Hire</h1>
      </div>
    </>
  );
};

export default MainText;
