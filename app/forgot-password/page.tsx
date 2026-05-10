'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback`,
    });
    setMessage(error ? error.message : 'Reset link sent to your email!');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
        <h2 className="text-2xl font-black text-center">Reset Password</h2>
        <form onSubmit={handleReset} className="mt-8 space-y-4">
          <input type="email" placeholder="Enter your email" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none" onChange={(e) => setEmail(e.target.value)} required />
          <button disabled={loading} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-lg hover:bg-slate-800 transition-all">
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm font-bold text-blue-600">{message}</p>}
      </div>
    </div>
  );
}
