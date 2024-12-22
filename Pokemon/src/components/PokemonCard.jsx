import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import PokemonGrid from "./PokemonGrid";

const PokemonCard = () => {
  const [pokemonData, setPokemonData] = useState([]);
  // const pokemon = useSelector((state) => state.pokemon);
  // const dispatch = useDispatch();
  const url = `http://localhost:8080/pokemon`;
  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(url);
      setPokemonData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return <PokemonGrid pokemonData={pokemonData} />;
};

export default PokemonCard;
