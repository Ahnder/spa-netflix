import React from 'react';

/* import component */
import Categories from '../components/GenresComponent/Categories';
import MovieList from '../components/GenresComponent/MovieList';

/* import data */
import GenresCategories from '../lib/data/GenreCategories';

const GenresContainer = () => {
  return (
    <>
      <Categories categories={GenresCategories} />
      <MovieList />
    </>
  );
};

export default GenresContainer;
