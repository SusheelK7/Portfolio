const projects = [
  {
    number: "01",
    title: "KaamWala.pk",
    subtitle: "Service Marketplace Platform",
    stack: ["MERN Stack", "Socket.io", "JWT", "OTP Auth"],
    description:
      "Full-stack platform connecting users with skilled workers via location-based search. Features real-time chat, worker profiles, ratings, booking system, and an admin dashboard for user management and worker verification.",
    highlights: [
      "Location-based worker search",
      "JWT & OTP authentication",
      "Real-time chat with Socket.io",
      "Admin dashboard & worker verification",
    ],
  },
  {
    number: "02",
    title: "MySchedule",
    subtitle: "Timetable Management System",
    stack: ["React.js", "Node.js", "MongoDB"],
    description:
      "Web application to manage university class schedules with timetable upload, manual entry, and a clean dashboard showing ongoing, upcoming, and completed classes — all optimized for mobile.",
    highlights: [
      "Timetable upload & manual entry",
      "Dashboard with class status",
      "Mobile-first responsive design",
    ],
  },
  {
    number: "03",
    title: "CampusBuzz",
    subtitle: "University Social Platform",
    stack: ["MERN Stack", "JWT", ".edu Email", "REST APIs"],
    description:
      "Anonymous social platform for university students with .edu email verification, department-wise ranking based on feedback, real-time features, and an AI-assisted moderation system.",
    highlights: [
      "Anonymous with .edu email gating",
      "Department-wise ranking system",
      "AI-assisted & manual moderation",
      "Real-time interactions",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-section flex items-center bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="max-w-5xl mx-auto px-6 py-28 w-full">
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 font-extrabold mb-4">
          03 — Projects
        </p>
        <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-16 leading-tight">
          Selected
          <span className="block italic font-medium text-neutral-600 dark:text-neutral-300">
            work
          </span>
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((p, i) => (
            <div
              key={p.number}
              className={`reveal reveal-delay-${i + 1} group bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300 `}
            >
              <div className="p-8 md:p-10 ">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 ">
                  {/* Left */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-xs text-neutral-600 dark:text-neutral-400">
                        {p.number}
                      </span>
                      <div className="h-px flex-1 bg-neutral-400 dark:bg-neutral-600" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                      {p.title}
                    </h3>
                    <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 font-bold mb-4 italic">
                      {p.subtitle}
                    </p>
                    <p className="font-body font-light text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                      {p.description}
                    </p>
                  </div>

                  {/* Right */}
                  <div className="md:w-64 shrink-0">
                    <p className="font-mono text-xs tracking-widest uppercase text-neutral-600 dark:text-neutral-400 mb-3">
                      Highlights
                    </p>
                    <ul className="flex flex-col gap-2">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 font-body text-xs font-light text-neutral-600 dark:text-neutral-400"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 font-mono text-xs text-neutral-700 dark:text-neutral-400"
                        >
                          {s}
                        </span>
                      ))}
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
