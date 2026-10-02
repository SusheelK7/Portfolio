export default function About() {
  return (
    <section
      id="about"
      className="scroll-section flex items-center bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="max-w-5xl mx-auto px-6 py-28 w-full">
        {/* Section label */}
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-4 font-extrabold">
          01 — About
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
              Crafting digital
              <span className="block italic font-medium text-neutral-600 dark:text-neutral-300">
                experiences
              </span>
            </h2>
            <div className="reveal h-px w-16 bg-neutral-300 dark:bg-neutral-700 mb-6" />
            <p className="reveal font-body font-light text-neutral-600 dark:text-neutral-400 leading-relaxed text-base">
              I'm a motivated Full Stack Developer currently pursuing my Bachelor of Computer Science at Air University, Islamabad (2023–2027), with hands-on experience building responsive, scalable web applications.
            </p>
            <p className="reveal reveal-delay-1 font-body font-light text-neutral-600 dark:text-neutral-400 leading-relaxed text-base mt-4">
              I work across both the MERN stack (MongoDB, Express.js, React.js, Node.js) and the modern Next.js ecosystem (TypeScript, PostgreSQL, Prisma). I have practical experience integrating AI APIs (Google Gemini) into production features like automated resume screening and content generation, along with multi-tenant architecture and secure authentication.
            </p>
          </div>

          {/* Right – quick facts */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: "Location", value: "Islamabad, Pakistan" },
              { label: "Education", value: "BSCS — Air University Islamabad" },
              { label: "Timeline", value: "2023 – 2027" },
              { label: "Core Stack", value: "Next.js, React, Node.js, PostgreSQL, MongoDB" },
              { label: "Specialty", value: "Full Stack & Gemini AI Integration" },
              { label: "Email", value: "susheelkumaar3@gmail.com" },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className={`reveal reveal-delay-${i + 1} flex items-start gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950`}
              >
                <span className="font-mono text-xs font-extrabold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest pt-0.5 w-24 shrink-0">
                  {label}
                </span>
                <span className="font-body font-medium text-sm text-neutral-800 dark:text-neutral-200">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
