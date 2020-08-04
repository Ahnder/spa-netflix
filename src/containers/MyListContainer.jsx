import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* import modules */
import { removeMyList } from '../modules/mylist';
import {
  getTvVideoKey,
  getMovieVideoKey,
  clearVideoKey,
} from '../modules/videos';

/* import component */
import MyList from '../components/MyListComponent/MyList';

/**
 * MyListContainer
 *
 * 마이리스트 화면에 내가 목록에 담은 영화들을 불러와서 출력
 *
 * 썸네일화면과 텍스트정보화면으로 구성되어있으며 썸네일 클릭 시 비디오화면 출력
 */
const MyListContainer = () => {
  /* 
    비디오 화면(YoutubeModal)을 열기위한 상태 설정과 상태변화함수 
    
    youtubeModal : true나 false 값을 가지며 기본값은 false
    값이 true일 경우 유튜브화면에 출력되고 false일 시 사라진다

    changeYoutubeModal : youtubeModal 상태 값 변화를 위한 함수
  */
  const [youtubeModal, setYoutubeModal] = useState(false);
  const changeYoutubeModal = useCallback(() => {
    setYoutubeModal((youtubeModal) => !youtubeModal);
  }, []);

  /* 
    mylist : 마이리스트 화면 구성을 위해 mylist에서 목록을 가져와서 출력 

    videokey : videos에서 클릭한 영화에 맞는 비디오키를 가져온다  
  */
  const { mylist, videokey } = useSelector(({ mylist, videos }) => ({
    mylist: mylist.mylist,
    videokey: videos.videokey,
  }));
  const dispatch = useDispatch();

  /* 
    onRemove
    
    마이리스트에서 각 영화목록 오른쪽 상단에 있는 x 를 누를 시 목록에서 클릭한 영화를 삭제하는 기능의 함수
    
    백엔드를 사용하지 않아 마이리스트를 관리할 db가 없어서 세션스토리지를 사용해서 구현
    
    dispatch 수행 후 세션스토리지에 다시 저장하여 목록을 갱신한다
    
    콜백함수의 [] 부분에 mylist를 넣어주어 마이리스트에 변화가 생길 때 갱신되어 새로운 목록이 
    바로 화면에 보이도록 설정 
  */
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

  /* 
    onVideo
    
    클릭한 영화의 id와 type을 가져와 비디오 정보를 가져오는 함수 

    type에 따라서 알맞은 함수로 비디오 정보를 가져오고 다른 영화를 클릭 시
    이전 영화의 비디오 정보가 남아 있는것을 방지하기 위해 뒷정리 함수로 정보를 지워준다
  */

  const onVideo = useCallback(
    (id, type) => {
      const fn = async () => {
        try {
          type === 'tv'
            ? await dispatch(getTvVideoKey(id))
            : await dispatch(getMovieVideoKey(id));
        } catch (e) {
          console.log(e);
        }
      };
      fn();
      return () => {
        dispatch(clearVideoKey());
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
