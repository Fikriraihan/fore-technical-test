import { SidebarTrigger } from "@/components/ui/sidebar"
import TopMenu from "./components/TopMenu"
import MovieList from "./components/MovieList"
import Hero from "./components/Hero"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { getPopularMovies, getSearchMovies } from "./api/movie.api"
import type { MovieResponseType } from "./DAO/movie.dao"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce";
import { MoviePagination } from "./components/MoviePagination"

const Home = () => {
  const { search, page } = useSearch({ from: '/_layout/(home)/' })
  const navigate = useNavigate({ from: "/" });
  const [searchState, setSearchState] = useState('')
  const searchDebounce = useDebounce(searchState, 500);

  const { data: popularMovieList } = useQuery<MovieResponseType>({
    queryKey: ['movies', page],
    queryFn: () => getPopularMovies(page),
    enabled: !search,
    placeholderData: keepPreviousData
  })

  const { data: searchMovieList } = useQuery({
    queryKey: ['movies', search],
    queryFn: () => getSearchMovies(search, page),
    enabled: !!search,
    placeholderData: keepPreviousData
  })

  useEffect(() => {
    if (searchDebounce[0]) {
      navigate({
        search: (prev) => ({ ...prev, search: searchDebounce[0], page: 1 }),
      });
    } else {
      navigate({
        search: (prev) => ({ ...prev, search: undefined }),
      });
    }
  }, [searchDebounce, navigate]);

  return (
    <section className='flex flex-col w-full gap-4'>
      <div className='flex items-center gap-2'>
        <SidebarTrigger />
        <TopMenu search={searchState} setSearch={setSearchState} />
      </div>
      <div className='space-y-10'>
        <Hero />
        <MovieList data={search ? searchMovieList?.results : popularMovieList?.results} />
        <MoviePagination totalPages={(search ? searchMovieList?.total_pages : popularMovieList?.total_pages) || 1} />
      </div>
    </section>
  )
}

export default Home