import React from 'react';
import { useSelector } from 'react-redux';
/* import component */
import MyList from '../components/MyListComponent/MyList';

/**
 *  MyListContainer
 */
const MyListContainer = () => {
  const { mylist } = useSelector(({ mylist }) => ({
    mylist: mylist.mylist,
  }));
  return <MyList mylist={mylist} />;
};

export default MyListContainer;
