import React, { Component } from 'react';

import movieData from '../public/movies.json';
import MovieTableContainer from './components/MovieTableContainer.js';
import SearchBar from './components/SearchBar.js';

class FilmExplorer extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm:'',
      sortType: 'title'};
  }

  render() {
    //const movie = movieData.movies[0];

    return (
      <div className="FilmExplorer">
      <SearchBar
      searchTerm={this.state.searchTerm}
      setTerm={(term)=>{this.setState({searchTerm:term})}}
      setType={(type)=>{this.setState({sortType:type})}}
      sortType={this.state.sortType}/>
      <MovieTableContainer searchTerm={this.state.searchTerm} movies={movieData.movies} sortType={this.state.sortType}/>
        </div>
    );
  }
}

export default FilmExplorer;
