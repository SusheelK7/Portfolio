import { useState, useEffect } from "react";

const links = ["About", "Experience", "Skills", "Projects", "Education", "Contact"];

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="group font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-1.5"
        >
          <span>Susheel</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-7 items-center">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="font-body text-xs uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-neutral-900 dark:after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Quick Contact CTA on desktop */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-neutral-900 dark:hover:border-white transition-colors"
          >
            Let's Talk
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm9-7a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm14.657-5.657a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM7.05 16.95a1 1 0 0 1 0 1.414l-.706.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zm11.314 1.414a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414zM7.05 7.05a1 1 0 0 1-1.414 0l-.707-.706A1 1 0 0 1 6.343 4.93l.707.707a1 1 0 0 1 0 1.414zM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-4 bg-neutral-800 dark:bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}/>
              <span className={`block h-0.5 w-4 bg-neutral-800 dark:bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}/>
              <span className={`block h-0.5 w-4 bg-neutral-800 dark:bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 px-6 py-5 shadow-lg">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white block py-1"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
