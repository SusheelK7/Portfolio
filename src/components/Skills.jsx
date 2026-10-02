const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Next.js API Routes",
      "Server Actions",
      "REST APIs",
      "Socket.io",
    ],
  },
  {
    category: "Database & ORM",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Prisma Studio"],
  },
  {
    category: "AI & Automation",
    skills: ["Google Gemini API", "ChatGPT", "GitHub Copilot", "Claude"],
  },
  {
    category: "Cloud & Storage",
    skills: ["Cloudflare R2", "Stripe (Billing Integration)"],
  },
  {
    category: "Architecture & Concepts",
    skills: [
      "Multi-Tenant Architecture",
      "JWT Authentication",
      "Zod Validation",
      "MVC Pattern",
      "Responsive Design",
    ],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Agile / Scrum"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-section flex items-center bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="max-w-5xl mx-auto px-6 py-28 w-full">
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 font-extrabold mb-4">
          03 — Skills
        </p>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-14 leading-tight">
          Technical
          <span className="block italic font-medium text-neutral-600 dark:text-neutral-300">
            expertise
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ category, skills }, gi) => (
            <div
              key={category}
              className={`reveal reveal-delay-${(gi % 4) + 1} p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950`}
            >
              <p className="font-mono text-xs tracking-widest uppercase font-extrabold text-neutral-600 dark:text-neutral-400 mb-4">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 font-body text-xs font-medium text-neutral-700 dark:text-neutral-300"
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
