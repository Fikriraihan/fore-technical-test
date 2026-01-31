import type { MovieResponse } from "../interfaces/movie.js";
import tmdbClient from "../../../utils/client";

export const popularMovies = async (page: number = 1): Promise<MovieResponse> => {
    const response = await tmdbClient.get<MovieResponse>('/movie/popular', {
      params: {
        page
      }
    })
    return response.data
}