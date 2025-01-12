import Movie from './Movie'

function MoviesList(props) {
  return (
    <>
      <h2>Movies List</h2>
      <ul>
        {props.movies.map(m => (
          <Movie movie={m} />
        ))}
      </ul>
    </>
  )
}

export default MoviesList
