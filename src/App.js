import React from 'react';
import { Route } from 'react-router-dom';

/* import pages */
import MainPage from './pages/MainPage';
import GenresPage from './pages/GenresPage';
import MyListPage from './pages/MyListPage';
import PostPage from './pages/PostPage';
/* import Navigation */
import NavigationContainer from './containers/NavigationContainer';
/* import Footer */
import Footer from './components/CommonComponent/Footer';

function App() {
  return (
    <>
      <NavigationContainer />
      <div className="App">
        <Route path="/" exact component={MainPage} />
        <Route path="/genres" component={GenresPage} />
        <Route path="/mylist" component={MyListPage} />
        <Route path="/post/:id" component={PostPage} />
      </div>
      <Footer />
    </>
  );
}

export default App;
