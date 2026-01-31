import type { MovieDetail } from "../interfaces/movie.js";
import tmdbClient from "../../../utils/client";

export const movieDetail = async (id: string): Promise<MovieDetail> => {
    const response = await tmdbClient.get(`/movie/${id}`, {
      params: {
        append_to_response: 'similar'
      }
    })
    return response.data
}