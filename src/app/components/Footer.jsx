"use client";

const socialLinks = [
  {
    name: "Github",
    href: "https://github.com/vermagithubcs",
    label: "Code & Open Source",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vikashvermadeveloper/",
    label: "Professional Network",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/animxstudios/",
    label: "Creative Updates",
  },
  {
    name: "X",
    href: "https://x.com/verm3390",
    label: "Short-form Thoughts",
  },
];

const Footer = () => {
  return (
    <section
      id="contact"
      className="footer-page relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
    >

      <div className="relative z-20 w-full max-w-6xl rounded-3xl border border-white/70 bg-white/4 p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-cyan-300/90">Let&apos;s Connect</p>
            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-[AtlassianSans] font-bold text-white leading-tight">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-xl">
              I design and build modern web experiences with clean code, smooth animation,
              and product-first thinking. Reach out and let&apos;s build something meaningful.
            </p>

            <a
              href="mailto:vermadigital943@gmail.com"
              className="inline-flex mt-7 items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-white font-semibold hover:bg-white/30 hover:text-black transition-all duration-300"
            >
              Email Me
              <span aria-hidden="true">↗</span>
            </a>

            <p className="mt-6 text-xs sm:text-sm text-slate-400 uppercase tracking-wider">
              Available for freelance and full-time roles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white bg-black/30 p-4 sm:p-5 hover:border-cyan-300/50 hover:bg-white/10 transition-all duration-300"
              >
                <p className="text-white text-xl sm:text-2xl font-semibold">{item.name}</p>
                <p className="mt-2 text-slate-100 text-sm">{item.label}</p>
                <span className="mt-4 inline-block text-cyan-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Open Profile
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-slate-400 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Vikash Verma. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
