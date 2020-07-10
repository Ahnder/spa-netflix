import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* import module */
import { getGenres } from '../modules/genres';

/* import component */
import Categories from '../components/GenresComponent/Categories';
import MovieList from '../components/GenresComponent/MovieList';

/* import data */
import GenresCategories from '../lib/data/GenreCategories';

const GenresContainer = () => {
  const { genres, loadingGenres } = useSelector(({ genres, loading }) => ({
    genres: genres.genres.movies,
    loadingGenres: loading.GET_GENRES,
  }));
  const dispatch = useDispatch();

  const firstId = GenresCategories[0].id;

  useEffect(() => {
    const fn = async () => {
      try {
        await dispatch(getGenres(firstId));
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [dispatch]);

  return (
    <>
      <Categories categories={GenresCategories} />
      <MovieList movies={genres} loading={loadingGenres} />
    </>
  );
};

export default GenresContainer;
