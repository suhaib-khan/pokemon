import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonTypes, initialPokemonList }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getAllPokemonDetails = async (pokemons) => {
    const pokemonDetails = await Promise.all(
      pokemons?.map(async (pokemon) => {
        const response = await axios.get(pokemon?.url);
        const { data } = response;
        return data;
      })
    );
    setPokemonList(pokemonDetails);
    setAllPokemons(pokemonDetails);
  };

  useEffect(() => {
    initialPokemonList && getAllPokemonDetails(initialPokemonList);
  }, [initialPokemonList]);

  const onPokemonSelection = async (pokemonType) => {
    setSearchTerm('');
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/type/${pokemonType?.value}`
      );
      const { pokemon } = response?.data;
      pokemon?.length > 0 &&
        getAllPokemonDetails(
          pokemon?.map((pokemonItem) => ({
            name: pokemonItem?.pokemon?.name,
            url: pokemonItem?.pokemon?.url,
          }))
        );
    } catch (error) {
      console.log(`err`, error);
    }
  };

  const onSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredPokemons = allPokemons?.filter((pokemon) =>
      pokemon?.name?.toLowerCase()?.includes(e.target.value?.toLowerCase())
    );

    setPokemonList(
      e.target.value?.trim()?.length > 0 ? filteredPokemons : allPokemons
    );
  };

  return (
    <div className='container flex flex-col'>
      <div className='w-full flex flex-col justify-between items-start mt-4 gap-4'>
        <div className='w-full sm:w-1/3'>
          <Select
            options={pokemonTypes}
            onChange={onPokemonSelection}
            placeholder='Select Pokemon Type'
            className='capitalize'
          />
        </div>
        <div className='w-full sm:w-1/3'>
          <input
            className='border border-gray-500 w-full px-3 py-2 rounded-md'
            value={searchTerm}
            onChange={onSearch}
            placeholder='Search Pokemons...'
          />
        </div>
      </div>
      <div className='h-screen'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 h-full overflow-auto'>
          {pokemonList?.map((pokemon) => (
            <PokemonCard key={pokemon?.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
