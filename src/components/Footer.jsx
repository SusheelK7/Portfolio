export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-display text-xl font-bold text-neutral-900 dark:text-white">
          SK<span className="text-neutral-600 dark:text-neutral-400">.</span>
        </span>
        <p className="font-body font-light text-xs text-neutral-600 dark:text-neutral-400 text-center">
          © {new Date().getFullYear()} Susheel Kumar — Full Stack MERN Developer
        </p>
        <p className="font-mono text-xs text-neutral-600 dark:text-neutral-400 font-extrabold">
          Islamabad, Pakistan
        </p>
      </div>
    </footer>
  );
}
