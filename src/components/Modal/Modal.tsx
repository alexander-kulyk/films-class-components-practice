/* eslint-disable jsx-a11y/alt-text */
//core
import React from 'react';
//other
import { IMovieDetails } from '../../types';
import { SETTINGS } from '../../constants';
import style from './Modal.module.css';

interface IProps {
  movieDetails?: IMovieDetails | null;
  handleCloseModal: () => void;
}

export class Modal extends React.Component<IProps> {
  render() {
    const { movieDetails, handleCloseModal } = this.props;

    return (
      movieDetails && (
        <div className={style.overflow} onClick={() => handleCloseModal()}>
          <div className={style.modal_wrapper}>
            <p>{movieDetails.original_title}</p>
            <img src={SETTINGS.POSTER.MODAL_URL + movieDetails.backdrop_path} />
          </div>
        </div>
      )
    );
  }
}
