const plans = [
  {
    name: "Daily Pass",
    price: "250",
    unit: "BDT / day",
    description: "Perfect for occasional visitors who want to try our facilities.",
    features: [
      "Full gym access",
      "Locker room",
      "Group class (1)",
      "No commitment",
    ],
    cta: "Get Day Pass",
    featured: false,
  },
  {
    name: "Monthly Plan",
    price: "2,500",
    unit: "BDT / month",
    description: "Our most popular plan — everything you need to hit your goals.",
    features: [
      "Unlimited gym access",
      "All group classes",
      "1 PT session / month",
      "Nutrition guidance",
      "Progress tracking",
    ],
    cta: "Start Monthly",
    featured: true,
  },
  {
    name: "Unlimited Plan",
    price: "4,000",
    unit: "BDT / month",
    description: "For serious athletes who want it all, every single day.",
    features: [
      "Unlimited gym access",
      "Priority class booking",
      "4 PT sessions / month",
      "Custom meal plan",
      "Recovery sessions",
      "Guest passes (2/month)",
    ],
    cta: "Go Unlimited",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 md:py-32"
      style={{ background: "var(--bg-light)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "#2D6A4F" }} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#528788" }}>
              Membership
            </span>
            <div className="w-8 h-px" style={{ background: "#2D6A4F" }} />
          </div>
          <h2
            className="font-display leading-none"
            style={{ fontSize: "clamp(48px, 7vw, 80px)", color: "#1A1A1A" }}
          >
            SIMPLE <span style={{ color: "#2D6A4F" }}>PRICING</span>
          </h2>
          <p className="mt-4 text-base max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            No hidden fees. Cancel anytime. Choose the plan that fits your lifestyle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-sm overflow-hidden hover-lift ${
                plan.featured ? "" : "border card-glow"
              }`}
              style={
                plan.featured
                  ? { background: "#1A2E26" }
                  : { background: "white", borderColor: "#E5EDE9" }
              }
            >
              {/* Featured badge */}
              {plan.featured && (
                <div
                  className="text-center py-2 text-xs font-semibold uppercase tracking-[0.15em]"
                  style={{ background: "#2D6A4F", color: "white" }}
                >
                  ★ Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan name */}
                <h3
                  className="font-display text-2xl mb-1"
                  style={{
                    color: plan.featured ? "white" : "#1A1A1A",
                    letterSpacing: "0.04em",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: plan.featured ? "rgba(255,255,255,0.55)" : "var(--text-muted)" }}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span
                      className="font-display text-5xl"
                      style={{ color: plan.featured ? "white" : "#1A1A1A" }}
                    >
                      ৳{plan.price}
                    </span>
                  </div>
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: plan.featured ? "rgba(255,255,255,0.4)" : "var(--text-muted)" }}
                  >
                    {plan.unit}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs"
                        style={
                          plan.featured
                            ? { background: "rgba(45,106,79,0.3)", color: "#52C896" }
                            : { background: "var(--bg-light)", color: "#2D6A4F" }
                        }
                      >
                        ✓
                      </span>
                      <span style={{ color: plan.featured ? "rgba(255,255,255,0.75)" : "#374151" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center py-3.5 rounded-sm text-sm font-semibold uppercase tracking-widest transition-all duration-300 ${
                    plan.featured ? "btn-primary" : "btn-outline"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
