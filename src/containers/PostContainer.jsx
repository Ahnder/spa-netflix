import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTvPost, getMoviePost, clearPost } from '../modules/post';

/* import component */
/* import common component */
import PostView from '../components/CommonComponent/PostComponent/PostView';

/**
 * PostContainer
 * id : tv 또는 movie 의 id로 라우터주소에 들어가고 데이터를 받아올때 쓰인다
 * type : 라우터주소 뒤에 붙는 쿼리, tv 또는 movie로 지정
 */

const PostContainer = ({ id, type }) => {
  const [detailsModal, setDetailsModal] = useState(false);
  const openDetailsModal = useCallback(() => {
    setDetailsModal(!detailsModal);
  }, [detailsModal]);
  const closeDetailsModal = useCallback(() => {
    setDetailsModal(!detailsModal);
  }, [detailsModal]);

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
              releaseDate={tvpost.first_air_date}
              posterPath={`https://image.tmdb.org/t/p/original/${tvpost.backdrop_path}`}
              detailsModal={detailsModal}
              openDetailsModal={openDetailsModal}
              closeDetailsModal={closeDetailsModal}
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
              posterPath={`https://image.tmdb.org/t/p/original/${moviepost.backdrop_path}`}
              releaseDate={moviepost.release_date}
              detailsModal={detailsModal}
              openDetailsModal={openDetailsModal}
              closeDetailsModal={closeDetailsModal}
            />
          )}
        </>
      )}
    </>
  );
};

export default PostContainer;
