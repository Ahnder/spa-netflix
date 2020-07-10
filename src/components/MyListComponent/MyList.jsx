import React from 'react';
import styled from 'styled-components';

/* import component */
import Movie from './Movie';

/* styled 설정 */
const MyListBlock = styled.div`
  padding-top: 100px;
`;
const MyListName = styled.h1`
  font-size: 3rem;
  margin-left: 1.5%;
  margin-bottom: 1.5rem;
`;
const MyListContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const MyList = ({ mylist, onRemove }) => {
  return (
    <MyListBlock>
      <MyListName>{`마이리스트 (${mylist.length})`}</MyListName>
      <MyListContents>
        {!mylist && '마이리스트가 비어있습니다.'}
        {mylist &&
          mylist.map((movie) =>
            movie.title ? (
              <Movie
                key={movie.id}
                id={movie.id}
                onRemove={onRemove}
                title={movie.title}
                overview={movie.overview}
                posterPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />
            ) : (
              <Movie
                key={movie.id}
                id={movie.id}
                onRemove={onRemove}
                title={movie.name}
                overview={movie.overview}
                posterPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />
            ),
          )}
      </MyListContents>
    </MyListBlock>
  );
};

export default MyList;
