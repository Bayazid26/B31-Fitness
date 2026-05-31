export default function Marquee() {
  const items = [
    "Strength Training",
    "Fat Loss",
    "Yoga & Flexibility",
    "Personal Coaching",
    "Nutrition Plans",
    "HIIT Workouts",
    "Recovery & Mobility",
    "Group Classes",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      className="py-5 overflow-hidden"
      style={{ background: "#2D6A4F" }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-8 shrink-0">
            <span
              className="font-display text-lg tracking-wider whitespace-nowrap"
              style={{ color: "white", opacity: 0.9 }}
            >
              {item}
            </span>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "8px" }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
