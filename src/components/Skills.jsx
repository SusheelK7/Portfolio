const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.io"],
  },
  {
    category: "Database",
    skills: ["MongoDB"],
  },
  {
    category: "Concepts",
    skills: ["MVC Architecture", "Responsive Design", "OTP Auth"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    category: "AI Tools",
    skills: ["ChatGPT", "GitHub Copilot", "Google Gemini", "Claude"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-section flex items-center bg-white dark:bg-neutral-950"
    >
      <div className="max-w-5xl mx-auto px-6 py-28 w-full">
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 mb-4">
          02 — Skills
        </p>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-14 leading-tight">
          Technical
          <span className="block italic font-medium text-neutral-400 dark:text-neutral-500">
            expertise
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ category, skills }, gi) => (
            <div
              key={category}
              className={`reveal reveal-delay-${(gi % 4) + 1} p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900`}
            >
              <p className="font-mono text-xs tracking-widest uppercase text-neutral-400 dark:text-neutral-500 mb-4">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-body text-xs font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
