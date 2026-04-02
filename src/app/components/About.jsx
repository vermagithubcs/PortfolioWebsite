import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 rounded-3xl border border-white bg-white/[0.03] p-6 backdrop-blur-sm sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="space-y-6 text-center lg:text-left">
          <p className="inline-block rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200">
            Who I Am
          </p>

          <h1 className="text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl font-[TyproFace]">
            About
          </h1>

          <div className="mx-auto grid max-w-sm grid-cols-2 gap-3 text-left lg:mx-0">
            <div className="rounded-2xl border border-white bg-white/[0.04] px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-slate-400">Focus</p>
              <p className="mt-1 text-sm font-medium text-slate-100">Web Apps & UX</p>
            </div>
            <div className="rounded-2xl border border-white bg-white/[0.04] px-4 py-3">
              <p className="text-xs uppercase tracking-widest text-slate-400">Stack</p>
              <p className="mt-1 text-sm font-medium text-slate-100">MERN + Next.js</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white bg-black/20 p-5 sm:p-7 lg:p-8">
          <p className="text-about big-text text-sm leading-relaxed text-slate-100 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {"I'm"} Vikash Verma, a{" "}
            <span className="font-semibold text-cyan-300">Full Stack Web Developer</span> and{" "}
            <span className="font-semibold text-rose-300">Figma Designer</span> passionate about building{" "}
            <span className="font-semibold text-emerald-300">impactful real-world projects</span> and continuously expanding my skills every day.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            I have worked as a <span className="font-semibold text-cyan-300">Frontend Engineer</span> at{" "}
            <a
              href="https://devsummit.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-fuchsia-300 underline-offset-4 transition hover:underline"
            >
              DevSummit 2025
            </a>
            . I also build modern websites with smooth{" "}
            <span className="font-semibold text-cyan-300">Three.js</span> and{" "}
            <span className="font-semibold text-cyan-300">GSAP animations</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
