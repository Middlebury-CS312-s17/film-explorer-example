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
    this.props.movies.sort((m1, m2)=>{
      if (m1[field] < m2[field]){
        return -1;
      }else if (m1[field] === m2[field]) {
        return 0;

      }else{
        return 1;
      }
    });
    return (
      <MovieTable movies={this.props.movies} selectedMovies={this.state.selected} onClick={(id)=>this.handleClick(id)}/>
    );
  }
}

MovieTableContainer.propTypes = {
  movies:React.PropTypes.array,
  sortType:React.PropTypes.string
};

export default MovieTableContainer;
