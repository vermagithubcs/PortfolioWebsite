"use client";
import React from "react";

const Work = () => {
  const projects = [
    {
      name: "ToolAura",
      src: "https://www.toolaura.in/",
      description:
        "A comprehensive multi-tool web application featuring PDF converters, image compressors, and developer tools",
      tags: ["Next.js", "React", "TailwindCSS"],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      name: "DevSummit 2025",
      src: "https://devsummit.vercel.app/",
      description:
        "Modern event website with smooth animations and interactive 3D elements",
      tags: ["Three.js", "GSAP", "Next.js"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      name: "GTA 6 Concept",
      src: "https://gta-6-sepia.vercel.app/",
      description:
        "Interactive gaming website showcase with immersive design and animations",
      tags: ["React", "GSAP", "WebGL"],
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div id="works" className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[AtlassianSans] font-bold">
          Featured Work
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Explore my recent projects showcasing modern web development
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.src}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}
            ></div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">
              {/* Project Number */}
              <div className="text-white/40 text-6xl sm:text-7xl font-bold absolute top-4 right-4 sm:top-6 sm:right-6">
                0{idx + 1}
              </div>

              {/* Project Info */}
              <div className="mt-8 sm:mt-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                  {project.name}
                </h2>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm rounded-full border border-white/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View More Section */}
      <div className="text-center mt-12 sm:mt-16">
        <a
          href="https://github.com/vermagithubcs"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-xl text-base sm:text-lg font-semibold hover:bg-white hover:text-black border-2 border-black transition-all duration-300 transform hover:scale-105"
        >
          View More Projects →
        </a>
      </div>
    </div>
  );
};

export default Work;
