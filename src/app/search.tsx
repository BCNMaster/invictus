import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Search query:', query);
    // Implement search functionality here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1a1d23]">
      <form onSubmit={handleSearch} className="w-full max-w-md p-4 bg-white/10 rounded-lg backdrop-blur-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search career paths..."
          className="w-full p-4 text-lg text-black rounded-lg"
        />
        <button type="submit" className="w-full mt-4 p-4 bg-purple-500 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
}
