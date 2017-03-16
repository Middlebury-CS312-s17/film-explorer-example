import React, { Component } from 'react';

//import movieData from '../public/movies.json';
import MovieTableContainer from './components/MovieTableContainer.js';
import SearchBar from './components/SearchBar.js';

const SERVER = 'http://basin.cs.middlebury.edu:4242'

class FilmExplorer extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm:'',
      sortType: 'title'};

      //this.state.movies = movieData.movies;

      fetch(SERVER + '/api/movies/')
      .then((response)=>{
        if (response.ok){
          return response.json();
        }
      })
      .then((data)=>{
        this.setState({movies: data});
      });
  }
  setRating(filmid, rating){
    let film = this.state.movies.find((movie)=> filmid===movie.id);
    film = Object.assign({}, film, {rating:rating});
    const filmStr = JSON.stringify(film);
    const request = new Request(
      SERVER + "/api/movies/" + filmid,
      {
        method:'PUT',
        body: filmStr,
        headers: new Headers({'Content-type': 'application/json'})
      }
    );

    fetch(request)
    .then((response)=>{
      if (response.ok){
        return response.json();
      }
    })
    .then((newFilm)=>{
      const alteredFilms = this.state.movies.map((movie)=>{
      if (movie.id === newFilm.id){
        return newFilm;
      }
      return movie;
    });
    this.setState({movies:alteredFilms});
    });
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
