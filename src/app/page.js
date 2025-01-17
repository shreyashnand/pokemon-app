"use client";
import { useEffect, useState } from "react";
import { fetchPokemonTypes, fetchPokemons } from "./../utils/apis";
import Card from "@/components/Card";
import SearchForm from "@/components/Search";
import Link from "next/link";

export default function Home () {
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    async function loadData () {
      const typeList = await fetchPokemonTypes();
      setTypes(typeList);
      
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
      const data = await response.json();

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            id: details.id,
            name: details.name,
            image: details.sprites.front_default,
            types: details.types.map((t) => t.type.name),
          };
        })
      );

      setPokemons(detailedPokemons);
      setFilteredPokemons(detailedPokemons);
    }
    loadData();
  }, []);

  const applyFilters = (search, type) => {
    let filtered = [...pokemons];

    if (search) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (type) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.includes(type)
      );
    }

    setFilteredPokemons(filtered);
  };

  const handleSearch = (search) => {
    setSearchTerm(search);
    applyFilters(search, selectedType);
  };
  const handleTypeChange = (type) => {
    setSelectedType(type);
    applyFilters(searchTerm, type);
  };

  return (
    <div className="bg-gray-300 p-3 min-h-screen">
      <SearchForm types={types} onSearch={handleSearch} onTypeChange={handleTypeChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <Link  href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
              <Card key={pokemon.id} pokemon={pokemon} />
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-5">No Pokémon found</p>
        )}
      </div>
    </div>
  );
}
