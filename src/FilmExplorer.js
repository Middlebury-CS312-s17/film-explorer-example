import React, { Component } from 'react';

import movieData from '../public/movies.json';
import MovieTableContainer from './components/MovieTableContainer.js';

class FilmExplorer extends Component {
  render() {
    //const movie = movieData.movies[0];

    return (
      <div className="FilmExplorer">
      <MovieTableContainer movies={movieData.movies} sortType="vote_average"/>
        </div>
    );
  }
}

export default FilmExplorer;
