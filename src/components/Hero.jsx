export default function Hero() {
  const highlights = [
    "Next.js (App Router)",
    "Full Stack",
    "PostgreSQL & Prisma",
    "Google Gemini AI",
    "Multi-Tenant Architecture",
    "JWT & Zod Validation",
  ];

  return (
    <section
      id="hero"
      className="scroll-section relative flex flex-col justify-center overflow-hidden bg-white dark:bg-neutral-950 pt-28 pb-16"
    >
      {/* 3D Isometric Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          transform: "perspective(1000px) rotateX(25deg) translateY(-80px)",
        }}
      />

      {/* 3D Ambient multi-layer background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full bg-gradient-to-tr from-neutral-200/90 via-neutral-100/50 to-emerald-200/20 dark:from-neutral-900/90 dark:via-neutral-800/40 dark:to-emerald-950/20 blur-3xl opacity-75 pointer-events-none animate-glow" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[400px] rounded-full bg-gradient-to-br from-emerald-400/10 via-teal-300/10 to-transparent dark:from-emerald-600/15 dark:via-teal-500/10 dark:to-transparent blur-3xl opacity-60 pointer-events-none animate-float-reverse" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center my-auto">
        {/* 3D Live status badge */}
        <div className="reveal inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/90 mb-8 backdrop-blur-md pill-3d shimmer-badge animate-float-slow hover:scale-105 transition-transform duration-300 cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200">
            Open to Full-time & Internship Roles
          </span>
        </div>

        {/* Tag line */}
        <p className="reveal reveal-delay-1 font-mono text-xs tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-400 mb-3 font-extrabold">
          Full Stack & AI Engineer
        </p>

        {/* 3D Heading typography */}
        <h1 className="reveal reveal-delay-2 font-display text-6xl sm:text-7xl md:text-8xl font-bold text-neutral-900 dark:text-white leading-[0.95] tracking-tight mb-2 hover:tracking-wide transition-all duration-500">
          Susheel
        </h1>
        <h1 className="reveal reveal-delay-2 font-display text-6xl sm:text-7xl md:text-8xl font-medium italic text-neutral-600 dark:text-neutral-400 leading-[0.95] tracking-tight mb-8">
          Kumar
        </h1>

        {/* Summary */}
        <p className="reveal reveal-delay-3 font-body text-base md:text-lg font-normal text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Building responsive, scalable web applications across the <span className="text-neutral-900 dark:text-white font-semibold">Full stack</span> and modern <span className="text-neutral-900 dark:text-white font-semibold">Next.js ecosystem</span>, with hands-on experience integrating <span className="text-neutral-900 dark:text-white font-semibold">Google Gemini AI</span> into production features.
        </p>

        {/* 3D Action Buttons */}
        <div className="reveal reveal-delay-4 flex flex-wrap gap-4 justify-center items-center mb-14">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-body font-semibold text-sm tracking-wide rounded-full btn-3d hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
          >
            Explore Projects
          </a>
          <a
            href="#experience"
            className="px-7 py-3.5 border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md text-neutral-800 dark:text-neutral-200 font-body font-semibold text-sm tracking-wide rounded-full hover:border-neutral-900 dark:hover:border-white hover:scale-105 active:scale-95 transition-all duration-200 card-3d"
          >
            Experience & Stack
          </a>
          <a
            href="#contact"
            className="group px-6 py-3.5 text-neutral-700 dark:text-neutral-300 font-body font-semibold text-sm hover:text-neutral-950 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Contact Info</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>

        {/* 3D Tech Highlights Strip */}
        <div className="reveal reveal-delay-5 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 max-w-3xl mx-auto">
          <p className="font-mono text-[11px] tracking-widest uppercase text-neutral-600 dark:text-neutral-400 mb-4 font-extrabold">
            Core Competencies
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {highlights.map((h, idx) => (
              <span
                key={h}
                className={`reveal reveal-delay-${(idx % 5) + 1} px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 font-mono text-xs text-neutral-700 dark:text-neutral-300 font-medium pill-3d hover:scale-105 hover:-translate-y-0.5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 cursor-default`}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
