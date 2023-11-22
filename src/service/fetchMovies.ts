import { movies } from '../api';
import { IMovie, IMovieDetails, IMoviesResponse } from '../types';

export const fetchStarWars = async (
  page: number
): Promise<IMovie[] | undefined> => {
  try {
    const response: IMoviesResponse = (await movies.starWarsMovies(page)).data;
    return response.results;
  } catch (e) {
    console.log('e', e);
  }
};

export const fetchTrendingMovies = async (): Promise<IMovie[] | undefined> => {
  try {
    const response: IMoviesResponse = (await movies.trendingMovies()).data;
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
