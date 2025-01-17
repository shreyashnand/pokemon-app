const API_BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonTypes = async () => {
  const res = await fetch(`${API_BASE_URL}/type`);
  const data = await res.json();
  return data.results.map((type) => type.name);
};

export const fetchPokemons = async () => {
  const res = await fetch(`${API_BASE_URL}/pokemon?limit=100`);
  const data = await res.json();
  return data.results.map((pokemon, index) => ({
    id: index + 1,
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
  }));
};
