import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* import redux module */
import {
  getNetflix,
  getAllTrending,
  getTvPopular,
  getMoviePopular,
} from '../modules/mainlist';

/* import Component */
import MainMovieList from '../components/MainCommponent/MainMovieList';

/**
 * mainlist: modules/mainlist
 * netflix : 넷플릭스오리지날 티비 시리즈
 *
 */

const MainMovieListContainer = () => {
  const { netflix, alltrend, tvpopular, moviepopular } = useSelector(
    ({ mainlist }) => ({
      netflix: mainlist.netflix,
      alltrend: mainlist.alltrend,
      tvpopular: mainlist.tvpopular,
      moviepopular: mainlist.moviepopular,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      try {
        await dispatch(getNetflix());
        await dispatch(getAllTrending());
        await dispatch(getTvPopular());
        await dispatch(getMoviePopular());
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [dispatch]);

  return (
    <>
      <MainMovieList listname="Netflix 오리지널" movies={netflix} />
      <MainMovieList listname="지금 뜨는 콘텐츠" movies={alltrend} />
      <MainMovieList listname="TOP 20 인기 TV 프로그램" movies={tvpopular} />
      <MainMovieList listname="TOP 20 인기 영화" movies={moviepopular} />
    </>
  );
};

export default React.memo(MainMovieListContainer);
