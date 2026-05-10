'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .or(`full_name.ilike.%${query}%,skill.ilike.%${query}%`);
    setResults(data || []);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
      
      <div className="max-w-2xl mx-auto pt-16 relative z-10">
        <h1 className="text-4xl font-black mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Find Professionals
        </h1>

        <form onSubmit={handleSearch} className="relative mb-12">
          <input 
            type="text" 
            placeholder="Search e.g. 'Bashir' or 'Plumber'..." 
            className="w-full p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg shadow-2xl"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="absolute right-3 top-3 bottom-3 px-8 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20">
            Search
          </button>
        </form>

        <div className="grid gap-4">
          {results.map((res) => (
            <div key={res.id} className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md flex justify-between items-center hover:bg-white/10 transition group">
              <div>
                <h3 className="text-xl font-bold">{res.full_name}</h3>
                <p className="text-blue-400 font-semibold text-sm tracking-wide uppercase">{res.skill}</p>
                <p className="text-slate-500 text-xs mt-1">📍 {res.location}</p>
              </div>
              <button className="px-6 py-3 bg-white text-black rounded-xl font-black group-hover:bg-blue-500 group-hover:text-white transition-colors">
                BOOK
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
