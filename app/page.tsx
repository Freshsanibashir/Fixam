import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
        <h1 className="text-4xl font-black text-blue-600 tracking-tight">FixAm</h1>
        <p className="text-gray-500 mt-3 font-medium">Reliable artisans at your doorstep.</p>
        
        <div className="mt-10 space-y-4">
          <Link href="/search" className="block w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 active:scale-95 transition-all">
            Find an Artisan
          </Link>
          
          <Link href="/wallet" className="block w-full py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 active:scale-95 transition-all">
            My Wallet
          </Link>

          <Link href="/verify-payment" className="block w-full py-2 text-gray-400 text-sm font-semibold hover:text-blue-500 transition">
            Verify a Transaction
          </Link>
        </div>
      </div>
    </div>
  );
}
