const programs = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    tag: "Power",
    title: "Strength Training",
    desc: "Build raw, functional strength with barbell work, compound lifts, and progressive overload protocols designed by elite powerlifters.",
    features: ["Olympic Lifting", "Powerlifting", "Hypertrophy Focus", "Form Coaching"],
    intensity: 90,
    sessions: "5x / week",
    color: "#2D6A4F",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    tag: "Burn",
    title: "Fat Loss",
    desc: "High-intensity metabolic conditioning combined with smart nutrition protocols to torch fat while preserving hard-earned muscle.",
    features: ["HIIT Circuits", "Cardio Strategy", "Nutrition Coaching", "Body Recomp"],
    intensity: 95,
    sessions: "4x / week",
    color: "#528788",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    tag: "Restore",
    title: "Yoga & Flexibility",
    desc: "Recover faster, move better, and build a resilient body with our guided yoga flows and deep flexibility restoration sessions.",
    features: ["Mobility Work", "Breathwork", "Injury Prevention", "Stress Relief"],
    intensity: 55,
    sessions: "3x / week",
    color: "#4ade80",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-[#FAF9F5] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[#2D6A4F] text-xs font-bold tracking-[0.35em] uppercase">
              02 / Programs
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase text-[#0a1a10] leading-tight mt-2">
              Train With
              <br />
              <span className="text-[#2D6A4F]">Purpose.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            Each program is built around measurable outcomes and guided by science-backed methodology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group bg-white border border-gray-100 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: p.color }}
              />

              <div className="flex items-start justify-between mb-6">
                <div
                  className="p-3 rounded-sm"
                  style={{ backgroundColor: `${p.color}15`, color: p.color }}
                >
                  {p.icon}
                </div>
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-sm"
                  style={{ backgroundColor: `${p.color}15`, color: p.color }}
                >
                  {p.tag}
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase text-[#0a1a10] mb-3">
                {p.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.desc}</p>

              <div className="space-y-1.5 mb-6">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: p.color }}
                    />
                    <span className="text-xs text-gray-600 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Intensity</span>
                  <span className="text-xs font-bold text-gray-600">{p.intensity}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${p.intensity}%`, backgroundColor: p.color }}
                  />
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-xs text-gray-400">{p.sessions}</span>
                  <a
                    href="#contact"
                    className="text-xs font-bold uppercase tracking-wider transition-colors"
                    style={{ color: p.color }}
                  >
                    Enroll →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
