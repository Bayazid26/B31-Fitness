export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1a10]"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a10] via-[#0d2218] to-[#0a1a10]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2D6A4F]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#528788]/15 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Decorative vertical text */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
        <span
          className="text-[#2D6A4F]/40 text-xs font-bold tracking-[0.4em] uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Est. 2024 · Dhaka, Bangladesh
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2D6A4F]/20 border border-[#2D6A4F]/50 px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
          <span className="text-[#4ade80] text-xs font-bold tracking-[0.3em] uppercase">
            Now Accepting New Members
          </span>
        </div>

        <h1 className="text-white font-black uppercase leading-none mb-6">
          <span className="block text-5xl sm:text-7xl lg:text-9xl tracking-tight">
            FORGE YOUR
          </span>
          <span
            className="block text-5xl sm:text-7xl lg:text-9xl tracking-tight"
            style={{
              WebkitTextStroke: "2px #2D6A4F",
              color: "transparent",
            }}
          >
            LIMITS
          </span>
          <span className="block text-3xl sm:text-5xl lg:text-7xl text-[#4ade80] tracking-tight mt-2">
            HERE.
          </span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Elite training programs. Expert coaches. Real results.
          <br className="hidden sm:block" />
          Welcome to{" "}
          <span className="text-white font-semibold">Tanjim Fitness Club</span>{" "}
          — where champions are built.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group relative bg-[#2D6A4F] hover:bg-[#528788] text-white font-bold tracking-widest uppercase px-10 py-4 text-sm transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Join Now — Free Trial</span>
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a
            href="#programs"
            className="text-gray-400 hover:text-[#4ade80] font-semibold tracking-widest uppercase text-sm transition-colors duration-200 flex items-center gap-2"
          >
            View Programs
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto border-t border-[#2D6A4F]/30 pt-10">
          {[
            { num: "500+", label: "Active Members" },
            { num: "12+", label: "Expert Trainers" },
            { num: "98%", label: "Success Rate" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#4ade80]">
                {s.num}
              </div>
              <div className="text-gray-500 text-xs tracking-widest uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-600 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#2D6A4F] to-transparent" />
      </div>
    </section>
  );
}
