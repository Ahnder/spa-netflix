import React from 'react';

/* import component */
import MyList from '../components/MyListComponent/MyList';

import dummyData from '../lib/data/MainViewMovieInfo';

/**
 *  MyListContainer
 */
const MyListContainer = () => {
  const { title, overview, backdrop_path } = dummyData;
  return (
    <MyList
      title={title}
      overview={overview}
      posterPath={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
    />
  );
};

export default MyListContainer;
