import '../styles/globals.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import PlaceholderImage from './PlaceholderImage';

const PokemonDetails = ({ pokemon }) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }
  const typesRenderer = () =>
    pokemon?.types?.map((pokemonType) => pokemonType?.type?.name)?.join(`, `);

  const statsRenderer = () =>
    pokemon?.stats?.map((pokemonStat) => pokemonStat?.stat?.name)?.join(`, `);

  const abilitiesRenderer = () =>
    pokemon?.abilities
      ?.map((pokemonAbility) => pokemonAbility?.ability?.name)
      ?.join(`, `);

  const movesRenderer = () =>
    pokemon?.moves
      ?.splice(0, 5)
      ?.map((pokemonMove) => pokemonMove?.move?.name)
      ?.join(`, `);

  return (
    <div className='flex min-h-screen flex-col items-start justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 mx-auto bg-neutral50'>
      <nav className='my-4 text-sm'>
        <Link href='/'>
          <span className='text-blue'>Home</span>
        </Link>{' '}
        / <span className='capitalize'>{pokemon?.name}</span>
      </nav>
      <div className='h-screen w-full flex flex-row items-center justify-center bg-stone200'>
        <div className='rounded-md w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 shadow-md bg-red300'>
          <div className='w-full flex flex-row items-center justify-center p-4'>
            {pokemon?.sprites?.front_default ? (
              <Image
                src={pokemon?.sprites?.front_default}
                alt={pokemon?.name}
                width={150}
                height={150}
              />
            ) : (
              <PlaceholderImage />
            )}
          </div>
          <div className='bg-teal p-4'>
            <div className=''>
              <span className='font-bold mr-2 text-sm'>Name:</span>
              <span className='capitalize text-sm'>{pokemon?.name}</span>
            </div>
            <div className=''>
              <span className='font-bold mr-2 text-sm'>Type:</span>
              <span className='capitalize text-sm'>{typesRenderer()}</span>
            </div>
            <div className=''>
              <span className='font-bold mr-2 text-sm'>Stats:</span>
              <span className='capitalize text-sm'>{statsRenderer()}</span>
            </div>
            <div className=''>
              <span className='font-bold mr-2 text-sm'>Abilities:</span>
              <span className='capitalize text-sm'>{abilitiesRenderer()}</span>
            </div>
            <div className=''>
              <span className='font-bold mr-2 text-sm'>Some Moves:</span>
              <span className='capitalize text-sm'>{movesRenderer()}</span>
            </div>
          </div>
        </div>
      </div>
      <div className=''></div>
    </div>
  );
};
export default PokemonDetails;
