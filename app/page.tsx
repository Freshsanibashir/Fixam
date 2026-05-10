'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-blue-100">
      {/* Premium Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black text-slate-900 tracking-tighter">FixAm</div>
        <div className="hidden md:flex space-x-8 text-sm font-bold text-slate-500">
          <Link href="/search" className="hover:text-blue-600 transition">Find Artisan</Link>
          <Link href="#" className="hover:text-blue-600 transition">About</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm font-bold text-slate-900">Login</Link>
          <Link href="/signup" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Now in Beta • Abuja, Nigeria
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
            Reliable Artisans. <br/>
            <span className="text-blue-600">Instant Connections.</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed px-4">
            FixAm is the premium infrastructure for household and commercial maintenance in Abuja. 
            We bridge the gap between quality-focused clients and vetted professionals.
          </p>
        </div>

        {/* Dashboard Preview - Fixed the blank box */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[4rem] blur-2xl opacity-10"></div>
          <div className="relative h-[500px] w-full bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col items-center justify-center p-12">
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Dashboard Visualizing...</h3>
            <p className="text-slate-400 text-sm mt-2">Connecting to Abuja Artisan Network</p>
            <Link href="/search" className="mt-8 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:scale-105 transition">Explore the Map</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
