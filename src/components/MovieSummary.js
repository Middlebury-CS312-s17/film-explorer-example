import React from 'react';
import styled from 'styled-components';

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

const Rating = styled.p`
margin:0px;
padding-left: 1em;
font-size:smaller;
`;


function MovieSummary(props){
  return (
    <Summary>
    <Title>{props.title}</Title>
    <Year>({props.year})</Year>
    <Rating>{props.rating}</Rating>
    </Summary>
  );
}

export default MovieSummary;
