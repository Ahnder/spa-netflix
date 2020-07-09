import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTvPost } from '../modules/post';

/* import component */
import TvPost from '../components/PostComponent/TvPost';
/* import common component */
import PostView from '../components/CommonComponent/ModalComponent/PostView';

const TvPostContainer = ({ id }) => {
  const { tvpost, loadingTvpost } = useSelector(({ post, loading }) => ({
    tvpost: post.tvpost,
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
  }, [dispatch]);

  if (!tvpost) return null;

  return (
    <PostView
      title={tvpost.name}
      overview={tvpost.overview}
      posterPath={tvpost.backdrop_path}
    />
  );
};

export default TvPostContainer;
