import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* import redux module */
import { getNetflix, getTvTrending } from '../modules/mainlist';

/* import Component */
import MainMovieList from '../components/MainCommponent/MainMovieList';

/**
 * mainlist: modules/mainlist
 * netflix : 넷플릭스오리지날 티비 시리즈
 *
 */

const MainMovieListContainer = () => {
  const { netflix, tvtrend, loadingNetflix, loadingTvtrend } = useSelector(
    ({ mainlist, loading }) => ({
      netflix: mainlist.netflix,
      tvtrend: mainlist.tvtrend,
      loadingNetflix: loading.GET_NETFLIX,
      loadingTvtrend: loading.GET_TVTRENDING,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      try {
        await dispatch(getNetflix());
        await dispatch(getTvTrending());
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [dispatch]);

  return (
    <>
      <MainMovieList
        listName="NETFLIX_ORIGINAL"
        movies={netflix}
        loading={loadingNetflix}
      />
      <MainMovieList
        listName="TV_TRENDING"
        movies={tvtrend}
        loading={loadingTvtrend}
      />
    </>
  );
};

export default MainMovieListContainer;
