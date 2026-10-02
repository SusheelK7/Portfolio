export default function Hero() {
  const highlights = [
    "Next.js (App Router)",
    "MERN Stack",
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center my-auto">
        {/* 3D Live status badge */}
        <div className="reveal inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/90 dark:border-neutral-800/90 mb-8 backdrop-blur-md pill-3d">
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
        <h1 className="reveal reveal-delay-2 font-display text-6xl sm:text-7xl md:text-8xl font-bold text-neutral-900 dark:text-white leading-[0.95] tracking-tight mb-2">
          Susheel
        </h1>
        <h1 className="reveal reveal-delay-2 font-display text-6xl sm:text-7xl md:text-8xl font-medium italic text-neutral-600 dark:text-neutral-400 leading-[0.95] tracking-tight mb-8">
          Kumar
        </h1>

        {/* Summary */}
        <p className="reveal reveal-delay-3 font-body text-base md:text-lg font-normal text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Building responsive, scalable web applications across the <span className="text-neutral-900 dark:text-white font-semibold">MERN stack</span> and modern <span className="text-neutral-900 dark:text-white font-semibold">Next.js ecosystem</span>, with hands-on experience integrating <span className="text-neutral-900 dark:text-white font-semibold">Google Gemini AI</span> into production features.
        </p>

        {/* 3D Action Buttons */}
        <div className="reveal reveal-delay-4 flex flex-wrap gap-4 justify-center items-center mb-14">
          <a
            href="#projects"
            className="px-7 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-body font-semibold text-sm tracking-wide rounded-full btn-3d"
          >
            Explore Projects
          </a>
          <a
            href="#experience"
            className="px-7 py-3.5 border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md text-neutral-800 dark:text-neutral-200 font-body font-semibold text-sm tracking-wide rounded-full hover:border-neutral-900 dark:hover:border-white transition-all card-3d"
          >
            Experience & Stack
          </a>
          <a
            href="#contact"
            className="px-6 py-3.5 text-neutral-700 dark:text-neutral-300 font-body font-semibold text-sm hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            Contact Info →
          </a>
        </div>

        {/* 3D Tech Highlights Strip */}
        <div className="reveal reveal-delay-5 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 max-w-3xl mx-auto">
          <p className="font-mono text-[11px] tracking-widest uppercase text-neutral-600 dark:text-neutral-400 mb-4 font-extrabold">
            Core Competencies
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {highlights.map((h) => (
              <span
                key={h}
                className="px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 font-mono text-xs text-neutral-700 dark:text-neutral-300 font-medium pill-3d hover:scale-105 transition-transform"
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
