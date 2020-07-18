import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/* import modules - post, mylist */
import {
  getTvPost,
  getMoviePost,
  getTvVideo,
  getMovieVideo,
  clearPost,
} from '../modules/post';
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
  const { tvpost, moviepost, videos, mylist } = useSelector(
    ({ post, mylist }) => ({
      tvpost: post.tvpost.movies,
      moviepost: post.moviepost.movies,
      videos: post.videos,
      mylist: mylist.mylist,
    }),
  );
  const dispatch = useDispatch();
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

  useEffect(() => {
    fn(getTvPost(id), getMoviePost(id));
    fn(getTvVideo(id), getMovieVideo(id));
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, id]);

  return (
    <>
      {type === 'tv' ? (
        <>
          {tvpost && videos && (
            <PostView
              movie={tvpost}
              type={type}
              id={id}
              videoKey={videos[0].key}
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
          {moviepost && videos && (
            <PostView
              id={id}
              movie={moviepost}
              type={type}
              title={moviepost.title}
              videoKey={videos[0].key}
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
