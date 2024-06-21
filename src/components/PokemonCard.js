import Image from 'next/image';
import PlaceholderImage from './PlaceholderImage';
import Link from 'next/link';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon?.name}`}>
      <div className='rounded-md flex flex-col items-start p-2 shadow-md cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-105 bg-stone200'>
        <div className='w-full bg-stone100 rounded-md flex flex-row items-center justify-center'>
          {pokemon?.sprites?.front_default ? (
            <Image
              src={pokemon?.sprites?.front_default}
              alt={pokemon?.name}
              width={100}
              height={100}
              priority
            />
          ) : (
            <PlaceholderImage />
          )}
        </div>
        <div className='w-full bg-zinc'>
          <p className='text-md text-red m-4 capitalize'>{pokemon?.name}</p>
          <p className='m-4 text-sm text-blue'>Details</p>
        </div>
      </div>
    </Link>
  );
};
export default PokemonCard;
