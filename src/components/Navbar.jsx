import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-5 transition-all duration-300 ${
          scrolled
            ? "border-white/15 bg-[#090d20]/90 py-3 shadow-[0_12px_35px_rgba(0,0,0,.35)] backdrop-blur-xl"
            : "border-white/10 bg-[#111832]/70 py-4 backdrop-blur-md"
        }`}
      >
        <a
          href="#home"
          className="text-xl font-bold tracking-wide text-white"
          onClick={() => setMenuOpen(false)}
        >
          RC<span className="text-purple-400">.</span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-400/30 text-xl text-purple-300 md:hidden"
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

        <div
          className={`absolute left-4 right-4 top-[calc(100%-4px)] grid overflow-hidden rounded-2xl border border-white/10 bg-[#111832]/95 backdrop-blur-xl transition-all duration-300 md:static md:flex md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 ${
            menuOpen
              ? "max-h-96 p-3 shadow-2xl"
              : "pointer-events-none max-h-0 border-transparent p-0 md:pointer-events-auto md:max-h-none"
          }`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                    : "text-gray-300 hover:bg-white/5 hover:text-purple-300"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;