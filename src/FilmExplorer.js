import React, { Component } from 'react';

//import movieData from '../public/movies.json';
import MovieTableContainer from './components/MovieTableContainer.js';
import SearchBar from './components/SearchBar.js';

class FilmExplorer extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm:'',
      sortType: 'title'};

      //this.state.movies = movieData.movies;

      fetch('movies.json')
      .then((response)=>{
        if (response.ok){
          return response.json();
        }
      })
      .then((data)=>{
        this.setState({movies: data.movies});
      });
  }
  setRating(filmid, rating){

    const alteredFilms = this.state.movies.map((movie)=>{
      if (movie.id === filmid){
        return Object.assign({}, movie, {rating:rating});
      }
      return movie;
    });
    this.setState({movies:alteredFilms});
  }
  render() {

    let movieContents = (<h2>Loading...</h2>);
    if (this.state.movies){
      movieContents = (<MovieTableContainer searchTerm={this.state.searchTerm} movies={this.state.movies} sortType={this.state.sortType} setRatingFor={(id, rating)=>this.setRating(id, rating)}/>);
    }

    return (
      <div className="FilmExplorer">
      <SearchBar
      searchTerm={this.state.searchTerm}
      setTerm={(term)=>{this.setState({searchTerm:term})}}
      setType={(type)=>{this.setState({sortType:type})}}
      sortType={this.state.sortType}/>
      {movieContents}
        </div>
    );
  }
}

export default FilmExplorer;
