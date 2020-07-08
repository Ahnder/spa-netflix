import React from 'react';

/* import children Component */
import Movie from './Movie';

/**
 * 컨테이너에서 movies, loading 정보를 받아서 리스트를 출력한다.
 * loading이 false이고 movies가 존재할때만 데이터를 출력한다.
 * movie.title ? <~> : <~> 의 삼항 연산자를 사용한 이유는 데이터값에 name과 title이 혼용되어 쓰이고 있기 떄문
 */

const MainMovieList = ({ movies, loading }) => {
  return (
    <div>
      <h1>MainMovieList</h1>
      {loading && '로딩 중 입니다...'}
      {!loading &&
        movies &&
        movies.map((movie) =>
          movie.title ? (
            <Movie key={movie.id} title={movie.title} />
          ) : (
            <Movie key={movie.id} title={movie.name} />
          ),
        )}
    </div>
  );
};

export default MainMovieList;
