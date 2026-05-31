const programs = [
  {
    title: "Strength Training",
    tag: "Build Power",
    description:
      "Progressive overload programming designed to maximize muscle hypertrophy and raw strength. From beginner barbells to elite powerlifting.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
    duration: "60 min/session",
    level: "All Levels",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 5v14M18 5v14M2 9h4M18 9h4M2 15h4M18 15h4"/>
      </svg>
    ),
  },
  {
    title: "Fat Loss",
    tag: "Transform",
    description:
      "High-intensity metabolic conditioning that burns fat, preserves muscle, and resets your metabolism for lasting body composition change.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    duration: "45 min/session",
    level: "Intermediate",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    title: "Yoga & Flexibility",
    tag: "Move Better",
    description:
      "Restore mobility, reduce injury risk, and build mind-body connection through our dynamic yoga and deep flexibility protocol.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    duration: "50 min/session",
    level: "All Levels",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v5l-3 4m3-4l3 4M9 19l3-3 3 3"/>
      </svg>
    ),
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-main)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "#2D6A4F" }} />
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#528788" }}
              >
                What We Offer
              </span>
            </div>
            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(48px, 7vw, 80px)", color: "#1A1A1A" }}
            >
              OUR
              <br />
              <span style={{ color: "#2D6A4F" }}>PROGRAMS</span>
            </h2>
          </div>
          <p
            className="max-w-sm text-base leading-relaxed md:text-right"
            style={{ color: "var(--text-muted)" }}
          >
            Expert-designed training systems for every goal. Each program includes
            personalized coaching and nutrition guidance.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <div
              key={prog.title}
              className="group relative overflow-hidden rounded-sm hover-lift card-glow border"
              style={{
                borderColor: "#E5EDE9",
                background: "white",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.6) 100%)",
                  }}
                />
                {/* Tag badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-widest"
                  style={{ background: "#2D6A4F", color: "white" }}
                >
                  {prog.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                  style={{ background: "var(--bg-light)", color: "#2D6A4F" }}
                >
                  {prog.icon}
                </div>

                <h3
                  className="font-display text-2xl mb-3"
                  style={{ color: "#1A1A1A", letterSpacing: "0.03em" }}
                >
                  {prog.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                  {prog.description}
                </p>

                {/* Meta */}
                <div
                  className="flex items-center justify-between pt-4 border-t text-xs font-medium uppercase tracking-wider"
                  style={{ borderColor: "#E5EDE9", color: "var(--text-muted)" }}
                >
                  <span>⏱ {prog.duration}</span>
                  <span
                    className="px-2 py-1 rounded-sm"
                    style={{ background: "var(--bg-light)", color: "#2D6A4F" }}
                  >
                    {prog.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
