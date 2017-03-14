import React from 'react';
import styled from 'styled-components';
import StarRating from './StarRating.js';

const Summary = styled.div`
margin: 20px;
`;

const Title = styled.p`
  font-weight:bold;
  margin:0px;
`;

const Year = styled.p`
margin: 0px;
padding-left: 1em;
color: #999999;
`;

const TMDBScore = styled.p`
margin:0px;
padding-left: 1em;
font-size:smaller;
`;


function MovieSummary(props){
  return (
    <Summary>
    <Title onClick={(event)=>props.onClick(props.id)} >{props.title}</Title>
    <StarRating rating={props.rating} setRating={(rating)=>{props.setRatingFor(props.id, rating)}}/>
    <Year>({props.year})</Year>
    <TMDBScore>TMDB score:{props.tmdbScore}</TMDBScore>
    </Summary>
  );
}

MovieSummary.propTypes = {
  title:React.PropTypes.string.isRequired,
  year:React.PropTypes.number.isRequired,
  rating:React.PropTypes.number,
  tmdbScore:React.PropTypes.number.isRequired,
  id:React.PropTypes.number.isRequired,
  onClick:React.PropTypes.func.isRequired,
  setRatingFor:React.PropTypes.func.isRequired
};

export default MovieSummary;
