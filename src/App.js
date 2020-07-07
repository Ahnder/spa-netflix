import React from 'react';
import { Route } from 'react-router-dom';

// import page
import MainPage from './pages/MainPage';
import GenresPage from './pages/GenresPage';
import MyListPage from './pages/MyListPage';

function App() {
  return (
    <>
      <Route path="/" exact component={MainPage} />
      <Route path="/genres" component={GenresPage} />
      <Route path="/mylist" component={MyListPage} />
    </>
  );
}

export default App;
