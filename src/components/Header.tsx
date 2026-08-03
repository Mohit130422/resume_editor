"use client";

import { useEffect, useState } from "react";
import { navigation, profile } from "@/data/portfolio";
import DownloadResumeButton from "@/components/DownloadResumeButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line/80 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-3xl font-bold tracking-tight text-ink-deep"
        >
          {profile.name}
          <span className="text-teal">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-sweep text-sm font-medium text-ink-soft transition-colors duration-300 hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <DownloadResumeButton
              variant="solid"
              label="Download Resume"
              className="!px-5 !py-2.5"
            />
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-teal hover:text-teal md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-[1.5px] w-4 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-line bg-white transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-ink-soft transition-colors duration-300 hover:bg-mist-soft hover:text-teal"
            >
              {item.label}
            </a>
          ))}
          <div className="px-3 pt-3 sm:hidden">
            <DownloadResumeButton variant="solid" />
          </div>
        </nav>
      </div>
    </header>
  );
}
