import React from 'react';
import MovieSummary from './MovieSummary.js';
import MovieDetail from './MovieDetail.js';


function MovieTable(props){
  let films = props.movies.map((movie)=>{
    if (props.selectedMovies.includes(movie.id)){
        return (<MovieDetail
          key={movie.id}
          id={movie.id}
          title={movie.title}
          tmdbScore={movie.vote_average}
          year={+movie.release_date.slice(0,4)}
          description={movie.overview}
          image={"http://image.tmdb.org/t/p/w185/" + movie.poster_path}
          onClick={props.onClick}/>);
    }else{
        return (<MovieSummary
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.rating}
          tmdbScore={movie.vote_average}
          year={+movie.release_date.slice(0,4)}
          setRatingFor={props.setRatingFor}
          onClick={props.onClick} />);
    }

  }
    );
  return (
    <div>
    {films}
    </div>
  );
}

MovieTable.propTypes = {
  movies:React.PropTypes.array.isRequired,
  selectedMovies:React.PropTypes.array.isRequired,
  onClick:React.PropTypes.func.isRequired,
  setRatingFor:React.PropTypes.func.isRequired
};

export default MovieTable;
