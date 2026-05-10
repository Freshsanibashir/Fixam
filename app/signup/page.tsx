'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

const handleSignUp = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true); // <--- Add this!
  setMessage('');   // <--- Clear old errors
  
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { 
      emailRedirectTo: 'https://fixam-jet.vercel.app/auth/callback' 
    },
  });

  if (error) {
    setMessage(error.message);
  } else {
    setMessage('Check your email to verify your FixAm account!');
  }
  setLoading(false);
};

  return (
    // attractive mesh gradient background
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden px-6">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-md w-full backdrop-blur-xl bg-white/5 p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-white tracking-tight">Join FixAm</h2>
          <p className="text-slate-400 mt-2 font-medium">Reliable artisans at your doorstep.</p>
        </div>
        
        <form onSubmit={handleSignUp} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition text-white placeholder:text-slate-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition text-white placeholder:text-slate-500"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            disabled={loading}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Create Account'}
          </button>
        </form>

        {message && <p className="mt-6 text-center text-sm font-bold text-blue-400 animate-pulse">{message}</p>}
        
        <div className="mt-8 text-center border-t border-white/5 pt-6">
          <p className="text-slate-400 text-sm">
            Already have an account? <Link href="/login" className="text-white font-bold hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
