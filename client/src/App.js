import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

// import API from './utils/API';

import Plants from './pages/Plants';
import NoMatch from './pages/NoMatch';
import User from './pages/User';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Nav from './components/Nav';
import API from './utils/API';

function App() {
  const [userIp, setUserIp] = useState('');
  const [userZip, setUserZip] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  function loadUserInfo() {
    API.getUserInfo()
      .then((res) => {
        console.log(res)
      })
      .catch((err) => err)
  };
  useEffect(() => {
    loadUserInfo();
  }, []);
  // Move this down to UserFavorites component
  // function loadFavorites() {
  //   API.getFavorites()
  //     .then((res) => {
  //       setUserFavorites(res.data);
  //     })
  //     .catch((err) => err);
  // }
  // useEffect(() => {
  //   loadFavorites();
  // }, [loggedInUsername]);

  return (
    <BrowserRouter>
      <Nav
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
        <Switch>
          <Route exact path="/">
            <Plants
              userIp={userIp}
              userZip={userZip}
              setUserZip={setUserZip}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/user">
            <User />
          </Route>

          <Route>
            <NoMatch />
          </Route>
        </Switch>
      <Footer />
    </BrowserRouter>
);
}

export default App;
