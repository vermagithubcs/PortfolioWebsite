import { useGSAP } from "@gsap/react";
import React, { use, useRef } from "react";
import { gsap } from "gsap";
const BottomText = () => {
  useGSAP(function () {
    gsap.to("#banner img", {
      rotate: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
  });
  return (
    <>
      <div className="bottom-text absolute bottom-0 flex w-full justify-between items-end">
        <div>
          <h2 className="text-white uppercase font-bold text-2xl">
            Recoderr | Transforming Visions | into <br /> Digital Reality.
          </h2>
        </div>
        <div id="banner" className="image h-auto w-auto">
          <img
            className="relative bottom-2 cursor-pointer"
            src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
            alt="White image"
          />
          <img
            className="relative bottom-0 cursor-pointer"
            src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png"
            alt="Black Image"
          />
        </div>
      </div>
    </>
  );
};

export default BottomText;
