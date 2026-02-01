import { queryOptions, useSuspenseQuery } from "@tanstack/react-query"
import { getSearchMovies } from "../api/movie.api"
import type { QueryConfig } from "@/lib/query-client"

export const getSearchMovieQueryKey = (search: string, page: number) => ['search-movies',search, page]

const getPopularMovieQueryOptions = (search: string, page: number) => {
  return queryOptions({
    queryKey: getSearchMovieQueryKey(search, page),
    queryFn: () => getSearchMovies(search, page)
  })
}

type useGetPopularMovieParams = {
  queryConfig?: QueryConfig<typeof getPopularMovieQueryOptions>
  page: number
  search: string
}

export const useGetSearchMovieQuery = (params: useGetPopularMovieParams) => {
  return useSuspenseQuery({
    ...getPopularMovieQueryOptions(params.search, params.page),
    ...params.queryConfig
  })
}