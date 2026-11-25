import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const updateActiveAndScrolled = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const nearBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 12;

      if (nearBottom) {
        setActiveSection(navItems[navItems.length - 1].href.slice(1));
        return;
      }

      const checkPos = scrollY + 140;
      let current = navItems[0].href.slice(1);

      for (const item of navItems) {
        const id = item.href.slice(1);
        const section = document.getElementById(id);
        if (section && section.offsetTop <= checkPos) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveAndScrolled();
    window.addEventListener("scroll", updateActiveAndScrolled, { passive: true });
    window.addEventListener("resize", updateActiveAndScrolled);

    return () => {
      window.removeEventListener("scroll", updateActiveAndScrolled);
      window.removeEventListener("resize", updateActiveAndScrolled);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const id = href.slice(1);
    const target = document.getElementById(id);

    setMenuOpen(false);
    setActiveSection(id);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-300 sm:px-4 ${
        scrolled ? "py-2.5 sm:py-3" : "py-4 sm:py-5"
      }`}
    >
      <nav
        ref={navRef}
        className={`relative mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-white/15 bg-[#090d20]/90 py-2.5 shadow-[0_12px_35px_rgba(0,0,0,.35)] backdrop-blur-xl sm:py-3"
            : "border-white/10 bg-[#111832]/70 py-3.5 backdrop-blur-md sm:py-4"
        }`}
      >
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="inline-flex items-baseline text-2xl transition-transform duration-300 hover:scale-105 sm:text-[27px]"
        >
          <span className="brand-logo bg-linear-to-r from-white via-purple-200 to-purple-400 bg-clip-text pr-0.5 text-transparent">
            Rohini
          </span>
          <span className="font-bold text-purple-400">.</span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-400/30 text-xl text-purple-300 transition hover:bg-purple-500/10 md:hidden"
        >
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-[calc(100%+8px)] flex-col gap-1 rounded-2xl border border-white/10 bg-[#111832]/95 p-3 shadow-2xl backdrop-blur-xl md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none`}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all md:px-3 md:py-2 lg:px-4 lg:py-2.5 ${
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
