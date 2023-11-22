//core
import React from 'react';
//components
import { MoviesList, Modal } from '../../components';
//other
import { fetchTrendingMovies, fetchMovieDetail } from '../../service';
import { IMovie, IMovieDetails } from '../../types';

interface IState {
  movieDetails: IMovieDetails | null;
  trendingMovies: IMovie[];
  isOpenModal: boolean;
}

export class TrendingMovies extends React.Component {
  state: IState = {
    movieDetails: null,
    trendingMovies: [],
    isOpenModal: false,
  };

  getMovieDetails = async (movieId: number) => {
    const movieDetails = await fetchMovieDetail(movieId);
    this.setState({ isOpenModal: true, movieDetails });
  };

  handleCloseModal = () => {
    this.setState({ isOpenModal: false });
  };

  async componentDidMount() {
    const trendingMovies: IMovie[] | undefined = await fetchTrendingMovies();
    this.setState({ trendingMovies });
  }

  render() {
    return (
      <>
        <MoviesList
          moviesList={this.state.trendingMovies}
          getMovieDetails={this.getMovieDetails}
        />
        {this.state.isOpenModal && (
          <Modal
            movieDetails={this.state.movieDetails}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}
