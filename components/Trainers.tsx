const trainers = [
  {
    name: "Rafiq Ahmed",
    specialty: "Strength & Powerlifting",
    exp: "8 years",
    cert: "CSCS Certified",
    bio: "Former national-level powerlifter. Rafiq has trained over 200 athletes to hit personal bests and competition podiums.",
    initials: "RA",
    color: "#2D6A4F",
  },
  {
    name: "Nadia Islam",
    specialty: "Fat Loss & HIIT",
    exp: "6 years",
    cert: "NASM Certified",
    bio: "Metabolic conditioning specialist who has helped 300+ clients transform their bodies with evidence-based fat loss protocols.",
    initials: "NI",
    color: "#528788",
  },
  {
    name: "Karim Hossain",
    specialty: "Yoga & Mobility",
    exp: "10 years",
    cert: "RYT-500 Certified",
    bio: "Brings 10 years of deep yoga practice and sports rehabilitation into every session. His classes have a waitlist for a reason.",
    initials: "KH",
    color: "#4ade80",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="bg-[#F0F7F4] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[#2D6A4F] text-xs font-bold tracking-[0.35em] uppercase">
              04 / Trainers
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase text-[#0a1a10] leading-tight mt-2">
              Meet Your
              <br />
              <span className="text-[#2D6A4F]">Coaches.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            Certified. Experienced. Obsessed with your progress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="group bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image placeholder */}
              <div
                className="relative h-64 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: `${t.color}15` }}
              >
                {/* Abstract background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 70%, ${t.color} 0%, transparent 60%), radial-gradient(circle at 70% 30%, ${t.color} 0%, transparent 60%)`,
                  }}
                />
                {/* Avatar circle */}
                <div
                  className="relative w-32 h-32 rounded-full flex items-center justify-center text-4xl font-black text-white shadow-lg"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                {/* Cert badge */}
                <div
                  className="absolute top-4 right-4 text-xs font-bold px-3 py-1.5 text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.cert}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-xl font-black uppercase text-[#0a1a10]">
                    {t.name}
                  </h3>
                  <span className="text-xs text-gray-400 mt-1">{t.exp}</span>
                </div>
                <div
                  className="text-sm font-bold uppercase tracking-wider mb-3"
                  style={{ color: t.color }}
                >
                  {t.specialty}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{t.bio}</p>
                <a
                  href="#contact"
                  className="text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1"
                  style={{ color: t.color }}
                >
                  Book a session
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
