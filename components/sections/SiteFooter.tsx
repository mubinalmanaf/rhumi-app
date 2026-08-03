import Wordmark from "@/components/Wordmark";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 px-6 pb-14 pt-8 md:px-10">
      <div className="mx-auto max-w-content">
        <div className="hairline mb-10" />

        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <a href="#top" className="text-lg text-bone" aria-label="Rhumi, home">
              <Wordmark />
            </a>
            <p className="mt-3 max-w-xs font-serif text-sm italic text-bone-faint">
              “With hardship comes ease.”
            </p>
          </div>

          <nav className="flex items-center gap-7 text-sm text-bone-dim">
            <a
              href="#invitation"
              className="transition-colors hover:text-bone"
            >
              Early access
            </a>
            <a
              href="/privacy.html"
              className="transition-colors hover:text-bone"
            >
              Privacy
            </a>
            <a
              href="/terms.html"
              className="transition-colors hover:text-bone"
            >
              Terms
            </a>
            <a
              href="mailto:hello@rhumi.app"
              className="transition-colors hover:text-bone"
            >
              Contact
            </a>
            <a
              href="mailto:admin@rhumi.app"
              className="transition-colors hover:text-bone"
            >
              Investors
            </a>
          </nav>
        </div>

        <p className="mt-10 text-center text-xs text-bone-faint/70 md:text-left">
          © {new Date().getFullYear()} Rhumi. A quiet place to begin again.
        </p>
      </div>
    </footer>
  );
}
