import React from 'react';
import Youtube from 'react-youtube';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

const YoutubeBlock = styled.div`
  z-index: 1005;
  width: 100vw;
  height: 100vh;
  background: rgba(44, 44, 44, 0.733);
  position: fixed;
  top: 0;
  left: 0;
`;
const YoutubeWrapper = styled.div`
  position: absolute;
  bottom: 20%;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  background: rgb(0, 0, 0);
  overflow: hidden;
`;
const CloseIconBlock = styled.div`
  width: 95%;
  margin: 0 auto;
  top: 5%;
  text-align: end;
  position: relative;

  svg {
    width: 2em;
    height: 2em;
    cursor: pointer;
  }
`;

const YoutubeModal = ({ videoKey, loading, closeYouTubeModal }) => {
  const opts = {
    width: '640',
    height: '390',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <YoutubeBlock>
      <CloseIconBlock>
        <FiX onClick={() => closeYouTubeModal()} />
      </CloseIconBlock>
      {loading && '로딩 중...'}
      {!loading && (
        <YoutubeWrapper>
          <Youtube videoId={videoKey} opts={opts} />
        </YoutubeWrapper>
      )}
    </YoutubeBlock>
  );
};

export default YoutubeModal;
