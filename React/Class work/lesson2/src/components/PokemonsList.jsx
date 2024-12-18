import Pokemon from './Pokemon'

function PokemonsList(props) {
  return (
    <div>
      <h2>Pokemons List</h2>
      {props.pokemons.map(p => (
        <Pokemon pokemon={p} />
      ))}
    </div>
  )
}

export default PokemonsList
