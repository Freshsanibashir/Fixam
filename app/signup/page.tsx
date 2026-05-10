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
    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: 'https://fixam-jet.vercel.app/auth/callback',
        },
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage('Check your email for the verification link!');
      }
    } catch (err) {
      setMessage('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden px-6">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-md w-full backdrop-blur-3xl bg-white/5 p-10 rounded-[3rem] border border-white/10 shadow-2xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-white tracking-tight">Get Started</h2>
          <p className="text-slate-400 mt-2 text-sm">Create your FixAm account</p>
        </div>
        
        <form onSubmit={handleSignUp} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition text-white placeholder:text-slate-600"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition text-white placeholder:text-slate-600"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            disabled={loading}
            className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Join Now'}
          </button>
        </form>

        {message && <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-center text-sm font-bold animate-pulse">{message}</div>}
        
        <div className="mt-8 text-center pt-6 border-t border-white/5">
          <Link href="/login" className="text-sm font-bold text-slate-500 hover:text-white transition">
            Already have an account? <span className="text-blue-500">Log In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
