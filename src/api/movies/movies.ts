import axios, { AxiosPromise } from 'axios';
import { API } from '../../constants';

const serviceUri = API.movies.uri;
const serviceKey = API.key;

export const movies = {
  trendingMovies: (): AxiosPromise => {
    const url = `${serviceUri}trending/movie/day?api_key=${serviceKey}&page=1`;
    return axios.get(url);
  },
  movieDetails: (id: number | null): AxiosPromise => {
    const url = `${serviceUri}movie/${id}?api_key=${serviceKey}`;
    return axios.get(url);
  },
  starWarsMovies: (page: number): AxiosPromise => {
    const url = `${serviceUri}/search/movie?api_key=${serviceKey}&query=star+wars&page=${page}`;
    return axios.get(url);
  },
};
