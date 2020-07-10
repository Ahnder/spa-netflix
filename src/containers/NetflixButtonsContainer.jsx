import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* import component */
import NetflixButtons from '../components/CommonComponent/NetflixButtons/NetflixButtons';

/* import module */
import { insertMyList } from '../modules/mylist';

/**
 * NetflixButtonsContainer
 */
const NetflixButtonsContainer = ({ movie }) => {
  const { mylist } = useSelector(({ mylist }) => ({
    mylist: mylist.mylist,
  }));
  const dispatch = useDispatch();

  const onInsert = useCallback(() => {
    const fn = async () => {
      try {
        const overlap = mylist.find((li) => li.id === movie.id);
        if (overlap) {
          return alert('이미 추가된 항목입니다.');
        }
        await dispatch(insertMyList(movie));
        await sessionStorage.setItem('sessionMylist', JSON.stringify(mylist));
        alert('마이리스트에 추가되었습니다.');
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [dispatch, mylist]);

  return <NetflixButtons movie={movie} onInsert={onInsert} />;
};

export default NetflixButtonsContainer;
