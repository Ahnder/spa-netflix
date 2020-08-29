import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

/* import common component */
//import NetflixButtons from '../NetflixButtons/NetflixButtons';
import NetflixButtons from '../NetflixButtons/NetflixButtons';
import Seasons from './Seasons';
import DetailsModal from '../ModalComponent/DetailsModal';
import YoutubeModal from '../ModalComponent/YoutubeModal';

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
  z-index: 2;
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
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.2em;
  height: 3.6em; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
`;

const PostView = ({
  title,
  overview,
  posterPath,
  movie,
  type,
  videokey,
  releaseDate,
  onInsert,
}) => {
  const [youtubeModal, setYoutubeModal] = useState(false);
  const [detailsModal, setDetailsModal] = useState(false);

  const changeYoutubeModal = useCallback(
    () => setYoutubeModal((youtubeModal) => !youtubeModal),
    [],
  );
  const changeDetailsModal = useCallback(
    () => setDetailsModal((detailsModal) => !detailsModal),
    [],
  );

  return (
    <>
      <MainViewBlock>
        <BackgroundIMG src={posterPath} alt="PostBackgroundImage" />
        <MovieInfoBlock>
          <MovieInfoTitle>{title}</MovieInfoTitle>
          <MovieInfoOverview>{overview}</MovieInfoOverview>
          <NetflixButtons
            movie={movie}
            onInsert={onInsert}
            openDetailsModal={changeDetailsModal}
            openVideoModal={changeYoutubeModal}
          />
        </MovieInfoBlock>
      </MainViewBlock>
      {movie.seasons &&
        movie.seasons.map((season) => (
          <Seasons season={season} posterPath={movie.poster_path} />
        ))}
      {detailsModal && (
        <DetailsModal
          movie={movie}
          title={title}
          overview={overview}
          releaseDate={releaseDate}
          posterPath={posterPath}
          closeModal={changeDetailsModal}
        />
      )}
      {youtubeModal && (
        <YoutubeModal
          videokey={videokey}
          closeYouTubeModal={changeYoutubeModal}
          clearVideo={null}
        />
      )}
    </>
  );
};

export default PostView;
