import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getTvPost,
  getMoviePost,
  getTvVideo,
  getMovieVideo,
  clearPost,
} from '../modules/post';

/* import component */
/* import common component */
import PostView from '../components/CommonComponent/PostComponent/PostView';

/**
 * PostContainer
 * id : tv 또는 movie 의 id로 라우터주소에 들어가고 데이터를 받아올때 쓰인다
 * type : 라우터주소 뒤에 붙는 쿼리, tv 또는 movie로 지정
 */

const PostContainer = ({ id, type }) => {
  const { tvpost, moviepost, videos } = useSelector(({ post }) => ({
    tvpost: post.tvpost.movies,
    moviepost: post.moviepost.movies,
    videos: post.videos,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async (requestTv, requestMovie) => {
      try {
        type === 'tv'
          ? await dispatch(requestTv)
          : await dispatch(requestMovie);
      } catch (e) {
        console.log(e);
      }
    };
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
            />
          )}
        </>
      )}
    </>
  );
};

export default React.memo(PostContainer);
