import React from 'react';
import styled from 'styled-components';

/* styled 설정 */
const MovieBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 2rem;

  & + & {
    border-top: 6px solid red;
  }
`;
const PosterBlock = styled.div`
  flex: 1;
  position: relative;
  width: 11em;
  cursor: pointer;
`;
const Poster = styled.img`
  width: 100%;
  z-index: 1;
`;
const InfoBlock = styled.div`
  flex: 2;
  padding-left: 2rem;
  padding-right: 2rem;

  h3 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
`;

const Movie = ({ title, overview, posterPath }) => {
  return (
    <MovieBlock>
      <PosterBlock>
        <Poster src={posterPath} alt="mylist-movie-poster" />
      </PosterBlock>
      <InfoBlock>
        <h3>{title}</h3>
        <p>{overview}</p>
      </InfoBlock>
    </MovieBlock>
  );
};

export default Movie;
