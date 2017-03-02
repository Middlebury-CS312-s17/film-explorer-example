import React, { Component } from 'react';

import movieData from '../public/movies.json';
import MovieSummary from './components/MovieSummary.js';

class FilmExplorer extends Component {
  render() {
    const movie = movieData.movies[0];

    return (
      <div className="FilmExplorer">
        <MovieSummary title={movie.title} rating={movie.vote_average} year={movie.release_date.slice(0,4)} />
      </div>
    );
  }
}

export default FilmExplorer;
