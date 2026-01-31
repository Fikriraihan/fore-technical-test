export interface MovieType {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
}

export interface MovieDetailType extends MovieType {
  genres: {
    id: number;
    name: string;
  }[]
  runtime: number;
  status: string;
  tagline: string;
  vote_count: number;
  budget: number;
  revenue: number;
  homepage: string | null;
}

export interface MovieResponseType {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}
