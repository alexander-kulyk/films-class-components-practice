/* eslint-disable jsx-a11y/alt-text */
//core
import React, { Component } from 'react';
//other
import { SETTINGS } from '../../constants';
import css from './MoviesList.module.css';
import { IMovie } from '../../types';

interface IProps {
  moviesList: IMovie[];
  getMovieDetails?: (movieId: number) => void;
}

export class MoviesList extends Component<IProps> {
  onClickPoster = (id: number) => {
    const { getMovieDetails } = this.props;

    if (getMovieDetails) {
      getMovieDetails(id);
    }
  };

  render() {
    const { moviesList } = this.props;

    return (
      <ul className={css.wrapper}>
        {moviesList?.map((item) => (
          <li
            className={css.list}
            key={item.id}
            onClick={() => this.onClickPoster(item.id)}
          >
            <p>{item.original_title}</p>
            <div className={css.poster}>
              <img src={SETTINGS.POSTER.URL + item.poster_path} />
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
