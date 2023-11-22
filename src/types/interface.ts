export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: null;
  vote_count: number;
}

export interface IMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovieDetailsState {
  details: IMovieDetails[] | [];
  isLoading: boolean;
  successes: boolean;
  error: string | null;
}

export interface IGenre {
  id: null;
  name: string;
}

export interface IProduction_companies {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface IProduction_countries {
  iso_3166_1: string;
  name: string;
}

export interface ISpoken_languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProduction_companies[];
  production_countries: IProduction_countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpoken_languages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
