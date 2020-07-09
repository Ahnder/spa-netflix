import React from 'react';

/* import container */
import TvPostContainer from '../containers/TvPostContainer';

const TvPostPage = ({ match }) => {
  const { id } = match.params;

  return <TvPostContainer id={id} />;
};

export default TvPostPage;
