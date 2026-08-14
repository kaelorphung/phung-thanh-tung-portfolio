
"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={closeMenu}
            className="font-mono text-sm font-bold tracking-wider text-white transition hover:text-emerald-400"
          >
            PTT<span className="text-emerald-400">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm transition ${
                    isActive
                      ? "text-emerald-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-emerald-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              );
            })}

            <a
              href="#contact"
              className={`rounded-md border px-4 py-2 text-sm transition ${
                activeSection === "contact"
                  ? "border-emerald-400 bg-emerald-400/10 text-emerald-400"
                  : "border-zinc-700 text-white hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-400"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 text-zinc-300 transition hover:border-emerald-400 hover:text-emerald-400 lg:hidden"
          >
            <span className="text-xl leading-none">
              {isOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile */}
        {isOpen && (
          <div className="border-t border-white/10 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const sectionId = item.href.slice(1);
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-md px-3 py-3 text-sm transition ${
                      isActive
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-emerald-400"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={closeMenu}
                className={`mt-2 rounded-md border px-3 py-3 text-sm transition ${
                  activeSection === "contact"
                    ? "border-emerald-400 bg-emerald-400/10 text-emerald-400"
                    : "border-zinc-700 text-white hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-400"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

