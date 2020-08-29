import React from 'react';
import styled from 'styled-components';

/* import component */
import Movie from './Movie';

/* styled 설정 */
const MyListBlock = styled.div`
  padding-top: 100px;
  min-height: 450px;
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
const EmptyText = styled.p`
  font-size: 1rem;
  display: flex;
  position: relative;
  justify-content: center;
  top: 150px;
`;

const MyList = ({
  mylist,
  onRemove,
  videokey,
  onVideo,
  clearVideo,
  youtubeModal,
  changeYoutubeModal,
}) => {
  return (
    <MyListBlock>
      <MyListName>{`마이리스트 (${mylist.length})`}</MyListName>
      <MyListContents>
        {mylist.length === 0 && (
          <EmptyText>마이리스트가 비어있습니다.</EmptyText>
        )}
        {mylist &&
          mylist.map((movie) =>
            movie.data.title ? (
              <Movie
                key={movie.data.id}
                id={movie.data.id}
                type={movie.type}
                onRemove={onRemove}
                title={movie.data.title}
                overview={movie.data.overview}
                posterPath={`https://image.tmdb.org/t/p/original/${movie.data.backdrop_path}`}
                videokey={videokey}
                onVideo={onVideo}
                clearVideo={clearVideo}
                youtubeModal={youtubeModal}
                changeYoutubeModal={changeYoutubeModal}
              />
            ) : (
              <Movie
                key={movie.data.id}
                id={movie.data.id}
                type={movie.type}
                onRemove={onRemove}
                title={movie.data.name}
                overview={movie.data.overview}
                posterPath={`https://image.tmdb.org/t/p/original/${movie.data.backdrop_path}`}
                videokey={videokey}
                onVideo={onVideo}
                clearVideo={clearVideo}
                youtubeModal={youtubeModal}
                changeYoutubeModal={changeYoutubeModal}
              />
            ),
          )}
      </MyListContents>
    </MyListBlock>
  );
};

export default MyList;
