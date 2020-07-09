import React from 'react';
import { Route } from 'react-router-dom';

/* import pages */
import MainPage from './pages/MainPage';
import GenresPage from './pages/GenresPage';
import MyListPage from './pages/MyListPage';
import TvPostPage from './pages/TvPostPage';
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
        <Route path="/tv/:id" component={TvPostPage} />
      </div>
      <Footer />
    </>
  );
}

export default App;
