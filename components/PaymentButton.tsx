'use client';
import { useState } from 'react';

export default function PaymentButton({ amount, email, jobId }: { amount: number, email: string, jobId: string }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const res = await fetch('/api/pay', {
      method: 'POST',
      body: JSON.stringify({ email, amount, jobId }),
    });
    const data = await res.json();
    
    if (data.status && data.data.authorization_url) {
      window.location.href = data.data.authorization_url; // Redirects to Paystack
    } else {
      alert("Payment failed to initialize. Check your Paystack keys.");
    }
    setLoading(false);
  };

  return (
    <button 
      onClick={handlePayment}
      disabled={loading}
      className="w-full bg-green-600 text-white font-bold py-4 rounded-lg shadow-lg active:scale-95 transition-transform"
    >
      {loading ? 'Processing...' : `Pay ₦${amount.toLocaleString()} into Escrow`}
    </button>
  );
}
