import React from 'react';
import styled from 'styled-components';

/* styled 설정 */
const MovieBlock = styled.div`
  display: inline-block;
  width: 25%;
  cursor: pointer;

  &:hover {
    transform: scale(1.09);

    h3 {
      z-index: 1;
      opacity: 1;
    }
    img {
      opacity: 0.5;
    }
  }
`;
const Title = styled.h3`
  display: block;
  z-index: 0;
  opacity: 0;
  position: relative;
  width: 70%;
  top: 1.5rem;
  left: 1rem;
  height: 1rem;
  text-align: start;
  font-size: 1rem;
  font-weight: 600;
`;
const Poster = styled.img`
  width: 95%;
`;

const Movie = ({ title, posterPath }) => {
  return (
    <MovieBlock>
      <Title>{title}</Title>
      <Poster src={posterPath} alt="movie-poster" />
    </MovieBlock>
  );
};

export default Movie;
