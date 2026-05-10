import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-blue-600">FixAm</div>
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#features" className="hover:text-blue-600 transition">Why Us</a>
        </div>
        <div className="flex space-x-4">
          <Link href="/login" className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition">Login</Link>
          <Link href="/signup" className="px-5 py-2 bg-blue-600 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest border border-blue-100">
            Now in Beta • Abuja, Nigeria
          </span>
          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Reliable Artisans. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Instant Connections.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            FixAm is the premium infrastructure for household and commercial maintenance. We bridge the gap between skilled professionals and those who value quality, safety, and speed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/search" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl hover:bg-slate-800 transition-all">
              Find an Artisan Now
            </Link>
            <Link href="/wallet" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold shadow-sm hover:bg-slate-50 transition-all">
              Manage Funds
            </Link>
          </div>
        </div>

        {/* Floating Visual Elements */}
        <div className="mt-20 max-w-5xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
             {/* Replace this div with an <img src="..." /> for investor pitch */}
             <div className="text-slate-300 font-medium italic text-center p-10">
                [High-Resolution Dashboard Preview Image Showing Real Estate / Artisan Map]
             </div>
          </div>
        </div>
      </main>

      {/* Why Section */}
      <section id="features" className="py-20 bg-white border-t border-slate-100 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
               <span className="text-blue-600 text-xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Vetted Quality</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Every artisan on FixAm undergoes a rigorous 5-step background and skill verification process.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-6">
               <span className="text-indigo-600 text-xl font-bold">₦</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Secure Wallet</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Funds are held in escrow. Pay only when the job is done and you are 100% satisfied.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
               <span className="text-green-600 text-xl font-bold">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Real-Time Search</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Using proprietary lead-scoring logic, we find the best-ranked professional in your local area instantly.</p>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-400 text-xs border-t border-slate-50 uppercase tracking-widest font-bold">
        © 2026 FixAm Technology • Built for Abuja
      </footer>
    </div>
  );
}
