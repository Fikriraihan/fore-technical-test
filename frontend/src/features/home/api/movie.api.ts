import { callApi } from "@/api/interceptors"
import type { MovieDetailType, MovieResponseType } from "../DAO/movie.dao"

const movieEndpoint = {
  popular: 'movies',
  search: 'movies/search',
  detail: 'movies/:id'
}

export const getPopularMovies = async (page: number = 1): Promise<MovieResponseType> => {
  const response = await callApi(movieEndpoint.popular, 'GET', null, null, { page })
  return response.data
}

export const getSearchMovies = async (query?: string, page: number = 1): Promise<MovieResponseType> => {
  const response = await callApi(movieEndpoint.search, 'GET', null, null, { query, page })
  return response.data
}

export const getMovieDetails = async (id: string): Promise<MovieDetailType> => {
  const response = await callApi(movieEndpoint.detail, 'GET', null, { id })
  return response.data
}