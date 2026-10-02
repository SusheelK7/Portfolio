const projects = [
  {
    number: "01",
    title: "AI Recruiter",
    subtitle: "AI-Powered Hiring SaaS Platform",
    repo: "https://github.com/SusheelK7",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Gemini API", "Tailwind CSS", "Zod"],
    description:
      "A comprehensive multi-tenant SaaS platform automating resume screening, secure candidate testing, and interview scheduling, featuring AI-powered evaluations and company-scoped data isolation.",
    highlights: [
      "AI-driven resume scoring & ranking against job descriptions using Gemini API",
      "Secure, proctored assessment module with tab-switch & fullscreen-exit detection",
      "Video-introduction transcription & candidate application management",
      "Multi-tenant database schema with company-scoped data isolation",
    ],
  },
  {
    number: "02",
    title: "KaamWala.pk",
    subtitle: "Service Marketplace Platform",
    repo: "https://github.com/SusheelK7/kaamwala.git",
    stack: ["MERN Stack", "Socket.io", "JWT & OTP Auth", "Express.js", "MongoDB"],
    description:
      "Full-stack marketplace connecting users with skilled workers via location-based search. Features real-time chat, worker profiles, ratings, a comprehensive booking system, and an admin verification dashboard.",
    highlights: [
      "Location-based worker search & booking workflow",
      "JWT & OTP authentication with verified worker profiles",
      "Real-time chat with Socket.io & modular REST APIs",
      "Admin dashboard for user management & worker verification",
    ],
  },
  {
    number: "03",
    title: "CampusBuzz",
    subtitle: "University Social Platform",
    repo: "https://github.com/RaoUmair55/Campusbuzz.git",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", ".edu Auth"],
    description:
      "Anonymous social platform designed for university students with .edu email verification, department-wise ranking based on student feedback, real-time discussions, and an AI-assisted moderation system.",
    highlights: [
      "Anonymous student posting with .edu email gating & JWT",
      "Department-wise ranking system based on community feedback",
      "AI-assisted & manual moderation system",
      "Real-time social feeds with responsive frontend",
    ],
  },
  {
    number: "04",
    title: "Timetable Management System",
    subtitle: "Class Schedule & Routine Manager",
    repo: "https://github.com/SusheelK7/ClassPulse.git",
    stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "A web application built to manage university class schedules seamlessly with automated timetable upload, manual entry, and an intuitive dashboard showing ongoing, upcoming, and completed classes.",
    highlights: [
      "Timetable upload and manual-entry options",
      "Dashboard displaying ongoing, upcoming, and completed classes",
      "Mobile-responsive, distraction-free interface",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-section flex items-center bg-white dark:bg-neutral-950"
    >
      <div className="max-w-5xl mx-auto px-6 py-28 w-full">
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 font-extrabold mb-4">
          04 — Projects
        </p>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-16 leading-tight">
          Featured
          <span className="block italic font-medium text-neutral-600 dark:text-neutral-300">
            projects
          </span>
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <div
              key={p.number}
              className={`reveal reveal-delay-${i + 1} group bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300`}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-xs font-bold text-neutral-600 dark:text-neutral-400">
                        {p.number}
                      </span>
                      <div className="h-px flex-1 bg-neutral-300 dark:bg-neutral-700" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                      {p.title}
                    </h3>
                    <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 font-semibold mb-4 italic">
                      {p.subtitle}
                    </p>
                    <p className="font-body font-light text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                      {p.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="md:w-72 shrink-0">
                    <p className="font-mono text-xs tracking-widest uppercase font-extrabold text-neutral-600 dark:text-neutral-400 mb-3">
                      Highlights
                    </p>
                    <ul className="flex flex-col gap-2">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 font-body text-xs font-light text-neutral-600 dark:text-neutral-400"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-mono text-xs text-neutral-600 dark:text-neutral-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        title="View Repository"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12Z"/>
                        </svg>
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
