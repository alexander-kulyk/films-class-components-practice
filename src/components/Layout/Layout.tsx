//core
import { Component } from 'react';
import { Outlet } from 'react-router-dom';
//components
import * as S from './styled';
//other
import { SETTINGS, ROUTES } from '../../constants';
import style from './Layout.module.css';

export class Layout extends Component {
  render() {
    return (
      <div>
        <div className={style.nav_wrapper}>
          <S.StyledLink to={ROUTES.HOME}>{SETTINGS.PAGES.HOME} </S.StyledLink>
          <S.StyledLink to={ROUTES.TRENDING}>
            {SETTINGS.PAGES.TRENDING_MOVIES}
          </S.StyledLink>
        </div>
        <Outlet />
      </div>
    );
  }
}
