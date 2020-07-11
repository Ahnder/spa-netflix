import React from 'react';
import { FiPlay, FiPlus, FiInfo } from 'react-icons/fi';
import styled from 'styled-components';

/* styled 설정 */
const ButtonBlock = styled.div`
  margin-top: 1rem;
`;
const NetflixButton = styled.button`
  width: 120px;
  padding: 12px 15px;
  border: none;
  border-radius: 5%;
  background: red;
  color: #ffffff;
  cursor: pointer;

  svg {
    top: 2px;
    position: relative;
    font-size: 1rem;
  }

  span {
    margin-left: 5px;
    font-size: 1rem;
    font-weight: 700;
  }

  &:hover {
    transform: scale(1.03);
  }

  & + & {
    margin-left: 10px;
  }
`;

/**
 * NetflixButtons
 * - 웹사이트에 쓰일 공용 버튼 틀
 * - 사용된 곳 :  MainView,
 * - PLAY, ADD MYLIST, DETAILS 세가지 버튼을 가짐
 * - react-icons/fi 에서 FiPlay, FiPlus, FiInfo 를 사용
 */
const NetflixButtons = ({ movie, onInsert, openDetailsModal }) => {
  return (
    <ButtonBlock>
      <NetflixButton>
        <FiPlay />
        <span>PLAY</span>
      </NetflixButton>
      <NetflixButton onClick={() => onInsert()}>
        <FiPlus />
        <span>MYLIST</span>
      </NetflixButton>
      <NetflixButton onClick={() => openDetailsModal()}>
        <FiInfo />
        <span>DETAILS</span>
      </NetflixButton>
    </ButtonBlock>
  );
};

export default NetflixButtons;
