import React from 'react';
import styled from 'styled-components';
import StarRating from './StarRating.js';


const Detail = styled.div`
  margin: 20px 1em;
  border: 1px solid #DDDDDD;
  padding: 20px;
  clear: both;
`;

const RightColumn = styled.div`
float: left;
width: 60%
`;

const LeftColumn = styled.div`
float: left;
width: 200px;
`;

const Title=styled.p`
  font-weight: bold;
  margin: 0px;
`;

const Year = styled.p`
  margin: 0px;
  padding-left: 1em;
  color:#999999;
`;

const TMDBScore = styled.p`
  margin: 0px;
  padding-left: 1em;
  font-size: smaller;
`;

const Description = styled.p`

`;

const Clear = styled.div`
  clear: both;
`;

function MovieDetail(props) {
    return (
      <Detail >
        <LeftColumn>
          <img alt={props.title} src={props.image} />
        </LeftColumn>
        <RightColumn>
          <Title onClick={(event)=>props.onClick(props.id)}>{props.title}</Title>
          <StarRating rating={props.rating} setRating={(rating)=>{props.setRatingFor(props.id, rating)}}/>
          <Year>({props.year})</Year>
          <TMDBScore>TMDB Score: {props.tmdbScore}</TMDBScore>
          <hr />
          <Description>{props.description}</Description>
        </RightColumn>
        <Clear></Clear>
      </Detail>
    );
}


MovieDetail.propTypes = {
  title:React.PropTypes.string.isRequired,
  year:React.PropTypes.number.isRequired,
  tmdbScore:React.PropTypes.number.isRequired,
  description:React.PropTypes.string.isRequired,
  image:React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
  rating: React.PropTypes.number,
  onClick:React.PropTypes.func.isRequired,
  setRatingFor: React.PropTypes.func.isRequired
};


export default MovieDetail;
