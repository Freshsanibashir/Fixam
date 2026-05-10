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
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Success! Check your email for a confirmation link.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
        <h2 className="text-3xl font-black text-slate-900 text-center tracking-tight">Join FixAm</h2>
        
        <form onSubmit={handleSignUp} className="mt-8 space-y-4">
          <input 
            type="email" 
            placeholder="Work Email" 
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            disabled={loading}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-700 transition-all disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Get Started'}
          </button>
        </form>

        {message && <p className="mt-4 text-center text-sm font-bold text-blue-600">{message}</p>}
        
        <div className="mt-8 text-center">
          <Link href="/login" className="text-xs font-bold text-slate-400 hover:text-blue-600 transition">
            Already have an account? Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
