import React, { useState, useEffect } from "react";

const PokemonGrid = ({ pokemonData }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const handleFilteredProducts = (e) => {
    const products = e.target.value
      ? pokemonData.filter((ele) => ele.type.includes(e.target.value))
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
    (filteredProducts.length > 0 ? filteredProducts : pokemonData).length / 
      itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage < 1) newPage = 1;
    if (newPage > totalPages) newPage = totalPages;
    setCurrentPage(newPage);
  };

  return (
    <div className="relative">
      <div className="flex justify-end bg-gray-200 p-4">
        <select
          name="filter"
          id="filter"
          onChange={handleFilteredProducts}
          className="p-2 border rounded-md"
        >
          <option value="">Filter by Type</option>
          <option value="grass">Grass</option>
          <option value="poison">Poison</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="bug">Bug</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {(filteredProducts.length > 0 ? filteredProducts : pokemonData)
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((ele) => (
            <div
              key={ele.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                className="w-full h-48 object-contain mb-4 mx-auto"
                src={ele.sprite}
                alt={ele.name}
              />
              <h1 className="text-center text-xl font-semibold mb-2">
                {ele.name}
              </h1>
              <ul className="list-none pl-0 m-0 space-y-2">
  {ele.type.map((el, index) => (
    <li key={index} className="relative pl-6 text-gray-800 text-sm font-medium hover:text-blue-600">
      <span className="absolute left-0 top-0 text-2xl text-blue-500 font-bold">•</span>
      {el}
    </li>
  ))}
</ul>

            </div>
          ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-md"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonGrid;