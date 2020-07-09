import React from 'react';
import { FiX } from 'react-icons/fi';
import styled from 'styled-components';

/* styled 설정 */
const ModalBlock = styled.div`
  z-index: 1001;
  width: 100vw;
  height: 100vh;
  background: rgba(44, 44, 44, 0.733);
  position: fixed;
  top: 0;
  left: 0;
`;
const ModalContents = styled.div`
  position: absolute;
  bottom: 25%;
  width: 100%;
  min-height: 350px;
  background: rgb(44, 44, 44);
  overflow: hidden;
`;
const ModalBackgroundImg = styled.img`
  position: absolute;
  display: flex;
  width: 100%;
  height: auto;
  opacity: 0.6;
`;
const PostBlock = styled.div`
  padding: 2% 25%;
  width: 50%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Title = styled.h1`
  font-size: 2.3rem;
`;
const Overview = styled.p`
  margin-top: 3%;
  margin-bottom: 1rem;
  font-weight: 300;
  font-size: 1.2rem;
  text-transform: none;
`;
const CloseButtonBlock = styled.div`
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

/**
 * PostModal
 * 리스트의 목록을 클릭했을 시 나타나는 화면
 * 영화의 title, overview, poster 를 출력해준다
 * 공통 컴포넌트의 NetflixButtons를 받아서 쓴다
 */

const PostModal = ({ title, overview, posterPath, closeModal }) => {
  return (
    <ModalBlock>
      <ModalContents>
        <ModalBackgroundImg src={posterPath} alt="modal-background-img" />
        <PostBlock>
          <Title>{title}</Title>
          <Overview>{overview}</Overview>
        </PostBlock>
      </ModalContents>
      <CloseButtonBlock onClick={() => closeModal()}>
        <FiX />
      </CloseButtonBlock>
    </ModalBlock>
  );
};

export default PostModal;
