function Pokemon(props) {
  return (
    <div key={props.pokemon.id}>
      <h3>
        <b>Name:</b> {props.pokemon.name}
      </h3>
      <p>
        <b>Type:</b> {props.pokemon.type}
      </p>
    </div>
  )
}

export default Pokemon
