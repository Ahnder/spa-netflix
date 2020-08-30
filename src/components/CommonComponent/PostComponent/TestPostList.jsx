import React from 'react';

const TestPostList = ({ listname, movies }) => {
  return (
    <div>
      <p>{listname}</p>
      {movies.map((movie) => (
        <p>{movie.id}</p>
      ))}
    </div>
  );
};

export default TestPostList;
