import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* */
import { removeMyList } from '../modules/mylist';
import { getTvVideo, getMovieVideo, clearVideo } from '../modules/videos';

/* import component */
import MyList from '../components/MyListComponent/MyList';

/**
 *  MyListContainer
 */
const MyListContainer = () => {
  const [youtubeModal, setYoutubeModal] = useState(false);

  const changeYoutubeModal = useCallback(
    () => setYoutubeModal((youtubeModal) => !youtubeModal),
    [],
  );

  const { mylist, videokey } = useSelector(({ mylist, videos }) => ({
    mylist: mylist.mylist,
    videokey: videos.videokey,
  }));
  const dispatch = useDispatch();

  const onRemove = useCallback(
    (id) => {
      const fn = async () => {
        try {
          await dispatch(removeMyList(id));
          await sessionStorage.setItem('sessionMylist', JSON.stringify(mylist));
        } catch (e) {
          console.log(e);
        }
      };
      fn();
    },
    [dispatch, mylist],
  );

  const onVideo = useCallback(
    (id, type) => {
      const fn = async () => {
        try {
          type === 'tv'
            ? await dispatch(getTvVideo(id))
            : await dispatch(getMovieVideo(id));
        } catch (e) {
          console.log(e);
        }
      };
      fn();
      return () => {
        dispatch(clearVideo());
      };
    },
    [dispatch],
  );

  return (
    <MyList
      mylist={mylist}
      videokey={videokey}
      onVideo={onVideo}
      onRemove={onRemove}
      youtubeModal={youtubeModal}
      changeYoutubeModal={changeYoutubeModal}
    />
  );
};

export default React.memo(MyListContainer);
