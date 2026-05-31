"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0a1a10] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left info */}
        <div>
          <span className="text-[#4ade80] text-xs font-bold tracking-[0.35em] uppercase">
            05 / Contact
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-white leading-tight mt-2 mb-6">
            Start Your
            <br />
            <span style={{ WebkitTextStroke: "2px #2D6A4F", color: "transparent" }}>
              Journey.
            </span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-sm">
            Ready to transform your body and mindset? Fill out the form and our team will reach out within 24 hours to get you started.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                label: "Location",
                value: "Road 12, Block F, Banani, Dhaka 1213",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                label: "Phone",
                value: "+880 1700-000000",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                label: "Email",
                value: "hello@tanjimfitness.com",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Hours",
                value: "Sat–Thu 6AM–10PM · Fri 2PM–10PM",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="text-[#4ade80] mt-0.5 flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="text-xs text-gray-600 uppercase tracking-widest mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-gray-300 text-sm">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="bg-[#0d2218] border border-[#2D6A4F]/20 p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#2D6A4F] flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-black uppercase mb-2">You&apos;re In!</h3>
              <p className="text-gray-400 text-sm">
                We&apos;ll reach out within 24 hours to set up your free trial.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-white text-xl font-black uppercase mb-6">
                Get Your Free Trial
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-[#0a1a10] border border-[#2D6A4F]/30 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#4ade80] transition-colors placeholder-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+880 ..."
                    className="w-full bg-[#0a1a10] border border-[#2D6A4F]/30 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#4ade80] transition-colors placeholder-gray-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-[#0a1a10] border border-[#2D6A4F]/30 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#4ade80] transition-colors placeholder-gray-700"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Interested Program
                </label>
                <select
                  value={form.program}
                  onChange={(e) => setForm({ ...form, program: e.target.value })}
                  className="w-full bg-[#0a1a10] border border-[#2D6A4F]/30 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#4ade80] transition-colors appearance-none"
                >
                  <option value="" className="bg-[#0a1a10]">Select a program</option>
                  <option value="strength" className="bg-[#0a1a10]">Strength Training</option>
                  <option value="fatloss" className="bg-[#0a1a10]">Fat Loss</option>
                  <option value="yoga" className="bg-[#0a1a10]">Yoga & Flexibility</option>
                  <option value="general" className="bg-[#0a1a10]">General Fitness</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your goals..."
                  className="w-full bg-[#0a1a10] border border-[#2D6A4F]/30 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#4ade80] transition-colors placeholder-gray-700 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2D6A4F] hover:bg-[#528788] text-white font-bold tracking-widest uppercase py-4 text-sm transition-colors duration-200"
              >
                Claim Free Trial
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
