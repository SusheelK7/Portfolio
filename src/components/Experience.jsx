export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "VisionX",
      location: "Islamabad, Pakistan",
      period: "July – Sept",
      badge: "Internship",
      project: "AI Recruiter",
      projectType: "Multi-Tenant SaaS Hiring Platform",
      liveDemo: "https://myairecruiter.vercel.app/",
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
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-neutral-900 dark:border-white bg-white dark:bg-neutral-950 group-hover:scale-125 group-hover:border-emerald-500 transition-all duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white group-hover:bg-emerald-500 m-auto mt-0.5 transition-colors duration-300" />
              </div>

              {/* Experience Card */}
              <div
                className={`reveal-scale reveal-delay-${i + 1} card-3d group/card relative bg-white dark:bg-neutral-900/95 backdrop-blur-md rounded-2xl border border-neutral-200/90 dark:border-neutral-800 p-7 md:p-9 hover:-translate-y-1.5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 overflow-hidden`}
              >
                {/* Top ambient hover accent glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5 pb-5 border-b border-neutral-200 dark:border-neutral-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[11px] font-mono font-bold text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 pill-3d">
                        {exp.badge}
                      </span>
                    </div>
                    <p className="font-body text-base font-semibold text-neutral-800 dark:text-neutral-200">
                      {exp.company}{" "}
                      <span className="font-light text-neutral-500 dark:text-neutral-400 font-normal">
                        — {exp.location}
                      </span>
                    </p>
                    <div className="flex flex-wrap items-center gap-2.5 mt-1.5">
                      <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                        Featured Project: <span className="font-bold text-neutral-900 dark:text-white">{exp.project}</span> ({exp.projectType})
                      </p>
                      {exp.liveDemo && (
                        <a
                          href={exp.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/80 hover:scale-105 active:scale-95 transition-all duration-200 pill-3d"
                        >
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          <span>Live Demo ↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-300 w-fit shrink-0 pill-3d">
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-3 mb-6">
                  {exp.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="group/pt flex items-start gap-3 font-body text-sm font-light text-neutral-700 dark:text-neutral-300 leading-relaxed hover:translate-x-1 transition-transform duration-200"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 group-hover/pt:bg-emerald-500 group-hover/pt:scale-125 transition-all duration-200 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags & Live Demo Action */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-mono text-xs text-neutral-700 dark:text-neutral-300 font-medium pill-3d hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {exp.liveDemo && (
                    <a
                      href={exp.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold btn-3d hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Live Demo ↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
