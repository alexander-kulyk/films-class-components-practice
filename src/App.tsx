//core
import React from 'react';
import { Routes, Route } from 'react-router-dom';
//components
import { Layout, ErrorBoundary } from './components';
import { StarWars, TrendingMovies } from './pages';
//other
import { ROUTES } from './constants';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <ErrorBoundary>
              <Layout />
            </ErrorBoundary>
          }
        >
          <Route
            index
            element={
              <ErrorBoundary>
                <StarWars />
              </ErrorBoundary>
            }
          />
          <Route
            path={ROUTES.TRENDING}
            element={
              <ErrorBoundary>
                <TrendingMovies />
              </ErrorBoundary>
            }
          />
        </Route>
      </Routes>
    );
  }
}

export default App;
