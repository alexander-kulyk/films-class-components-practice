//core
import React from 'react';
//components
import { MoviesList, Modal, Loader, Button } from '../../components';
//other
import { fetchStarWars, fetchMovieDetail } from '../../service';
import { IMovie, IMovieDetails } from '../../types';
import { COMMON } from '../../constants/common';

interface IState {
  movieDetails: IMovieDetails | null;
  starWarsMovies: IMovie[];
  isOpenModal: boolean;
  isLoading: boolean;
  page: number;
}

class StarWars extends React.Component<{}, IState> {
  state = {
    starWarsMovies: [],
    isOpenModal: false,
    movieDetails: null,
    isLoading: false,
    page: 1,
  };

  abortController = new AbortController();

  getNextPage = async () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
    const starWarsMoviesList: IMovie[] | undefined = await fetchStarWars(
      this.state.page,
      this.abortController.signal
    );
    if (starWarsMoviesList) {
      this.setState({ starWarsMovies: starWarsMoviesList, isLoading: false });
    }
  };

  getMovieDetails = async (movieId: number) => {
    this.setState({ isLoading: true });
    const movieDetails = await fetchMovieDetail(movieId);
    if (movieDetails) {
      this.setState({ isOpenModal: true, movieDetails, isLoading: false });
    }
  };

  handleCloseModal = () => {
    this.setState({ isOpenModal: false });
  };

  shouldComponentUpdate(nextProps: any, nextState: IState) {
    if (
      this.state.starWarsMovies === nextState.starWarsMovies &&
      this.state.isOpenModal === nextState.isOpenModal &&
      this.state.movieDetails === nextState.movieDetails &&
      this.state.page === nextState.page &&
      this.state.isLoading === nextState.isLoading
    ) {
      return false;
    }

    return true;
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const starWarsMoviesList: IMovie[] | undefined = await fetchStarWars(
      this.state.page,
      this.abortController.signal
    );
    if (starWarsMoviesList) {
      this.setState({ starWarsMovies: starWarsMoviesList, isLoading: false });
    }
  }

  // componentWillUnmount(): void {
  //   this.abortController.abort();
  // }

  render() {
    return (
      <>
        <MoviesList
          moviesList={this.state.starWarsMovies}
          getMovieDetails={this.getMovieDetails}
        />
        <Button text={COMMON.NEXT_PAGE} onClick={this.getNextPage} />
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

export default StarWars;
