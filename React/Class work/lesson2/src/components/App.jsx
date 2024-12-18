import CarsList from './CarsList'
import MoviesList from './MoviesList'
import PokemonsList from './PokemonsList'

const pokemons = [
  { id: 1, name: 'Bulbasaur', type: 'Grass/Poison' },
  { id: 2, name: 'Charmander', type: 'Fire' },
  { id: 3, name: 'Squirtle', type: 'Water' },
  { id: 4, name: 'Pikachu', type: 'Electric' },
  { id: 5, name: 'Jigglypuff', type: 'Normal/Fairy' },
  { id: 6, name: 'Gengar', type: 'Ghost/Poison' },
  { id: 7, name: 'Snorlax', type: 'Normal' },
  { id: 8, name: 'Mewtwo', type: 'Psychic' },
  { id: 9, name: 'Dragonite', type: 'Dragon/Flying' },
  { id: 10, name: 'Eevee', type: 'Normal' },
]
const movies = [
  { id: 1, title: 'Inception', year: '2010' },
  { id: 2, title: 'The Matrix', year: '1999' },
  { id: 3, title: 'Interstellar', year: '2014' },
  { id: 4, title: 'Pulp Fiction', year: '1994' },
  { id: 5, title: 'Forrest Gump', year: '1994' },
  {
    id: 6,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: '2001',
  },
  {
    id: 7,
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: '1980',
  },
  { id: 8, title: 'The Dark Knight', year: '2008' },
  { id: 9, title: 'Fight Club', year: '1999' },
  { id: 10, title: 'The Godfather', year: '1972' },
]

function App() {
  return (
    <>
      <MoviesList movies={movies} />
      <PokemonsList pokemons={pokemons} />
      <CarsList img='./mslhslh' type='btn' size='3' />
    </>
  )
}

export default App
