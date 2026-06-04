export default function Education() {
  return (
    <section
      id="education"
      className="scroll-section flex items-center bg-white dark:bg-neutral-950"
    >
      <div className="max-w-5xl mx-auto px-6 py-28 w-full">
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 font-extrabold mb-4">
          04 — Education
        </p>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-16 leading-tight">
          Academic
          <span className="block italic font-medium text-neutral-600 dark:text-neutral-300">
            background
          </span>
        </h2>

        {/* Education card */}
        <div className="reveal reveal-delay-1 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 p-8 md:p-10 mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-neutral-600 dark:text-neutral-400 mb-2">
                Degree
              </p>
              <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                Bachelor of Computer Science
              </h3>
              <p className="font-body font-medium text-neutral-600 dark:text-neutral-400">
                Air University Islamabad
              </p>
              <p className="font-body font-light text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                Islamabad, Pakistan
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="inline-block px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 font-mono text-xs text-neutral-700 dark:text-neutral-400">
                2023 – 2027
              </span>
              <p className="font-mono text-xs text-neutral-300 dark:text-neutral-400 mt-2">
                In Progress
              </p>
            </div>
          </div>
        </div>

        {/* Additional skills */}
        <div className="reveal reveal-delay-2">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-5">
            Additional Strengths
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Problem Solving",
                desc: "Strong analytical thinking for tackling complex challenges.",
              },
              {
                title: "Quick Learner",
                desc: "Fast adaptability to emerging technologies and frameworks.",
              },
              {
                title: "Clean Code",
                desc: "Passionate about maintainable, well-structured codebases.",
              },
            ].map(({ title, desc }, i) => (
              <div
                key={title}
                className={`reveal reveal-delay-${i + 2} p-5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900`}
              >
                <h4 className="font-body font-medium text-sm text-neutral-900 dark:text-white mb-2">
                  {title}
                </h4>
                <p className="font-body font-light text-xs text-neutral-700 dark:text-neutral-400 leading-relaxed">
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
