const plans = [
  {
    name: "Daily Pass",
    price: "৳250",
    period: "per day",
    desc: "Drop in anytime. No commitment.",
    features: [
      "Full gym access",
      "Locker room",
      "1 group class",
      "No long-term contract",
    ],
    cta: "Get Day Pass",
    featured: false,
  },
  {
    name: "Monthly Plan",
    price: "৳3,500",
    period: "per month",
    desc: "Our most popular plan for consistent athletes.",
    features: [
      "Unlimited gym access",
      "All group classes",
      "1 PT session / month",
      "Nutrition guidance",
      "Progress tracking",
    ],
    cta: "Start Today",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Unlimited Plan",
    price: "৳8,000",
    period: "per month",
    desc: "The all-inclusive elite membership.",
    features: [
      "Everything in Monthly",
      "Unlimited PT sessions",
      "Custom meal plan",
      "Priority booking",
      "Recovery zone access",
      "Dedicated locker",
    ],
    cta: "Go Elite",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0a1a10] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#4ade80] text-xs font-bold tracking-[0.35em] uppercase">
            03 / Pricing
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-white leading-tight mt-2">
            Invest In
            <br />
            <span
              style={{ WebkitTextStroke: "2px #2D6A4F", color: "transparent" }}
            >
              Yourself.
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-md mx-auto text-sm">
            Flexible plans that scale with your goals. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 border transition-all duration-300 ${
                plan.featured
                  ? "bg-[#2D6A4F] border-[#4ade80]/30 shadow-2xl shadow-[#2D6A4F]/30 scale-105"
                  : "bg-[#0d2218] border-[#2D6A4F]/20 hover:border-[#2D6A4F]/50"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#4ade80] text-[#0a1a10] text-xs font-black tracking-widest uppercase px-4 py-1">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-black uppercase tracking-wider mb-1 ${
                    plan.featured ? "text-[#4ade80]" : "text-gray-400"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-2">
                  <span
                    className={`text-5xl font-black ${
                      plan.featured ? "text-white" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm mb-2">{plan.period}</span>
                </div>
                <p
                  className={`text-sm ${
                    plan.featured ? "text-green-100/80" : "text-gray-500"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              <div className="space-y-3 flex-grow mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.featured ? "text-[#4ade80]" : "text-[#2D6A4F]"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`block text-center text-sm font-bold tracking-widest uppercase py-3.5 transition-all duration-200 ${
                  plan.featured
                    ? "bg-white text-[#2D6A4F] hover:bg-[#4ade80]"
                    : "border border-[#2D6A4F] text-[#4ade80] hover:bg-[#2D6A4F] hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
