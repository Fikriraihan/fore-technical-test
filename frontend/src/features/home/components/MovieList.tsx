import type { MovieType } from '../DAO/movie.dao'
import { MovieCard } from './MovieCard'

interface MovieListProps {
  data?: MovieType[]
}

const MovieList = (props: MovieListProps) => {
  const { data } = props
  return (
    <div className='space-y-4'>
      <h2>You Might Like</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList