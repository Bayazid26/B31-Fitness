"use client";
const trainers = [
  {
    name: "Rafiul Islam",
    specialty: "Strength & Powerlifting",
    bio: "NSCA certified coach with 10 years of elite powerlifting experience. 3× national champion.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80",
    sessions: "200+",
    rating: "4.9",
    tag: "Strength",
  },
  {
    name: "Nusrat Jahan",
    specialty: "Fat Loss & HIIT",
    bio: "Precision Nutrition certified. Specializes in sustainable body transformation and metabolic health.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    sessions: "150+",
    rating: "5.0",
    tag: "Cardio",
  },
  {
    name: "Tariq Hossain",
    specialty: "Yoga & Mobility",
    bio: "RYT 500 certified yoga instructor and movement therapist. Expert in injury prevention.",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=600&q=80",
    sessions: "300+",
    rating: "4.8",
    tag: "Yoga",
  },
];

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-main)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "#2D6A4F" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#528788" }}>
                Expert Coaches
              </span>
            </div>
            <h2
              className="font-display leading-none"
              style={{ fontSize: "clamp(48px, 7vw, 80px)", color: "#1A1A1A" }}
            >
              MEET THE
              <br />
              <span style={{ color: "#2D6A4F" }}>TRAINERS</span>
            </h2>
          </div>
          <p
            className="max-w-sm text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Certified professionals who are passionate about helping you unlock your full potential.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group rounded-sm overflow-hidden hover-lift card-glow border"
              style={{ borderColor: "#E5EDE9", background: "white" }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%)",
                  }}
                />
                {/* Specialty tag */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-widest"
                  style={{ background: "rgba(45,106,79,0.9)", color: "white" }}
                >
                  {trainer.tag}
                </div>
                {/* Name on image */}
                <div className="absolute bottom-4 left-4">
                  <div className="font-display text-2xl text-white" style={{ letterSpacing: "0.04em" }}>
                    {trainer.name}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {trainer.specialty}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                  {trainer.bio}
                </p>

                {/* Stats row */}
                <div
                  className="flex items-center justify-between pt-4 border-t"
                  style={{ borderColor: "#E5EDE9" }}
                >
                  <div className="text-center">
                    <div className="font-display text-xl" style={{ color: "#2D6A4F" }}>
                      {trainer.sessions}
                    </div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                      Sessions
                    </div>
                  </div>
                  <div className="w-px h-8" style={{ background: "#E5EDE9" }} />
                  <div className="text-center">
                    <div className="flex items-center gap-1">
                      <span className="font-display text-xl" style={{ color: "#2D6A4F" }}>
                        {trainer.rating}
                      </span>
                      <span style={{ color: "#F59E0B", fontSize: "12px" }}>★</span>
                    </div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                      Rating
                    </div>
                  </div>
                  <div className="w-px h-8" style={{ background: "#E5EDE9" }} />
                  <a
                    href="#contact"
                    className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200 px-3 py-2 rounded-sm"
                    style={{ color: "#2D6A4F", background: "var(--bg-light)" }}
                  >
                    Book
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
