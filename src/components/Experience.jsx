export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "VisionX",
      location: "Islamabad, Pakistan",
      period: "July – Sept",
      project: "AI Recruiter",
      projectType: "Multi-Tenant SaaS Hiring Platform (Internship & FYP)",
      points: [
        "Building 'AI Recruiter', a multi-tenant SaaS hiring platform automating resume screening, candidate testing, and interview scheduling.",
        "Implemented JWT-based authentication with email verification and password-reset flows, strictly enforced with Zod validation.",
        "Built job posting, job-expiry automation, and candidate application modules using Next.js, PostgreSQL, and Prisma ORM.",
        "Integrated the Google Gemini API for AI-driven resume screening, scoring, and video-introduction transcription.",
        "Designed a multi-tenant database schema (Company, Job, Application, Test, Interview, Subscription) with company-scoped data isolation.",
        "Collaborated within Agile/Scrum-based development cycles with regular technical reviews from engineering management.",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Google Gemini API",
        "Zod",
        "JWT",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-section flex items-center bg-white dark:bg-neutral-950"
    >
      <div className="max-w-5xl mx-auto px-6 py-28 w-full">
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 font-extrabold mb-4">
          02 — Experience
        </p>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-16 leading-tight">
          Work
          <span className="block italic font-medium text-neutral-600 dark:text-neutral-300">
            experience
          </span>
        </h2>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <div
              key={exp.company + exp.role}
              className={`reveal reveal-delay-${i + 1} bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 md:p-10`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="font-body text-base font-semibold text-neutral-800 dark:text-neutral-200">
                    {exp.company}{" "}
                    <span className="font-light text-neutral-500 dark:text-neutral-400 font-normal">
                      — {exp.location}
                    </span>
                  </p>
                  <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                    Project: <span className="font-semibold text-neutral-800 dark:text-neutral-200">{exp.project}</span> ({exp.projectType})
                  </p>
                </div>
                <span className="inline-block px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 font-mono text-xs font-medium text-neutral-700 dark:text-neutral-300 w-fit">
                  {exp.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-6">
                {exp.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-3 font-body text-sm font-light text-neutral-700 dark:text-neutral-300 leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-mono text-xs text-neutral-700 dark:text-neutral-300"
                  >
                    {t}
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
