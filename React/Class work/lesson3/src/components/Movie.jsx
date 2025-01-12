function Movie(props) {
  return (
    <li key={props.movie.id}>
      <h3>
        <b>Title:</b> {props.movie.title}
      </h3>
      <p>
        <b>Year:</b> {props.movie.year}
      </p>
    </li>
  )
}

export default Movie
