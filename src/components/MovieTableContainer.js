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
    let films = this.props.movies;
    if (this.props.searchTerm){
      let term = this.props.searchTerm.toLowerCase();
      films = films.filter((movie)=>{
        let title = movie.title.toLowerCase();
        let desc = movie.overview.toLowerCase();
        return title.includes(term) || desc.includes(term) ;
      });
    }

    if (this.props.sortType){
      const field = this.props.sortType;
      films.sort((m1, m2)=>{
        if (m1[field] < m2[field]){
          return -1;
        }else if (m1[field] === m2[field]) {
          return 0;

        }else{
          return 1;
        }
      });
    }

    return (
      <MovieTable movies={films} selectedMovies={this.state.selected} setRatingFor={this.props.setRatingFor} onClick={(id)=>this.handleClick(id)}/>
    );
  }
}

MovieTableContainer.propTypes = {
  movies:React.PropTypes.array.isRequired,
  searchTerm:React.PropTypes.string,
  sortType:React.PropTypes.string,
  setRatingFor:React.PropTypes.func.isRequired
};

export default MovieTableContainer;
