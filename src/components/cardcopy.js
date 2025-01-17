import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ pokemon }) => (
  
  <div className=" border rounded-md p-6 flex flex-col bg-white shadow-md">
    <div className='flex justify-center'>
      {/* <Image width="300" height="600" quality={10} src={pokemon.image} alt={pokemon.name} className="w-full h-full mb-2" /> */}
      {/* <img src={pokemon.image} alt={pokemon.name} className='h-80 w-full' /> */}
      <div className="flex justify-center">
      <Image 
        width={100} 
        height={100} 
        quality={100} 
        src={pokemon.image} 
        alt={pokemon.name} 
        className="w-full h-full object-contain" 
        priority // Ensures faster loading
      />
    </div>
    </div>
    <h3 className="text-lg font-semibold capitalize mt-5 mb-10">{pokemon.name}</h3>
    <div className='block'>
      <Link href={`/pokemon/${pokemon.id}`} className="mb-3 text-blue-500">
       Details {"-->"}
      </Link>

    
    </div>
  </div>
);

export default Card;