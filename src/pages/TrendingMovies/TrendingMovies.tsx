//core
import React from 'react';
//components
import { MoviesList, Modal, Loader } from '../../components';
//other
import { fetchTrendingMovies, fetchMovieDetail } from '../../service';
import { IMovie, IMovieDetails } from '../../types';

interface IState {
  movieDetails: IMovieDetails | null;
  trendingMovies: IMovie[];
  isLoading: boolean;
  isOpenModal: boolean;
}

export class TrendingMovies extends React.Component {
  state: IState = {
    movieDetails: null,
    trendingMovies: [],
    isLoading: false,
    isOpenModal: false,
  };

  abortController = new AbortController();

  getMovieDetails = async (movieId: number) => {
    this.setState({ isLoading: true });
    const movieDetails = await fetchMovieDetail(movieId);
    this.setState({ isOpenModal: true, movieDetails, isLoading: false });
  };

  handleCloseModal = () => {
    this.setState({ isOpenModal: false });
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const trendingMovies: IMovie[] | undefined = await fetchTrendingMovies(
      this.abortController.signal
    );
    this.setState({ trendingMovies, isLoading: false });
  }

  // componentWillUnmount(): void {
  //   this.abortController.abort();
  // }

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
        <Loader isLoading={this.state.isLoading} />
      </>
    );
  }
}
