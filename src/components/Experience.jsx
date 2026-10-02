export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "VisionX",
      location: "Islamabad, Pakistan",
      period: "July – Sept",
      badge: "Internship & FYP",
      project: "AI Recruiter",
      projectType: "Multi-Tenant SaaS Hiring Platform",
      points: [
        "Architected and built 'AI Recruiter', an end-to-end multi-tenant SaaS hiring platform automating resume screening, secure candidate assessments, and interview management.",
        "Implemented secure JWT authentication with email verification, password-reset flows, and robust schema validation using Zod.",
        "Engineered full-featured job posting workflows, automated job-expiry cron routines, and candidate application pipelines using Next.js (App Router), PostgreSQL, and Prisma ORM.",
        "Integrated the Google Gemini API to power automated AI resume scoring against job descriptions and video-introduction audio transcriptions.",
        "Designed and implemented a scalable multi-tenant database schema (Company, Job, Application, Test, Interview, Subscription) ensuring strict company-scoped data isolation.",
        "Actively collaborated in Agile/Scrum sprints, participating in regular technical architecture reviews with engineering leadership.",
      ],
      tech: [
        "Next.js (App Router)",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Google Gemini API",
        "Zod Validation",
        "JWT Auth",
        "Tailwind CSS",
        "Cloudflare R2",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-section flex items-center bg-white dark:bg-neutral-950 py-24"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Section Label */}
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 font-extrabold mb-4">
          02 — Experience
        </p>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-14 leading-tight">
          Work
          <span className="block italic font-medium text-neutral-600 dark:text-neutral-300">
            experience
          </span>
        </h2>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10 border-l border-neutral-200 dark:border-neutral-800 space-y-12">
          {experiences.map((exp, i) => (
            <div key={exp.company + exp.role} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-neutral-900 dark:border-white bg-white dark:bg-neutral-950 group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white m-auto mt-0.5" />
              </div>

              {/* Experience Card */}
              <div
                className={`reveal reveal-delay-${i + 1} card-hover bg-neutral-50/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-2xl border border-neutral-200 dark:border-neutral-800 p-7 md:p-9 shadow-sm`}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5 pb-5 border-b border-neutral-200 dark:border-neutral-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-[11px] font-mono font-medium text-neutral-800 dark:text-neutral-300">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="font-body text-base font-semibold text-neutral-800 dark:text-neutral-200">
                      {exp.company}{" "}
                      <span className="font-light text-neutral-500 dark:text-neutral-400 font-normal">
                        — {exp.location}
                      </span>
                    </p>
                    <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                      Featured Project: <span className="font-bold text-neutral-900 dark:text-white">{exp.project}</span> ({exp.projectType})
                    </p>
                  </div>
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-300 w-fit shrink-0">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-3 mb-6">
                  {exp.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 font-body text-sm font-light text-neutral-700 dark:text-neutral-300 leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700/80 font-mono text-xs text-neutral-700 dark:text-neutral-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
