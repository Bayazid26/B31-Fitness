"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Programs", "Pricing", "Trainers", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: "#2D6A4F" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 9h2M14 9h2M4 9h10M6 6v6M12 6v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-display text-xl tracking-wider" style={{ color: scrolled ? "#1A1A1A" : "white" }}>
            B31 FITNESS
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
              style={{
                color: scrolled ? "#1A1A1A" : "rgba(255,255,255,0.85)",
                letterSpacing: "0.08em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2D6A4F")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled ? "#1A1A1A" : "rgba(255,255,255,0.85)")
              }
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary px-5 py-2.5 rounded-sm text-xs"
          >
            Join Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: scrolled ? "#1A1A1A" : "white" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4"
          style={{ background: "rgba(250,249,245,0.97)", backdropFilter: "blur(20px)" }}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-widest py-2 border-b"
              style={{ color: "#1A1A1A", borderColor: "#E5E7EB" }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="btn-primary px-5 py-3 rounded-sm text-xs text-center mt-2">
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}
