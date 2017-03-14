import React from 'react';
import MovieTable from './MovieTable.js';


class MovieTableContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selected:[]
    }
  }
  handleClick(id){
    const selected = this.state.selected.slice();
    const index = selected.indexOf(id);
    if (index !== -1){
      // remove it
      selected.splice(index, 1);
    }else{
      // add it
      selected.push(id);
    }

    this.setState({selected:selected});
  }
  render(){
    const field = this.props.sortType;
    let filteredFilms = this.props.movies.filter((movie)=>{
      let title = movie.title.toLowerCase();
      let desc = movie.overview.toLowerCase();
      let term = this.props.searchTerm.toLowerCase()
      return title.includes(term) || desc.includes(term) ;
    });

    filteredFilms.sort((m1, m2)=>{
      if (m1[field] < m2[field]){
        return -1;
      }else if (m1[field] === m2[field]) {
        return 0;

      }else{
        return 1;
      }
    });
    return (
      <MovieTable movies={filteredFilms} selectedMovies={this.state.selected} setRatingFor={this.props.setRatingFor} onClick={(id)=>this.handleClick(id)}/>
    );
  }
}

MovieTableContainer.propTypes = {
  movies:React.PropTypes.array,
  searchTerm:React.PropTypes.string,
  sortType:React.PropTypes.string,
  setRatingFor:React.PropTypes.func
};

export default MovieTableContainer;
