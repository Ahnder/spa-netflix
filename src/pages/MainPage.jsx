import React from 'react';

/* import Container */
import MainViewContainer from '../containers/MainViewContainer';
import MainMovieListContainer from '../containers/MainMovieListContainer';

const MainPage = () => {
  return (
    <>
      <MainViewContainer />
      <MainMovieListContainer />
    </>
  );
};

export default MainPage;
