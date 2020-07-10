import React from 'react';

/* import component */
import Movie from './Movie';

const MovieList = ({ movies, loading }) => {
  return (
    <div>
      {loading && '로딩 중...'}
      {!loading &&
        movies &&
        movies.map((movie) => <Movie key={movie.id} title={movie.title} />)}
    </div>
  );
};

export default MovieList;
