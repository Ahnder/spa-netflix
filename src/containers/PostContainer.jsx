import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTvPost, getMoviePost, clearPost } from '../modules/post';

/* import component */
/* import common component */
import PostView from '../components/CommonComponent/PostComponent/PostView';

const PostContainer = ({ id, type }) => {
  const { tvpost, moviepost, loadingTvpost, loadingMoviepost } = useSelector(
    ({ post, loading }) => ({
      tvpost: post.tvpost.movies,
      moviepost: post.moviepost.movies,
      loadingTvpost: loading.GET_TVPOST,
      loadingMoviepost: loading.GET_MOVIEPOST,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      try {
        type === 'tv'
          ? await dispatch(getTvPost(id))
          : await dispatch(getMoviePost(id));
      } catch (e) {
        console.log(e);
      }
    };
    fn();
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, id]);

  return (
    <>
      {type === 'tv' ? (
        <>
          {loadingTvpost && '로딩 중...'}
          {!loadingTvpost && tvpost && (
            <PostView
              movie={tvpost}
              title={tvpost.name}
              overview={tvpost.overview}
              posterPath={tvpost.backdrop_path}
            />
          )}
        </>
      ) : (
        <>
          {loadingMoviepost && '로딩 중...'}
          {!loadingMoviepost && moviepost && (
            <PostView
              movie={moviepost}
              title={moviepost.title}
              overview={moviepost.overview}
              posterPath={moviepost.backdrop_path}
            />
          )}
        </>
      )}
    </>
  );
};

export default PostContainer;
