"use client"

import { useRouter } from 'next/navigation';
// components/SearchBar.tsx
import { useState, ChangeEventHandler } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter()

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    const filteredData = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/api?searchWord=${query}`)
    const data = await filteredData.json()
    console.log(data)
    router.push(`/article/${data[0].id}`)
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
