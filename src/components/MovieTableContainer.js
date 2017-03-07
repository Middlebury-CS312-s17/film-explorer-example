import React from 'react';
import MovieTable from './MovieTable.js';


function MovieTableContainer(props){
  const field = props.sortType;
  props.movies.sort((m1, m2)=>{
    if (m1[field] < m2[field]){
      return -1;
    }else if (m1[field] === m2[field]) {
      return 0;

    }else{
      return 1;
    }
  });
  return (
    <MovieTable movies={props.movies} selectedMovies={[]} onClick={(id)=>this.handleClick(id)}/>
  );
}

MovieTableContainer.propTypes = {
  movies:React.PropTypes.array,
  sortType:React.PropTypes.string
};

export default MovieTableContainer;
