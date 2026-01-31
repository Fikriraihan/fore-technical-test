import tmdbClient from "../../../utils/client";
import type { MovieResponse } from "../interfaces/movie.js";

export const searchMovies = async (query: string, page: number = 1): Promise<MovieResponse> => {
    const response = await tmdbClient.get<MovieResponse>('/search/movie', {
        params: { query, page },
    });
    return response.data;
  }