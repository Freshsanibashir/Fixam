export const dynamic = 'force-dynamic';
'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { supabase } from '../lib/supabase';

// Define the shape to stop the 'never' type error
interface Artisan {
  id: string;
  full_name: string;
  role: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState('');
  // Explicitly typing the state as an array of Artisans
  const [artisans, setArtisans] = useState<Artisan[]>([]);

  const searchArtisans = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('role', 'artisan')
      .ilike('full_name', `%${query}%`);

    if (!error && data) {
      // Data is cast to Artisan[] to match the state type
      setArtisans(data as Artisan[]);
    }
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4 text-black italic">FixAm Abuja</h1>
        <input 
          className="border p-3 w-full mb-4 text-black rounded-lg"
          placeholder="Search for artisans..." 
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          onClick={searchArtisans}
          className="bg-green-600 text-white p-3 w-full rounded-lg font-bold"
        >
          Search
        </button>

        <div className="mt-6 space-y-4">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="border p-4 rounded-xl bg-white text-black shadow-sm flex justify-between items-center">
              <div>
                <h2 className="font-bold">{artisan.full_name}</h2>
                <p className="text-xs text-gray-500 uppercase">{artisan.role}</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
