import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "AI Recruiter",
    subtitle: "AI-Powered Hiring SaaS Platform",
    featured: true,
    category: "Next.js & AI",
    repo: "https://github.com/SusheelK7",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Gemini API", "Tailwind CSS", "Zod"],
    description:
      "A multi-tenant SaaS hiring platform automating resume screening, secure candidate testing, and interview scheduling with company-scoped data isolation and automated AI scoring.",
    highlights: [
      "AI-driven resume scoring & ranking against job descriptions using Google Gemini API",
      "Secure proctored assessment module with tab-switch & fullscreen-exit detection",
      "Automated video-introduction audio transcription & candidate pipeline management",
      "Multi-tenant database schema (Company, Job, Application, Test, Interview, Subscription)",
    ],
  },
  {
    number: "02",
    title: "KaamWala.pk",
    subtitle: "Service Marketplace Platform",
    featured: false,
    category: "MERN Stack",
    repo: "https://github.com/SusheelK7/kaamwala.git",
    stack: ["MERN Stack", "Socket.io", "JWT & OTP Auth", "Express.js", "MongoDB"],
    description:
      "Full-stack marketplace connecting users with skilled workers via location-based search. Features real-time chat, worker profiles, ratings, a comprehensive booking system, and an admin verification dashboard.",
    highlights: [
      "Location-based worker search & booking workflow",
      "JWT & OTP authentication with verified worker profiles and rating system",
      "Real-time bidirectional chat powered by Socket.io and modular REST APIs",
      "Admin dashboard for user management and worker verification workflows",
    ],
  },
  {
    number: "03",
    title: "CampusBuzz",
    subtitle: "University Social Platform",
    featured: false,
    category: "MERN Stack",
    repo: "https://github.com/RaoUmair55/Campusbuzz.git",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", ".edu Auth"],
    description:
      "Anonymous social platform designed for university students with .edu email verification, department-wise ranking based on student feedback, real-time discussions, and an AI-assisted moderation system.",
    highlights: [
      "Anonymous student posting with .edu email gating & JWT authentication",
      "Department-wise ranking algorithm based on real student feedback",
      "AI-assisted and manual content moderation pipeline",
      "Real-time social feeds with responsive and interactive React UI",
    ],
  },
  {
    number: "04",
    title: "Timetable Management System",
    subtitle: "Class Schedule & Routine Manager",
    featured: false,
    category: "MERN Stack",
    repo: "https://github.com/SusheelK7/ClassPulse.git",
    stack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "A web application built to manage university class schedules seamlessly with automated timetable upload, manual entry, and an intuitive dashboard showing ongoing, upcoming, and completed classes.",
    highlights: [
      "Timetable upload and manual-entry scheduling options",
      "Dashboard displaying ongoing, upcoming, and completed classes in real-time",
      "Mobile-responsive, distraction-free interface tailored for students",
    ],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter || (filter === "Next.js & AI" && p.stack.includes("Next.js")));

  return (
    <section
      id="projects"
      className="scroll-section flex items-center bg-white dark:bg-neutral-950 py-24"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 font-extrabold mb-4">
              04 — Projects
            </p>
            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
              Selected
              <span className="block italic font-medium text-neutral-600 dark:text-neutral-300">
                engineering work
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="reveal flex flex-wrap gap-2">
            {["All", "Next.js & AI", "MERN Stack"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold shadow-sm"
                    : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-neutral-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="flex flex-col gap-8 min-h-[400px]">
          {filteredProjects.map((p, i) => (
            <div
              key={p.title}
              style={{ animationDelay: `${i * 0.08}s` }}
              className="animate-fade-in card-3d group bg-white dark:bg-neutral-900/95 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400">
                        {p.number}
                      </span>
                      <div className="h-px flex-1 bg-neutral-300 dark:bg-neutral-700" />
                      {p.featured && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-[11px] font-mono font-bold text-emerald-800 dark:text-emerald-400 pill-3d">
                          ★ Featured FYP
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                      {p.title}
                    </h3>
                    <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 font-semibold mb-4 italic">
                      {p.subtitle}
                    </p>
                    <p className="font-body font-light text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl mb-6">
                      {p.description}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-md bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-mono text-xs text-neutral-700 dark:text-neutral-300 font-medium pill-3d"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Highlights & Action links */}
                  <div className="md:w-72 shrink-0 flex flex-col justify-between pt-2">
                    <div>
                      <p className="font-mono text-xs tracking-widest uppercase font-extrabold text-neutral-600 dark:text-neutral-400 mb-3">
                        Key Features
                      </p>
                      <ul className="flex flex-col gap-2.5">
                        {p.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-2 font-body text-xs font-light text-neutral-600 dark:text-neutral-400 leading-relaxed"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Links */}
                    <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-mono font-semibold btn-3d"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12Z"/>
                          </svg>
                          <span>Repository</span>
                        </a>
                      )}
                    </div>
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
