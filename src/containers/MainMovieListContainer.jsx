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
  const { netflix, loadingNetflix } = useSelector(({ mainlist, loading }) => ({
    netflix: mainlist.netflix,
    loadingNetflix: loading.GET_NETFLIX,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      try {
        dispatch(getNetflix());
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [dispatch]);

  return (
    <MainMovieList
      listName="NETFLIXORIGINAL"
      movies={netflix}
      loading={loadingNetflix}
    />
  );
};

export default MainMovieListContainer;
