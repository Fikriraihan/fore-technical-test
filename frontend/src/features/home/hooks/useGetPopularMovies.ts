import { queryOptions, useQuery } from "@tanstack/react-query"
import { getPopularMovies } from "../api/movie.api"
import type { QueryConfig } from "@/lib/query-client"

export const getPopularMovieQueryKey = (page: number) => ['popular-movies', page]

const getPopularMovieQueryOptions = (page: number) => {
  return queryOptions({
    queryKey: getPopularMovieQueryKey(page),
    queryFn: () => getPopularMovies(page)
  })
}

type useGetPopularMovieParams = {
  queryConfig?: QueryConfig<typeof getPopularMovieQueryOptions>
  page: number
}

export const useGetPopularMovieQuery = (params: useGetPopularMovieParams) => {
  return useQuery({
    ...getPopularMovieQueryOptions(params.page),
    ...params.queryConfig
  })
}