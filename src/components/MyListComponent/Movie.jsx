import React from 'react';
import { FiX } from 'react-icons/fi';
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
  padding-left: 3rem;
  padding-right: 3rem;

  h3 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
`;
const RemoveIconBlock = styled.div`
  text-align: end;

  svg {
    cursor: pointer;
  }
`;

const Movie = ({ title, overview, posterPath, id, onRemove }) => {
  return (
    <MovieBlock>
      <PosterBlock>
        <Poster src={posterPath} alt="mylist-movie-poster" />
      </PosterBlock>
      <InfoBlock>
        <h3>{title}</h3>
        <p>{overview}</p>
      </InfoBlock>
      <RemoveIconBlock>
        <FiX onClick={() => onRemove(id)} />
      </RemoveIconBlock>
    </MovieBlock>
  );
};

export default Movie;
