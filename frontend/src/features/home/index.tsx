import { SidebarTrigger } from "@/components/ui/sidebar"
import TopMenu from "./components/TopMenu"
import MovieList from "./components/MovieList"
import Hero from "./components/Hero"
import { keepPreviousData } from "@tanstack/react-query"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce";
import { MoviePagination } from "./components/MoviePagination"
import { useGetPopularMovieQuery } from "./hooks/useGetPopularMovies"
import { useGetSearchMovieQuery } from "./hooks/useGetSearchMovies"
import { RiLoader2Line } from "@remixicon/react"

const Home = () => {
  const { search, page } = useSearch({ from: '/_layout/(home)/' })
  const navigate = useNavigate({ from: "/" });
  const [searchState, setSearchState] = useState('')
  const searchDebounce = useDebounce(searchState, 500);

  const { data: popularMovieList, isLoading: isPopularLoading } = useGetPopularMovieQuery({
    queryConfig: {
      enabled: !search,
      placeholderData: keepPreviousData,
    },
    page: page as number
  })

  const { data: searchMovieList, isLoading: isSearchLoading } = useGetSearchMovieQuery({
    page: page as number,
    search: search as string,
    queryConfig: {
      enabled: !!search,
      placeholderData: keepPreviousData,
    }
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

  if (isPopularLoading || isSearchLoading) {
    return <div><RiLoader2Line /></div>
  }

  return (
    <section className='flex flex-col w-full gap-4'>
      <div className='flex items-center gap-2'>
        <SidebarTrigger />
        <TopMenu search={searchState} setSearch={setSearchState} />
      </div>
      <div className='space-y-10'>

        {(!search && popularMovieList?.results[0]) && (
          <Hero movie={popularMovieList.results[0]} />
        )}
        <MovieList data={search ? searchMovieList?.results : popularMovieList?.results} />
        <MoviePagination totalPages={(search ? searchMovieList?.total_pages : popularMovieList?.total_pages) || 1} />
      </div>
    </section>
  )
}

export default Home