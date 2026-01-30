import { MovieCard } from './MovieCard'

const MovieList = () => {
  return (
    <div className='space-y-4'>
      <h2>You Might Like</h2>
      <div className='grid grid-cols-3 gap-4'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  )
}

export default MovieList