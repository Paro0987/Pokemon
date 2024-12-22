import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-400">
            Pokemon
          </a>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search by name ,description"
            className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-grey-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
