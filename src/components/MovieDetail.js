import React from 'react';
import styled from 'styled-components';


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

const Rating = styled.p`
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
          <Year>({props.year})</Year>
          <Rating>User Score: {props.rating}</Rating>
          <hr />
          <Description>{props.description}</Description>
        </RightColumn>
        <Clear></Clear>
      </Detail>
    );
}


MovieDetail.propTypes = {
  title:React.PropTypes.string,
  year:React.PropTypes.number,
  rating:React.PropTypes.number,
  description:React.PropTypes.string,
  image:React.PropTypes.string,
  onClick:React.PropTypes.func
};


export default MovieDetail;
