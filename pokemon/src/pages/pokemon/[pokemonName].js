import PokemonDetails from '@/components/PokemonDetails';
import axios from 'axios';

const PokemonDetailsPage = ({ pokemon }) => {
  return <PokemonDetails pokemon={pokemon} />;
};

export default PokemonDetailsPage;

export async function getServerSideProps({ query }) {
  const { pokemonName } = query;

  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = response?.data;

  return {
    props: {
      pokemon,
    },
  };
}
