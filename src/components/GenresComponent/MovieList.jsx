import React from 'react';
import styled from 'styled-components';

/* import component */
import Movie from './Movie';

/* styled 설정 */
const MovieListBlock = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin-top: 3rem;
`;
const ListBlock = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const MovieList = ({ movies, loading }) => {
  return (
    <MovieListBlock>
      <ListBlock>
        {loading && '로딩 중...'}
        {!loading &&
          movies &&
          movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              posterPath={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
          ))}
      </ListBlock>
    </MovieListBlock>
  );
};

export default MovieList;
