import React from 'react';
import styled from 'styled-components';

/* import common component */
import NetflixButtons from '../NetflixButtons/NetflixButtons';
import Seasons from './Seasons';

/* styled 설정 */
const MainViewBlock = styled.div`
  display: flex;
  width: 100vw;
`;
const BackgroundIMG = styled.img`
  width: 100%;
`;
const MovieInfoBlock = styled.div`
  position: absolute;
  width: 60%;
  height: 50%;
  top: 50%;
  left: 5%;
  z-index: 1;
  text-shadow: 0.5px 0 #111111, 0 0.5px #111111, 0.5px 0 #111111,
    0 0.5px #111111;
`;
const MovieInfoTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;
const MovieInfoOverview = styled.p`
  display: inline-block;
  width: 50%;
  font-size: 1.2rem;
  margin-top: 1rem;

  /* 멀티 라인 글자 제한 css */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 6em; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 5 = 6em */
`;

const PostView = ({ title, overview, posterPath, movie }) => {
  return (
    <>
      <MainViewBlock>
        <BackgroundIMG
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          alt="PostBackgroundImage"
        />
        <MovieInfoBlock>
          <MovieInfoTitle>{title}</MovieInfoTitle>
          <MovieInfoOverview>{overview}</MovieInfoOverview>
          <NetflixButtons />
        </MovieInfoBlock>
      </MainViewBlock>
      {movie.seasons &&
        movie.seasons.map((season) => (
          <Seasons season={season} posterPath={movie.poster_path} />
        ))}
    </>
  );
};

export default PostView;
