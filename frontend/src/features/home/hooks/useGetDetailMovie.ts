import { queryOptions, useSuspenseQuery } from "@tanstack/react-query"
import { getMovieDetails } from "../api/movie.api"
import type { QueryConfig } from "@/lib/query-client"

export const getDetailMovieQueryKey = (id: number) => ['detail-movie', id]

const getDetailMovieQueryOptions = (id: number) => {
  return queryOptions({
    queryKey: getDetailMovieQueryKey(id),
    queryFn: () => getMovieDetails(id)
  })
}

type useGetDetailMovieParams = {
  queryConfig?: QueryConfig<typeof getDetailMovieQueryOptions>
  id: number
}

export const useGetDetailMovieQuery = (params: useGetDetailMovieParams) => {
  return useSuspenseQuery({
    ...getDetailMovieQueryOptions(params.id),
    ...params.queryConfig
  })
}