export const dynamic = 'force-dynamic';
export const dynamic = 'force-dynamic';
export const dynamic = 'force-dynamic';
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ArtisanWallet() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchBalance() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('balance')
          .eq('id', user.id)
          .single();
        setBalance(data?.balance || 0);
      }
    }
    fetchBalance();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">FixAm Wallet</h1>
      
      <div className="bg-green-700 text-white p-8 rounded-2xl shadow-xl mb-6">
        <p className="text-sm opacity-80">Available for Withdrawal</p>
        <h2 className="text-4xl font-black mt-2">₦{balance.toLocaleString()}</h2>
      </div>

      <button className="w-full bg-white border-2 border-green-700 text-green-700 font-bold py-4 rounded-xl active:bg-green-50">
        Withdraw to Bank Account
      </button>

      <p className="text-center text-xs text-gray-500 mt-4">
        Withdrawals are processed instantly via Paystack Transfers.
      </p>
    </div>
  );
}
