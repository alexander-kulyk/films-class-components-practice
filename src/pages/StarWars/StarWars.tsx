//core
import React from 'react';
//components
import { MoviesList, Modal } from '../../components';
//other
import { fetchStarWars, fetchMovieDetail } from '../../service';
import { IMovie, IMovieDetails } from '../../types';

interface IState {
  movieDetails: IMovieDetails | null;
  starWarsMovies: IMovie[];
  isOpenModal: boolean;
  page: number;
}

export class StarWars extends React.Component<{}, IState> {
  state = {
    starWarsMovies: [],
    isOpenModal: false,
    movieDetails: null,
    page: 1,
  };

  getNextPage = async () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));

    const starWarsMoviesList: IMovie[] | undefined = await fetchStarWars(
      this.state.page
    );
    if (starWarsMoviesList) {
      this.setState({ starWarsMovies: starWarsMoviesList });
    }
  };

  getMovieDetails = async (movieId: number) => {
    const movieDetails = await fetchMovieDetail(movieId);
    if (movieDetails) {
      this.setState({ isOpenModal: true, movieDetails });
    }
  };

  handleCloseModal = () => {
    this.setState({ isOpenModal: false });
  };

  async componentDidMount() {
    const starWarsMoviesList: IMovie[] | undefined = await fetchStarWars(
      this.state.page
    );

    if (starWarsMoviesList) {
      this.setState({ starWarsMovies: starWarsMoviesList });
    }
  }

  render() {
    return (
      <>
        <MoviesList
          moviesList={this.state.starWarsMovies}
          getMovieDetails={this.getMovieDetails}
        />
        {/* <button onClick={() => this.getNextPage()}>next</button> */}
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
