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

const MyList = ({ title, overview, posterPath }) => {
  return (
    <MyListBlock>
      <MyListName>마이리스트</MyListName>
      <MyListContents>
        <Movie title={title} overview={overview} posterPath={posterPath} />
        <Movie title={title} overview={overview} posterPath={posterPath} />
        <Movie title={title} overview={overview} posterPath={posterPath} />
        <Movie title={title} overview={overview} posterPath={posterPath} />
        <Movie title={title} overview={overview} posterPath={posterPath} />
      </MyListContents>
    </MyListBlock>
  );
};

export default MyList;
