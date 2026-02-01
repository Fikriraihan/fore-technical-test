import tmdbClient from "../../../utils/client";
import type { Movie, MovieResponse } from "../interfaces/movie.js";

export const searchMovies = async (query: string, page: number = 1): Promise<MovieResponse> => {
    const response = await tmdbClient.get<MovieResponse>('/search/movie', {
        params: { query, page },
    });


    const results: Movie[] = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
      }));
    
    return {
      page: response.data.page,
      total_pages: response.data.total_pages,
      total_results: response.data.total_results,
      results
    }
  }