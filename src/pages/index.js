import '../styles/globals.css';
import PokemonList from '@/components/PokemonList';
import axios from 'axios';

const Home = ({ pokemonTypes, initialPokemonList }) => {
  return (
    <div className='flex min-h-screen flex-col items-start justify-start px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 mx-auto bg-neutral50'>
      <PokemonList
        pokemonTypes={pokemonTypes}
        initialPokemonList={initialPokemonList}
      />
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const response = await axios.get(`https://pokeapi.co/api/v2/type`);

  const pokemonTypes = response?.data?.results?.map((pokemonType) => ({
    value: pokemonType.name,
    label: pokemonType.name,
  }));

  const initialPokemons = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=155`
  );

  const initialPokemonList = initialPokemons?.data?.results;
  return {
    props: {
      pokemonTypes,
      initialPokemonList,
    },
  };
}
