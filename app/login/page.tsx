'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      router.push('/search'); // Directs to search after success
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 transition-all hover:shadow-blue-100/50">
        <h2 className="text-3xl font-black text-slate-900 text-center tracking-tight">Welcome Back</h2>
        <p className="text-slate-500 text-center mt-2 text-sm font-medium">Access your FixAm dashboard.</p>
        
        <form onSubmit={handleLogin} className="mt-8 space-y-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            disabled={loading}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg hover:bg-blue-700 active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        {error && <p className="mt-4 text-center text-sm text-red-500 font-semibold">{error}</p>}
        
        <div className="mt-8 flex flex-col items-center space-y-3">
<Link href="/forgot-password" className="text-xs font-bold text-slate-400 hover:text-blue-600 transition">Forgot Password?</Link>
          <p className="text-xs text-slate-400">New to FixAm? <Link href="/signup" className="text-blue-600 font-bold hover:underline">Create Account</Link></p>
        </div>
      </div>
    </div>
  );
}
