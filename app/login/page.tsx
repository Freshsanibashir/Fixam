export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-2xl font-bold text-center">Login to FixAm</h2>
        <input type="email" placeholder="Email" className="w-full mt-6 p-3 border rounded-xl" />
        <input type="password" placeholder="Password" className="w-full mt-4 p-3 border rounded-xl" />
        <button className="w-full mt-6 py-3 bg-blue-600 text-white rounded-xl font-bold">Enter Dashboard</button>
        <a href="/forgot-password" className="block text-center mt-4 text-xs text-slate-400 hover:underline">Forgot Password?</a>
      </div>
    </div>
  );
}
