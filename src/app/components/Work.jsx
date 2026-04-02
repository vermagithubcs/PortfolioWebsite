"use client";
import React from "react";

const Work = () => {
  const projects = [
    {
      name: "ToolAura",
      src: "https://www.toolaura.in/",
      year: "2026",
      role: "Full Stack",
      impact: "40+ utility tools in one platform",
      description:
        "A comprehensive multi-tool web application featuring PDF converters, image compressors, and developer tools",
      tags: ["Next.js", "React", "TailwindCSS"],
      gradient: "from-cyan-500/80 via-cyan-300/20 to-slate-900",
    }
  ];

  return (
    <section id="works" className="relative w-full min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Title Section */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-cyan-300/85 mb-3">Featured Projects</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[AtlassianSans] font-bold text-white">
          Work Highlights
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-4">
          Two projects that represent my strongest work across product thinking, frontend architecture, and motion.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-2xl mx-auto grid grid-cols-1 gap-6 sm:gap-8">
        {projects.map((project, idx) => (
          <article
            key={project.name}
            className="group relative rounded-3xl border border-white/15 bg-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/45 hover:shadow-[0_16px_40px_rgba(34,211,238,0.2)]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10 p-6 sm:p-8 min-h-[330px] flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/80">Project 0{idx + 1}</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">{project.name}</h2>
                </div>
                <span className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-white/30 bg-black/25 text-white/90 uppercase tracking-wider">
                  {project.year}
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="text-xs sm:text-sm rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-white/90 uppercase tracking-wider">
                  {project.role}
                </span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs sm:text-sm rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/20 bg-black/25 px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-cyan-200/85">Impact</p>
                <p className="text-sm sm:text-base text-white mt-1">{project.impact}</p>
              </div>

              <div className="mt-auto pt-6">
                <a
                  href={project.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white border border-white/35 rounded-xl px-4 py-2.5 bg-black/30 hover:bg-white/30 hover:text-black transition-all duration-300"
                >
                  Open Project
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View More Section */}
      <div className="text-center mt-12 sm:mt-16">
        <a
          href="https://github.com/vermagithubcs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-white rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-600 hover:text-black border border-white transition-all duration-300 transform hover:scale-105"
        >
          View More Projects →
        </a>
      </div>
    </section>
  );
};

export default Work;
