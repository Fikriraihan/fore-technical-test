import { SidebarTrigger } from "@/components/ui/sidebar"
import TopMenu from "./components/TopMenu"
import MovieList from "./components/MovieList"
import Hero from "./components/Hero"
import { useNavigate, useSearch } from "@tanstack/react-router"
import { Suspense, useEffect, useState } from "react"
import { useDebounce } from "use-debounce";
import { MoviePagination } from "./components/MoviePagination"
import { useGetPopularMovieQuery } from "./hooks/useGetPopularMovies"
import { useGetSearchMovieQuery } from "./hooks/useGetSearchMovies"
import Loader from "@/components/loader"

const PopularMovies = ({ page }: { page: number }) => {
  const { data: popularMovieList } = useGetPopularMovieQuery({
    page,
  });

  return (
    <>
      <div className="animate-fade-in">
        <Hero movie={popularMovieList.results[0]} />
      </div>
      <MovieList data={popularMovieList.results} />
      <MoviePagination totalPages={popularMovieList.total_pages} />
    </>
  );
};

const SearchMovies = ({ search, page }: { search: string; page: number }) => {
  const { data: searchMovieList } = useGetSearchMovieQuery({
    page,
    search,
  });

  return (
    <>
      <MovieList data={searchMovieList.results} />
      <MoviePagination totalPages={searchMovieList.total_pages} />
    </>
  );
};

const Home = () => {
  const { search, page } = useSearch({ from: "/_layout/(home)/" });
  const navigate = useNavigate({ from: "/" });
  const [searchState, setSearchState] = useState(search || "");
  const [debouncedSearch] = useDebounce(searchState, 500);

  useEffect(() => {
    if (debouncedSearch !== (search || "")) {
      navigate({
        search: (prev) => ({
          ...prev,
          search: debouncedSearch || undefined,
          page: 1
        }),
      });
    }
  }, [debouncedSearch, navigate, search]);

  return (
    <section className="flex flex-col w-full gap-4 min-h-screen">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <TopMenu search={searchState} setSearch={setSearchState} />
      </div>
      <div className="space-y-10 flex-1">
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-96">
              <Loader />
            </div>
          }
        >
          {search ? (
            <SearchMovies search={search} page={page ?? 1} />
          ) : (
            <PopularMovies page={page ?? 1} />
          )}
        </Suspense>
      </div>
    </section>
  );
};

export default Home