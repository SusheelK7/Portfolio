export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-section flex items-center bg-neutral-50 dark:bg-neutral-900"
    >
      <div className="max-w-5xl mx-auto px-6 py-28 w-full">
        <p className="reveal font-mono text-xs tracking-[0.2em] uppercase text-neutral-600 dark:text-neutral-400 mb-4 font-extrabold">
          05 — Contact
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight mb-6">
              Let's build
              <span className="block italic font-medium text-neutral-600 dark:text-neutral-300">
                something
              </span>
            </h2>
            <p className="reveal font-body font-light text-neutral-600 dark:text-neutral-400 leading-relaxed text-base mb-8">
              I'm open to freelance projects, collaborations, and full-time
              opportunities. Feel free to reach out — I'd love to connect.
            </p>
            <a
              href="mailto:susheelkumaar3@gmail.com"
              className="reveal inline-flex items-center gap-3 px-6 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-body font-medium text-sm rounded-full hover:opacity-80 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              susheelkumaar3@gmail.com
            </a>
          </div>

          {/* Right – links */}
          <div className="flex flex-col gap-4">
            {[
              {
                label: "Phone",
                value: "+92-324-6091924",
                href: "tel:+923246091924",
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                value: "github.com/SusheelKumar",
                href: "https://github.com",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12Z"/>
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/susheelkumar",
                href: "https://www.linkedin.com/in/susheel-k-a961812a6/",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                ),
              },
            ].map(({ label, value, href, icon }, i) => (
              <a
                key={label}
                href={href}
                className={`reveal reveal-delay-${i + 1} flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors group`}
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                  {icon}
                </span>
                <div>
                  <p className="font-mono text-xs tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
                    {label}
                  </p>
                  <p className="font-body font-medium text-sm text-neutral-800 dark:text-neutral-200">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
