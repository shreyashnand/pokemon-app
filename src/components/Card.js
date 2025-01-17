import React from "react";
import Image from "next/image";

const Card = ({ pokemon }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <div className="border rounded-md p-6 flex flex-col bg-white shadow-md">
      <div className="flex justify-center">
        <Image 
          width={300}
          height={300} 
          quality={100}
          src={imageUrl} 
          alt={pokemon.name} 
          className="object-contain rounded-md"
          priority
        />
      </div>
      <h3 className="text-lg font-semibold capitalize mt-5 mb-10">{pokemon.name}</h3>
      <div className="block">
        <div className="mb-3 text-blue-500">
          Details {"-->"}
        </div>
      </div>
    </div>
  );
};

export default Card;
