"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", goal: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ background: "#1A2E26" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "#2D6A4F" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#528788" }}>
                Get In Touch
              </span>
            </div>
            <h2
              className="font-display leading-none mb-6"
              style={{ fontSize: "clamp(48px, 6vw, 72px)", color: "white" }}
            >
              START YOUR
              <br />
              <span style={{ color: "#2D6A4F" }}>JOURNEY</span>
              <br />
              TODAY
            </h2>
            <p className="text-base leading-relaxed mb-10 max-w-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Ready to transform? Fill in the form and our team will reach out within 24 hours with a personalized plan.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                {
                  icon: "📍",
                  label: "Location",
                  value: "House 12, Road 4, Banani, Dhaka 1213",
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "+880 1700-000000",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "hello@tanjimfitness.com",
                },
                {
                  icon: "⏰",
                  label: "Hours",
                  value: "Sat–Thu: 6am–10pm  |  Fri: 8am–6pm",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 text-base"
                    style={{ background: "rgba(45,106,79,0.25)" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "#528788" }}>
                      {label}
                    </div>
                    <div className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div
            className="rounded-sm p-8 md:p-10"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {submitted ? (
              <div className="text-center py-16">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl mb-6"
                  style={{ background: "rgba(45,106,79,0.3)" }}
                >
                  ✓
                </div>
                <h3 className="font-display text-3xl text-white mb-3">You&apos;re In!</h3>
                <p style={{ color: "rgba(255,255,255,0.6)" }}>
                  We&apos;ll contact you within 24 hours to set up your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3
                  className="font-display text-2xl text-white mb-6"
                  style={{ letterSpacing: "0.04em" }}
                >
                  FREE CONSULTATION
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Rafiq Ahmed"
                      className="form-input w-full px-4 py-3 rounded-sm text-sm"
                      style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.1)", color: "white" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+880 1700-..."
                      className="form-input w-full px-4 py-3 rounded-sm text-sm"
                      style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.1)", color: "white" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className="form-input w-full px-4 py-3 rounded-sm text-sm"
                    style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.1)", color: "white" }}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Your Goal
                  </label>
                  <select
                    name="goal"
                    value={form.goal}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-sm text-sm cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.1)", color: form.goal ? "white" : "rgba(255,255,255,0.4)" }}
                  >
                    <option value="" disabled>Select a goal...</option>
                    <option value="strength">Build Strength & Muscle</option>
                    <option value="fat-loss">Lose Fat & Get Lean</option>
                    <option value="flexibility">Improve Flexibility</option>
                    <option value="general">General Fitness</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your fitness background..."
                    className="form-input w-full px-4 py-3 rounded-sm text-sm resize-none"
                    style={{ background: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.1)", color: "white" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-sm text-sm mt-2"
                >
                  Claim Free Consultation →
                </button>

                <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                  No commitment required. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
