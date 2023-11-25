import { movies } from '../api';
import { IMovie, IMovieDetails, IMoviesResponse } from '../types';

export const fetchStarWars = async (
  page: number,
  signal?: AbortSignal
): Promise<IMovie[] | undefined> => {
  try {
    const response: IMoviesResponse = (
      await movies.starWarsMovies(page, signal)
    ).data;
    return response.results;
  } catch (e) {
    console.log('e', e);
  }
};

export const fetchTrendingMovies = async (
  signal?: AbortSignal
): Promise<IMovie[] | undefined> => {
  try {
    const response: IMoviesResponse = (await movies.trendingMovies(signal))
      .data;
    return response.results;
  } catch (e) {
    console.log('e', e);
  }
};

export const fetchMovieDetail = async (id: number | null) => {
  try {
    const response: IMovieDetails = (await movies.movieDetails(id)).data;
    return response;
  } catch (e) {
    console.log('e', e);
  }
};
