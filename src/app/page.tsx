import { TMovie } from 'typings'
import Movie from './movie'

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
  )
  const res = (await data.json()) as { results: TMovie[] }

  return (
    <main>
      <div className='grid grid-cols-fluid gap-12'>
        {res.results.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  )
}
