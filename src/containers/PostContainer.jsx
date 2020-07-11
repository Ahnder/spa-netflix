import React, { useEffect, useState, useCallback } from 'react';
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
  const [detailsModal, setDetailsModal] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const openDetailsModal = useCallback(() => {
    setDetailsModal(!detailsModal);
  }, [detailsModal]);
  const closeDetailsModal = useCallback(() => {
    setDetailsModal(!detailsModal);
  }, [detailsModal]);
  const openVideoModal = useCallback(() => {
    setVideoModal(!videoModal);
  }, [videoModal]);
  const closeVideoModal = useCallback(() => {
    setVideoModal(!videoModal);
  }, [videoModal]);

  const {
    tvpost,
    moviepost,
    videos,
    loadingTvpost,
    loadingMoviepost,
    loadingVideos,
  } = useSelector(({ post, loading }) => ({
    tvpost: post.tvpost.movies,
    moviepost: post.moviepost.movies,
    videos: post.videos,
    loadingTvpost: loading.GET_TVPOST,
    loadingMoviepost: loading.GET_MOVIEPOST,
    loadingVideos: loading.GET_VIDEO,
  }));
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
    const fnVideo = async () => {
      try {
        type === 'tv'
          ? await dispatch(getTvVideo(id))
          : await dispatch(getMovieVideo(id));
      } catch (e) {
        console.log(e);
      }
    };

    fn();
    fnVideo();
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch, id]);

  if (!videos) return null;
  console.log(videos);

  return (
    <>
      {type === 'tv' ? (
        <>
          {loadingTvpost && '로딩 중...'}
          {!loadingTvpost && tvpost && (
            <PostView
              movie={tvpost}
              id={id}
              videoKey={videos[0].key}
              title={tvpost.name}
              overview={tvpost.overview}
              releaseDate={tvpost.first_air_date}
              posterPath={`https://image.tmdb.org/t/p/original/${tvpost.backdrop_path}`}
              detailsModal={detailsModal}
              openDetailsModal={openDetailsModal}
              closeDetailsModal={closeDetailsModal}
              videoModal={videoModal}
              loadingVideo={loadingVideos}
              openVideoModal={openVideoModal}
              closeVideoModal={closeVideoModal}
            />
          )}
        </>
      ) : (
        <>
          {loadingMoviepost && '로딩 중...'}
          {!loadingMoviepost && moviepost && (
            <PostView
              id={id}
              movie={moviepost}
              title={moviepost.title}
              videoKey={videos[0].key}
              overview={moviepost.overview}
              posterPath={`https://image.tmdb.org/t/p/original/${moviepost.backdrop_path}`}
              releaseDate={moviepost.release_date}
              detailsModal={detailsModal}
              openDetailsModal={openDetailsModal}
              closeDetailsModal={closeDetailsModal}
              videoModal={videoModal}
              loadingVideo={loadingVideos}
              openVideoModal={openVideoModal}
              closeVideoModal={closeVideoModal}
            />
          )}
        </>
      )}
    </>
  );
};

export default PostContainer;
