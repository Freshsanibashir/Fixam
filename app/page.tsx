import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-extrabold text-blue-600">Fixam</h1>
        <p className="text-gray-500 mt-2">Professional Artisan Services at your fingertips.</p>
        
        <div className="mt-8 space-y-4">
          <Link href="/search" className="block w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Find an Artisan
          </Link>
          <Link href="/wallet" className="block w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
            Manage Wallet
          </Link>
          <Link href="/verify-payment" className="block w-full py-3 text-gray-500 text-sm hover:underline">
            Check Transaction Status
          </Link>
        </div>
      </div>
    </div>
  );
}
