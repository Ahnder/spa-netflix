import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* */
import { removeMyList } from '../modules/mylist';

/* import component */
import MyList from '../components/MyListComponent/MyList';

/**
 *  MyListContainer
 */
const MyListContainer = () => {
  const { mylist } = useSelector(({ mylist }) => ({
    mylist: mylist.mylist,
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

  return <MyList mylist={mylist} onRemove={onRemove} />;
};

export default MyListContainer;
