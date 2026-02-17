"use client";
import Image from "next/image";
import Background from "../assets/Background.jpg";
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
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 z-20 uppercase">
          <div className="text-white text-lg lg:text-5xl md:text-3xl font-semibold max-sm:text-xl">
            <a href="https://github.com/vermagithubcs" target="_blank">Github</a>
          </div>
          <div className="text-white text-lg lg:text-5xl md:text-3xl font-semibold max-sm:text-xl">
            <a href="https://www.linkedin.com/in/vikashvermadeveloper/" target="_blank">
              LinkedIn
            </a>
          </div>
          <div className="text-white text-lg lg:text-5xl md:text-3xl font-semibold max-sm:text-xl">
            <a href="https://www.instagram.com/animxstudios/" target="_blank">
              Instagram
            </a>
          </div>
          <div className="text-white text-lg lg:text-5xl md:text-3xl font-semibold max-sm:text-xl">
            <a href="https://x.com/verm3390" target="_blank">X</a>
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
