export default function Skills() {
  const skillGroups = [
    {
      category: "Frontend Development",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
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
      category: "Backend & APIs",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 3h13.5m-9-6.75h9m-9-3h9m-9-3h9M3.75 6a2.25 2.25 0 0 1 2.25-2.25h12a2.25 2.25 0 0 1 2.25 2.25v12a2.25 2.25 0 0 1-2.25 2.25h-12A2.25 2.25 0 0 1 3.75 18V6Z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
      skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Prisma Studio"],
    },
    {
      category: "AI & Automation",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
        </svg>
      ),
      skills: ["Google Gemini API", "ChatGPT", "GitHub Copilot", "Claude"],
    },
    {
      category: "Cloud & Storage",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
        </svg>
      ),
      skills: ["Cloudflare R2", "Stripe (Billing Integration)"],
    },
    {
      category: "Architecture & Design",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
      skills: [
        "Multi-Tenant Architecture",
        "JWT Authentication",
        "Zod Validation",
        "MVC Architecture",
        "Responsive Design",
      ],
    },
    {
      category: "Tools & Collaboration",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26" />
        </svg>
      ),
      skills: ["Git", "GitHub", "Postman", "VS Code", "Agile / Scrum"],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-section flex items-center bg-neutral-50 dark:bg-neutral-900 py-24"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 font-extrabold mb-4">
          03 — Skills
        </p>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-14 leading-tight">
          Technical
          <span className="block italic font-medium text-neutral-600 dark:text-neutral-300">
            stack & expertise
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ category, icon, skills }, gi) => (
            <div
              key={category}
              className={`reveal reveal-delay-${(gi % 3) + 1} card-hover p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm`}
            >
              <div className="flex items-center gap-2.5 mb-4 text-neutral-800 dark:text-neutral-200">
                <span className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  {icon}
                </span>
                <p className="font-mono text-xs font-bold tracking-wider uppercase">
                  {category}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 font-body text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
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
