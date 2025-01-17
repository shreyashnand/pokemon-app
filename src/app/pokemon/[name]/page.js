import BreadCrumb from "@/components/BreadCrumb";

export default async function PokemonDetails ({ params }) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    .then((res) => res.json());

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <div>
      <div className="absolute left-10 top-10">
        <BreadCrumb path={["Home", pokemon.name]} />
      </div>
      <div className="p-4 bg-gray-300 min-h-screen flex justify-center items-center">
      
        <div className=" w-64 lg:w-72 rounded-tl-md rounded-tr-md">
          <div className="w-full h-72 bg-blue-400 lg:w-72 rounded-tl-md rounded-tr-md">
            {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} className="h-full w-full" /> */}
            <img src={imageUrl} alt={pokemon.name} className="h-full w-full" />
          </div>
          <div className="p-3 pl-5 bg-orange-300 h-44 flex flex-col justify-center">
            <div className="flex">
              <h2 className="font-semibold mr-1">Name:</h2>
              <h2 className="capitalize">{pokemon.name}</h2>
            </div>
            <div className="flex mt-1">
              <h2 className="font-semibold mr-1">Type:</h2>
     
              <h2 className="capitalize">

                {
                  pokemon.types.slice(0,3).map((item) => 
                    item.type.name
                  ).join(", ")
                }
              </h2>
            </div>
            <div className="flex mt-1">
              <h2 className="font-semibold mr-1">Stats:</h2>
              <h2 className="capitalize">

                {
                  pokemon.stats.slice(0,3).map((item) => 
                    item.stat.name
                  ).join(", ")
                }
              </h2>
            
            </div>
            <div className="flex mt-1">
              <h2 className="font-semibold mr-1">Abilities:</h2>
              {pokemon.abilities.map((a) => (
                <h2 key={a.ability.name} className="capitalize">
                  {a.ability.name}
                </h2>
              ))}
            </div>
            <div className="flex mt-1">
              <h2 className="font-semibold">Some moves:</h2>
              <h2>

                {
                  pokemon.moves.slice(0,3).map((item) => 
                    item.move.name
                  ).join(", ")
                }
              </h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
