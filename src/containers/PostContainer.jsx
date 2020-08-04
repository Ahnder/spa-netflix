import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/* import modules - post, mylist, videos */
import { getTvPost, getMoviePost, clearPost } from '../modules/post';
import {
  getTvVideoKey,
  getMovieVideoKey,
  clearVideoKey,
} from '../modules/videos';
import { insertMyListTv, insertMyListMovie } from '../modules/mylist';

/* import component */
/* import common component */
import PostView from '../components/CommonComponent/PostComponent/PostView';

/**
 * PostContainer
 * id : tv 또는 movie 의 id로 라우터주소에 들어가고 데이터를 받아올때 쓰인다
 * type : 라우터주소 뒤에 붙는 쿼리, tv 또는 movie로 지정
 */

const PostContainer = ({ id, type }) => {
  /* 
    tvpost: 클릭한 tv프로그램의 정보가 저장되는 곳
    moviepost: 클릭한 영화의 정보가 저장되는 곳
    videokey: 클릭한 tv나 영화의 비디오키
    mylist: 마이리스트에 tv나 영화를 출력하기위해 저장하는 곳,
    프론트만 사용하기 때문에 세션스토리지를 사용 임시로 목록을 만듬
  */
  const { tvpost, moviepost, videokey, mylist } = useSelector(
    ({ post, mylist, videos }) => ({
      tvpost: post.tvpost.movies,
      moviepost: post.moviepost.movies,
      videokey: videos.videokey,
      mylist: mylist.mylist,
    }),
  );
  const dispatch = useDispatch();
  /*
    fn
    모듈로 가져온 함수들을 type에 따라서 알맞게 적용시키는 공통 함수
    requestTv에는 tv관련 함수를 requestMovie에는 영화관련함수를 넣어주면 된다
  */
  const fn = async (requestTv, requestMovie) => {
    try {
      type === 'tv' ? await dispatch(requestTv) : await dispatch(requestMovie);
    } catch (e) {
      console.log(e);
    }
  };
  /* MYLIST 버튼을 눌렀을 시 작동하는 함수 - 마이리스트에 클릭한 티비나 영화 정보를 저장 */
  const onInsert = useCallback(
    (movie) => {
      const overlap = mylist.find((li) => li.data.id === movie.id);
      if (overlap) {
        return alert('이미 추가된 항목입니다.');
      }
      fn(insertMyListTv(movie), insertMyListMovie(movie));
      sessionStorage.setItem('sessionMylist', JSON.stringify(mylist));
      alert('마이리스트에 추가되었습니다.');
    },
    [mylist],
  );

  /* tv나 영화 클릭 시 id로 영화정보와 비디오키를 가져와 저장한다 */
  useEffect(() => {
    fn(getTvPost(id), getMoviePost(id));
    fn(getTvVideoKey(id), getMovieVideoKey(id));
    return () => {
      dispatch(clearPost());
      dispatch(clearVideoKey());
    };
  }, [dispatch, id]);

  /* 
    title과 releasedate 가 type별로 db에서 쓰이는 변수명이 다르기 때문에 
    type을 먼저 검사하여 알맞는 데이터를 넣어준다
  */
  return (
    <>
      {type === 'tv' ? (
        <>
          {tvpost && videokey && (
            <PostView
              movie={tvpost}
              type={type}
              id={id}
              videokey={videokey}
              title={tvpost.name}
              overview={tvpost.overview}
              releaseDate={tvpost.first_air_date}
              posterPath={`https://image.tmdb.org/t/p/original/${tvpost.backdrop_path}`}
              onInsert={onInsert}
            />
          )}
        </>
      ) : (
        <>
          {moviepost && videokey && (
            <PostView
              id={id}
              movie={moviepost}
              type={type}
              title={moviepost.title}
              videokey={videokey}
              overview={moviepost.overview}
              posterPath={`https://image.tmdb.org/t/p/original/${moviepost.backdrop_path}`}
              releaseDate={moviepost.release_date}
              onInsert={onInsert}
            />
          )}
        </>
      )}
    </>
  );
};

export default React.memo(PostContainer);
