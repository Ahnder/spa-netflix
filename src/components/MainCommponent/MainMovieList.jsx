import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';

/* import children Component */
import Movie from './Movie';

/* styled 설정 */
const MovieListBlock = styled.div`
  width: 100vw;
  margin: 1rem 0;
  overflow: hidden;
  position: relative;
`;
const ButtonLeft = styled.div`
  font-size: 4rem;
  z-index: 10;
  top: 45%;
  position: absolute;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    color: red;
    transform: scale(1.3);
  }
`;
const ButtonRight = styled.div`
  font-size: 4rem;
  z-index: 10;
  top: 45%;
  position: absolute;
  left: 95%;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    color: red;
    transform: scale(1.3);
  }
`;
const ListTitle = styled.h1`
  font-size: 2.6rem;
  margin-left: 1rem;
`;
const MovieList = styled.div`
  display: flex;
  width: 100%;
`;

/**
 * 컨테이너에서 movies, loading 정보를 받아서 리스트를 출력한다.
 * loading이 false이고 movies가 존재할때만 데이터를 출력한다.
 * movie.title ? <~> : <~> 의 삼항 연산자를 사용한 이유는 데이터값에 name과 title이 혼용되어 쓰이고 있기 떄문
 */

const MainMovieList = ({ movies, listName }) => {
  const TOTAL_SLIDES = 4; // movies에 20개의 항목이 들어있으므로 4로 설정
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = useCallback(() => {
    // 더 이상 넘어갈 슬라이드가 없으면 초기화
    currentSlide >= TOTAL_SLIDES
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  }, [currentSlide]);
  const prevSlide = useCallback(() => {
    // 현재 슬라이드가 0 즉 초기값이면 마지막 슬라이드로 넘김
    currentSlide === 0
      ? setCurrentSlide(TOTAL_SLIDES)
      : setCurrentSlide(currentSlide - 1);
  }, [currentSlide]);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <>
      <MovieListBlock>
        <ListTitle>{listName}</ListTitle>
        <MovieList ref={slideRef}>
          {movies &&
            movies.map((movie) =>
              movie.title ? (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  overview={movie.overview}
                  title={movie.title}
                  posterPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                />
              ) : (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  overview={movie.overview}
                  title={movie.name}
                  posterPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                />
              ),
            )}
        </MovieList>
        <ButtonLeft onClick={() => prevSlide()}>
          <FiChevronLeft />
        </ButtonLeft>
        <ButtonRight onClick={() => nextSlide()}>
          <FiChevronRight />
        </ButtonRight>
      </MovieListBlock>
    </>
  );
};

export default MainMovieList;
