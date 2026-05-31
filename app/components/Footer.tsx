"use client";
export default function Footer() {
  return (
    <footer style={{ background: "#0D1A15" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-sm flex items-center justify-center" style={{ background: "#2D6A4F" }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M2 9h2M14 9h2M4 9h10M6 6v6M12 6v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-display text-lg tracking-wider text-white">TANJIM FITNESS</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Programs", "Pricing", "Trainers", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#2D6A4F")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © {new Date().getFullYear()} B31 Fitness Club
          </p>
        </div>
      </div>
    </footer>
  );
}
