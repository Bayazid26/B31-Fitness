export default function Footer() {
  return (
    <footer className="bg-[#060f09] border-t border-[#2D6A4F]/20 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[#4ade80] text-xl font-black tracking-tighter uppercase">TFC</span>
          <span className="text-gray-600 text-sm">Tanjim Fitness Club · Dhaka, Bangladesh</span>
        </div>
        <p className="text-gray-700 text-xs">
          © {new Date().getFullYear()} Tanjim Fitness Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
