"use client";

"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0D1F1A" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
          alt="Gym background"
          className="w-full h-full object-cover opacity-40"
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,31,26,0.92) 0%, rgba(13,31,26,0.65) 50%, rgba(82,135,136,0.25) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: "linear-gradient(to top, #0D1F1A, transparent)",
          }}
        />
      </div>

      {/* Decorative vertical line */}
      <div
        className="absolute left-8 top-1/4 bottom-1/4 w-px hidden lg:block"
        style={{ background: "rgba(45,106,79,0.4)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 fade-up-delay-1">
            <div className="w-10 h-px" style={{ background: "#2D6A4F" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#528788" }}
            >
              Dhaka&apos;s Premium Fitness Club
            </span>
          </div>

          {/* Main headline */}
          <h1
            className="font-display text-white leading-none mb-6 fade-up-delay-2"
            style={{ fontSize: "clamp(64px, 10vw, 120px)", lineHeight: 0.9 }}
          >
            FORGE
            <br />
            <span style={{ color: "#2D6A4F", WebkitTextStroke: "1px #2D6A4F" }}>
              YOUR
            </span>
            <br />
            BEST SELF
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl max-w-lg leading-relaxed mb-10 fade-up-delay-3"
            style={{ color: "rgba(255,255,255,0.7)", fontWeight: 300 }}
          >
            Elite training programs, world-class coaches, and a community that
            pushes you further than you thought possible.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 fade-up-delay-4">
            <a
              href="#contact"
              className="btn-primary px-8 py-4 rounded-sm text-sm inline-block"
            >
              Join Now — Free Week
            </a>
            <a
              href="#programs"
              className="px-8 py-4 rounded-sm text-sm inline-block font-semibold uppercase tracking-widest transition-all duration-300"
              style={{
                border: "2px solid rgba(255,255,255,0.3)",
                color: "white",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2D6A4F";
                (e.currentTarget as HTMLElement).style.background = "rgba(45,106,79,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Explore Programs
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t fade-up-delay-5"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            {[
              { num: "500+", label: "Active Members" },
              { num: "15+", label: "Expert Trainers" },
              { num: "8", label: "Programs" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="font-display text-4xl text-white" style={{ letterSpacing: "0.02em" }}>
                  {num}
                </div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-3">
        <div className="w-px h-16" style={{ background: "rgba(45,106,79,0.5)" }} />
        <span className="text-xs uppercase tracking-[0.2em] rotate-90 origin-center"
          style={{ color: "rgba(255,255,255,0.3)" }}>
          Scroll
        </span>
      </div>
    </section>
  );
}
