//core
import React from 'react';
import { Routes, Route } from 'react-router-dom';
//components
import { Layout } from './components';
import { StarWars, TrendingMovies } from './pages';
//other
import { ROUTES } from './constants';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<StarWars />} />
          <Route path={ROUTES.TRENDING} element={<TrendingMovies />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
