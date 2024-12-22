import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const PokemonGrid = ({ pokemonData }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const handleSearch = (query) => {
    const filtered = pokemonData.filter((ele) =>
      ele.name.toLowerCase().includes(query.toLowerCase()) ||
      (ele.description && ele.description.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleFilteredProducts = (e) => {
    const filterValue = e.target.value;
    const products = filterValue
      ? pokemonData.filter((ele) => ele.type.includes(filterValue))
      : pokemonData;
    setFilteredProducts(products);
    setCurrentPage(1);
  };

  const paginateData = (data) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(
    (filteredProducts.length > 0 ? filteredProducts : pokemonData).length / itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage < 1) newPage = 1;
    if (newPage > totalPages) newPage = totalPages;
    setCurrentPage(newPage);
  };

  const currentData =
    filteredProducts.length > 0 ? filteredProducts : pokemonData;

  useEffect(() => {
    console.log(pokemonData); // Log pokemonData for debugging
  }, [pokemonData]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200">
      {/* Navbar */}
      <Navbar onSearch={handleSearch} />

      {/* Filter and Title Section */}
      <div className="flex justify-between items-center bg-gray-50 py-4 px-6 shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-800 mx-auto">Pokémon Gallery</h1>
        {/* Filter Section on the right */}
        <select
          name="filter"
          id="filter"
          onChange={handleFilteredProducts}
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 bg-white"
        >
          <option value="">Filter by Type</option>
          <option value="grass">Grass</option>
          <option value="poison">Poison</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="bug">Bug</option>
        </select>
      </div>

      {/* Pokemon Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {paginateData(currentData).map((ele) => (
          <div
            key={ele.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <img
              className="w-full h-48 object-contain mb-4 mx-auto"
              src={ele.sprite}
              alt={ele.name}
            />
            <h1 className="text-center text-xl font-bold text-gray-800 mb-4">
              {ele.name}
            </h1>
            <ul className="list-none pl-0 m-0 space-y-2">
              {ele.type.map((el, index) => (
                <li
                  key={index}
                  className="relative pl-6 text-gray-600 text-sm font-medium"
                >
                  <span className="absolute left-0 top-0 text-2xl text-gray-500 font-bold">
                    •
                  </span>
                  {el}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center my-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-6 py-2 rounded-l-lg ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-700 text-white hover:bg-gray-800"}`}
        >
          Previous
        </button>
        <span className="px-6 py-2 bg-white text-gray-700 shadow-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-6 py-2 rounded-r-lg ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-700 text-white hover:bg-gray-800"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonGrid;
