export default function Hero() {
  return (
    <section
      id="hero"
      className="scroll-section relative flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft accent blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neutral-100 dark:bg-neutral-900 blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Tag line */}
        <p className="reveal font-mono text-xs tracking-[0.25em] uppercase text-neutral-600 dark:text-neutral-400 mb-6 font-extrabold">
          Full Stack MERN Developer
        </p>

        {/* Name */}
        <h1 className="reveal reveal-delay-1 font-display text-6xl md:text-8xl font-bold text-neutral-900 dark:text-white leading-none tracking-tight mb-2">
          Susheel
        </h1>
        <h1 className="reveal reveal-delay-2 font-display text-6xl md:text-8xl font-medium italic text-neutral-600 dark:text-neutral-400 leading-none tracking-tight mb-10">
          Kumar
        </h1>

        {/* Summary */}
        <p className="reveal reveal-delay-3 font-body text-base font-light text-neutral-700 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed mb-12">
          Building responsive, scalable web applications with clean code and a
          passion for modern UI — from backend APIs to polished frontends.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-body font-medium text-sm tracking-wide rounded-full hover:opacity-80 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-body font-medium text-sm tracking-wide rounded-full hover:border-neutral-900 dark:hover:border-white transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="reveal reveal-delay-5 mt-20 flex flex-col items-center gap-2 text-neutral-300 dark:text-neutral-400 font-extrabold">
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-neutral-300 to-transparent dark:from-neutral-700 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
