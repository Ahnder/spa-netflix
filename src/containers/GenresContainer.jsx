import React from 'react';

/* import component */
import Categories from '../components/GenresComponent/Categories';
import MovieList from '../components/GenresComponent/MovieList';

const GenresContainer = () => {
  return (
    <>
      <Categories />
      <MovieList />
    </>
  );
};

export default GenresContainer;
