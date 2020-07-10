import React from 'react';
import styled from 'styled-components';

const ListMovieBlock = styled.div`
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
  cursor: pointer;

  &:hover {
    img {
      opacity: 0.6;
    }
    svg {
      opacity: 1;
    }
  }
`;
const MoviePoster = styled.img`
  width: 100%;
  z-index: 1;
`;
const MovieContents = styled.div`
  flex: 2;
  padding-left: 2rem;
  padding-right: 2rem;

  h3 {
    font-size: 3rem;
    padding-bottom: 3rem;
  }
`;
const TextInfo = styled.p`
  font-size: 1.5rem;
  width: 90%;
  & + & {
    padding-top: 1.5rem;
  }
`;

const Seasons = ({ season, posterPath }) => {
  const { name, overview, poster_path, air_date, episode_count } = season;

  if (!season) return null;
  console.log(season);

  return (
    <>
      <ListMovieBlock>
        <PosterBlock>
          {poster_path ? (
            <MoviePoster
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt="posterImg"
            />
          ) : (
            <MoviePoster
              src={`https://image.tmdb.org/t/p/original/${posterPath}`}
              alt="posterImg"
            />
          )}
        </PosterBlock>
        <MovieContents>
          <h3>{name}</h3>
          <TextInfo>{overview}</TextInfo>
          <TextInfo>{`Air Date: ${air_date}`}</TextInfo>
          <TextInfo>{`Episode Count: ${episode_count}`}</TextInfo>
        </MovieContents>
      </ListMovieBlock>
    </>
  );
};

export default Seasons;
