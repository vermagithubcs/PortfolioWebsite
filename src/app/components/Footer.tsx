"use client";
import Image from "next/image";
import Background from "../assets/Background.jpg";
import FlipLink from "../../components/ui/text-effect-flipper";
const Footer = () => {
  return (
    <>
      <div
        id="contact"
        className="footer-page relative w-full min-h-screen"
      >
        {/* Blurred Contact Text Background */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <h1 className="text-[10vw] max-md:text-[16vw] max-sm:text-[22vw] uppercase text-center text-white opacity-10 font-bold">
            Contact us
          </h1>
        </div>

        {/* Contact Links */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 z-20">
          <div className="text-white text-lg md:text-xl font-semibold max-sm:text-base">
            <FlipLink href="https://github.com/vermagithubcs">Github</FlipLink>
          </div>
          <div className="text-white text-lg md:text-xl font-semibold max-sm:text-base">
            <FlipLink href="https://www.linkedin.com/in/vikashvermadeveloper/">
              LinkedIn
            </FlipLink>
          </div>
          <div className="text-white text-lg md:text-xl font-semibold max-sm:text-base">
            <FlipLink href="https://www.instagram.com/coder_vikash/">
              Instagram
            </FlipLink>
          </div>
          <div className="text-white text-lg md:text-xl font-semibold max-sm:text-base">
            <FlipLink href="https://x.com/verm3390">X</FlipLink>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            className="w-full h-full object-cover object-center"
            src={Background}
            alt="Footer background"
            priority
            fill
            sizes="100vw"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
