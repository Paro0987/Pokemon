import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonGrid from "./PokemonGrid";
import { fetchData } from "../Redux/action";

const PokemonCard = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const url = "http://localhost:8080/pokemon";

  useEffect(() => {
    dispatch(fetchData(url));
  }, [dispatch, url]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      {pokemon.loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="loader"></div>
        </div>
      ) : pokemon.error ? (
        <div className="text-center text-red-500 font-semibold">
          Failed to fetch Pokémon data. Please try again later.
        </div>
      ) : (
        <PokemonGrid pokemonData={pokemon.data} />
      )}
    </div>
  );
};

export default PokemonCard;
