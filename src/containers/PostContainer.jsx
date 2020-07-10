import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTvPost, clearPost } from '../modules/post';

/* import component */
/* import common component */
import PostView from '../components/CommonComponent/PostComponent/PostView';

const PostContainer = ({ id }) => {
  const { tvpost, loadingTvpost } = useSelector(({ post, loading }) => ({
    tvpost: post.tvpost.movies,
    loadingTvpost: loading.GET_TVPOST,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      try {
        await dispatch(getTvPost(id));
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
      {loadingTvpost && '로딩 중...'}
      <PostView
        movie={tvpost}
        title={tvpost.name}
        overview={tvpost.overview}
        posterPath={tvpost.backdrop_path}
      />
    </>
  );
};

export default PostContainer;
