import React from 'react';

/* import MainView Component */
import MainView from '../components/MainCommponent/MainView';
/* import MainMovie Data */
import MainViewMovieInfo from '../lib/data/MainViewMovieInfo';

/**
 * MainViewContainer
 */
const MainViewContainer = () => {
  const { title, overview, backdrop_path } = MainViewMovieInfo;
  return (
    <MainView title={title} overview={overview} backdropPath={backdrop_path} />
  );
};

export default MainViewContainer;
