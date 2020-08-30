import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FiSearch, FiGift, FiBell, FiSmile } from 'react-icons/fi';

/* import navigation logo */
import NavLogo from '../../static/image/Netflix_Logo.png';

const NavBlock = styled.nav`
  width: 100vw;
  position: fixed;
  z-index: 1001;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;

  ${(props) =>
    props.scrollNav &&
    css`
      background: #111111;
    `}
`;
const LeftNavMenu = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-start;
  position: relative;
  align-items: center;
`;
const RightNavMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 2rem;
`;
const Logo = styled.img`
  height: 4rem;
  margin: 0.5rem;
  margin-right: 3rem;
`;
const LinkBlock = styled.div`
  & + & {
    margin-left: 1.5rem;
  }
`;
const SearchBlock = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 1.5rem;
`;
const SearchIcon = styled.div`
  margin-left: 0.5rem;
  cursor: pointer;
`;
const Input = styled.input``;
const NavIcon = styled.div`
  cursor: pointer;

  & + & {
    margin-left: 1.5rem;
  }
`;

const Navigation = ({ scrollNav }) => {
  return (
    <NavBlock scrollNav={scrollNav}>
      <LeftNavMenu>
        <Logo src={NavLogo} alt="NavLogoIMG" />
        <LinkBlock>
          <Link to="/">홈</Link>
        </LinkBlock>
        <LinkBlock>
          <Link to="#">TV프로그램</Link>
        </LinkBlock>
        <LinkBlock>
          <Link to="/genres">영화</Link>
        </LinkBlock>
        <LinkBlock>
          <Link to="#">최신 콘텐츠</Link>
        </LinkBlock>
        <LinkBlock>
          <Link to="/mylist">내가 찜한 콘텐츠</Link>
        </LinkBlock>
      </LeftNavMenu>
      <RightNavMenu>
        <SearchBlock>
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
          <Input type="text" placeholder=" title, genre... " />
        </SearchBlock>
        <NavIcon>
          <FiGift />
        </NavIcon>
        <NavIcon>
          <FiBell />
        </NavIcon>
        <NavIcon>
          <FiSmile />
        </NavIcon>
      </RightNavMenu>
    </NavBlock>
  );
};

export default Navigation;
