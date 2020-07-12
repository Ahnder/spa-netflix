import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* import module */
import { getGenres } from '../modules/genres';

/* import component */
import Categories from '../components/GenresComponent/Categories';
import MovieList from '../components/GenresComponent/MovieList';

/* import data */
import GenresCategories from '../lib/data/GenreCategories';

const GenresContainer = () => {
  const [genreId, setGenreId] = useState(GenresCategories[0].id);
  const { genres } = useSelector(({ genres }) => ({
    genres: genres.genres.movies,
  }));
  const dispatch = useDispatch();

  const selectGenre = useCallback((id) => {
    setGenreId(id);
  }, []);

  useEffect(() => {
    const fn = async () => {
      try {
        await dispatch(getGenres(genreId));
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [dispatch, genreId]);

  return (
    <>
      <Categories
        categories={GenresCategories}
        onSelect={selectGenre}
        genreId={genreId}
      />
      <MovieList movies={genres} />
    </>
  );
};

export default React.memo(GenresContainer);
