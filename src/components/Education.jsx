export default function Education() {
  return (
    <section
      id="education"
      className="scroll-section flex items-center bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="max-w-5xl mx-auto px-6 py-28 w-full">
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 font-extrabold mb-4">
          05 — Education
        </p>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-16 leading-tight">
          Academic
          <span className="block italic font-medium text-neutral-600 dark:text-neutral-300">
            background
          </span>
        </h2>

        {/* Education card */}
        <div className="reveal-scale reveal-delay-1 card-3d group bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 p-8 md:p-10 mb-8 hover:-translate-y-1 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase font-extrabold text-neutral-600 dark:text-neutral-400 mb-2">
                Degree
              </p>
              <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                Bachelor of Computer Science (BSCS)
              </h3>
              <p className="font-body font-medium text-neutral-700 dark:text-neutral-300">
                Air University Islamabad
              </p>
              <p className="font-body font-light text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                Islamabad, Pakistan
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="inline-block px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 font-mono text-xs text-neutral-700 dark:text-neutral-300 pill-3d hover:scale-105 transition-transform duration-200">
                2023 – 2027
              </span>
              <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 font-bold mt-2">
                In Progress
              </p>
            </div>
          </div>
        </div>

        {/* Additional skills */}
        <div className="reveal reveal-delay-2">
          <p className="font-mono text-xs tracking-[0.2em] uppercase font-extrabold text-neutral-600 dark:text-neutral-400 mb-5">
            Core Strengths & Mindset
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Problem Solving",
                desc: "Strong problem-solving and analytical thinking for complex architectures and workflows.",
              },
              {
                title: "Fast Adaptability",
                desc: "Quick learner, adaptable to emerging technologies, libraries, and frameworks.",
              },
              {
                title: "Full Stack & AI Passion",
                desc: "Deeply passionate about full-stack web engineering and practical, value-driven AI integration.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={title}
                className={`reveal-scale reveal-delay-${i + 2} card-3d group p-5 rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:-translate-y-1 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300`}
              >
                <h4 className="font-body font-semibold text-sm text-neutral-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                  {title}
                </h4>
                <p className="font-body font-light text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
