import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* import component */
import NetflixButtons from '../components/CommonComponent/NetflixButtons/NetflixButtons';

/* import module */
import { insertMyListTv, insertMyListMovie } from '../modules/mylist';

/**
 * NetflixButtonsContainer
 */
const NetflixButtonsContainer = ({
  movie,
  type,
  openDetailsModal,
  openVideoModal,
}) => {
  const { mylist } = useSelector(({ mylist }) => ({
    mylist: mylist.mylist,
  }));
  const dispatch = useDispatch();

  const onInsert = useCallback(() => {
    const fn = async () => {
      try {
        const overlap = mylist.find((li) => li.data.id === movie.id);
        if (overlap) {
          return alert('이미 추가된 항목입니다.');
        }
        type === 'tv'
          ? await dispatch(insertMyListTv(movie))
          : await dispatch(insertMyListMovie(movie));
        await sessionStorage.setItem('sessionMylist', JSON.stringify(mylist));
        alert('마이리스트에 추가되었습니다.');
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [dispatch, mylist]);

  return (
    <NetflixButtons
      movie={movie}
      onInsert={onInsert}
      openDetailsModal={openDetailsModal}
      openVideoModal={openVideoModal}
    />
  );
};

export default NetflixButtonsContainer;
