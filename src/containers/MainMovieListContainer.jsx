import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* import redux module */
import { getNetflix } from '../modules/mainlist';

/* import Component */
import MainMovieList from '../components/MainCommponent/MainMovieList';

/**
 * mainlist: modules/mainlist
 * netflix : 넷플릭스오리지날 티비 시리즈
 *
 */

const MainMovieListContainer = () => {
  const { netflix, loadingNetflix } = useSelector(({ mainlist }) => ({
    netflix: mainlist.netflix,
    loadingNetflix: mainlist.loading.GET_NETFLIX,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNetflix());
  }, [dispatch]);

  return <MainMovieList movies={netflix} loading={loadingNetflix} />;
};

export default MainMovieListContainer;
