"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1f17]/95 backdrop-blur-sm border-b border-[#2D6A4F]/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-[#4ade80] text-2xl font-black tracking-tighter uppercase">
            TFC
          </span>
          <span className="text-white text-sm font-semibold tracking-widest uppercase hidden sm:block">
            Tanjim Fitness
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Programs", "Pricing", "Trainers", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-[#4ade80] text-sm font-semibold tracking-widest uppercase transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block bg-[#2D6A4F] hover:bg-[#528788] text-white text-sm font-bold tracking-wider uppercase px-5 py-2.5 transition-colors duration-200"
        >
          Join Now
        </a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1f17] border-t border-[#2D6A4F]/30 px-6 py-4 space-y-4">
          {["Programs", "Pricing", "Trainers", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-300 text-sm font-semibold tracking-widest uppercase"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-[#2D6A4F] text-white text-sm font-bold tracking-wider uppercase px-5 py-2.5 text-center"
            onClick={() => setOpen(false)}
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}
