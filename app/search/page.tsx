'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Logic: Search for artisans by name or skill in your Supabase 'artisans' table
    const { data, error } = await supabase
      .from('artisans')
      .select('*')
      .or(`name.ilike.%${query}%,skill.ilike.%${query}%`);

    if (!error) setResults(data || []);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-slate-900 mb-8">Find Professionals</h1>
        
        <form onSubmit={handleSearch} className="relative group">
          <input 
            type="text" 
            placeholder="What service do you need? (e.g. Plumber, Electrician)" 
            className="w-full p-6 bg-white border border-slate-200 rounded-[2rem] shadow-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="absolute right-3 top-3 bottom-3 px-8 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition">
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        <div className="mt-12 grid gap-6">
          {results.length > 0 ? (
            results.map((artisan) => (
              <div key={artisan.id} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm flex justify-between items-center hover:shadow-md transition">
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{artisan.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm">{artisan.skill}</p>
                  <p className="text-slate-400 text-xs mt-1">📍 {artisan.location || 'Abuja'}</p>
                </div>
                <button className="px-6 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold">Book Now</button>
              </div>
            ))
          ) : (
            !loading && <p className="text-center text-slate-400 mt-20 italic">No artisans found. Try searching "Electrician" or "Plumber".</p>
          )}
        </div>
      </div>
    </div>
  );
}
