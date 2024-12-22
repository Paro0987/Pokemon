import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-yellow-300 transition-colors">
            Pokémon
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by name"
            className="px-4 py-2 w-64 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 bg-white"
          />
          <button
            onClick={handleSearchClick}
            className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-r-md hover:bg-yellow-600 hover:text-white transition-transform transform hover:scale-105"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
