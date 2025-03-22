import React from "react";

const Services = () => {
  return (
    <>
      <div id="services" className="h-screen max-md:h-auto w-screen">
        <div>
          <h1 className="text-[13vw] text-center border border-b-black font-[AtlassianSans]">
            Services
          </h1>
        </div>
        <div className="flex max-md:flex-col border border-black">
          <div className="h-80 font-[TyproFace] flex items-center justify-center cursor-pointer  w-1/3 max-md:w-full border border-black">
            <h1 className="text-[4vw] hover:border-b-2 hover:border-black">Coderr</h1>
          </div>
          <div className="h-80 font-[TyproFace] flex items-center justify-center max-md:w-full  w-1/3 border border-black">
            <h1 className="text-[4vw] hover:border-b-2 hover:border-black cursor-pointer">DesiGner</h1>
          </div>
          <div className="h-80 font-[TyproFace] flex items-center justify-center max-md:w-full  w-1/3 border border-black">
            <h1 className="text-[4vw] text-nowrap hover:border-b-2 hover:border-black cursor-pointer">Problem Solver</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
