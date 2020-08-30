import React from 'react';
import styled from 'styled-components';

/* import Common */
import PostLink from './PostLink';

/* styled 설정 */
const MovieBlock = styled.div`
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    z-index: 3;
  }

  h3 {
    z-index: 2;
    opacity: 1;
    position: relative;
    width: 90%;
    top: 1.5rem;
    left: 1rem;
    height: 1rem;
    text-align: start;
    font-size: 1.2rem;
    font-weight: 600;
    text-shadow: 0.5px 0 #111111, 0 0.5px #111111, 0.5px 0 #111111,
      0 0.5px #111111;
  }
`;

const ImgBlock = styled.div`
  img {
    z-index: 1;
    width: 20vw;
  }
`;

const Movie = ({ title, posterPath, id, type }) => {
  return (
    <PostLink id={id} type={type}>
      <MovieBlock>
        <h3>{title}</h3>
        <ImgBlock>
          <img src={posterPath} alt="poster" />
        </ImgBlock>
      </MovieBlock>
    </PostLink>
  );
};

export default Movie;
