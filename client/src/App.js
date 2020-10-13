import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import API from './utils/API';

import Plants from './pages/Plants';
import NoMatch from './pages/NoMatch';
import User from './pages/User';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  const [userName, setUserName] = useState('');
  const [userIp, setUserIp] = useState('');
  const [userZip, setUserZip] = useState('');
  const [userFavorites, setUserFavorites] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  function getUserName() {
    axios.get('/api/auth/user_data')
      .then((res) => {
        if (res.data.email) {
          setUserName(res.data.email);
          setUserIp(res.data.ip);
        } else {
          setUserName('guest');
          setUserIp(res.data.ip);
        }
      });
  }
  useEffect(() => {
    getUserName();
  }, []);

  function loadFavorites() {
    API.getFavorites()
      .then((res) => {
        setUserFavorites(res.data);
      })
      .catch((err) => err);
  }
  useEffect(() => {
    loadFavorites();
  }, [userName]);

  return (
    <BrowserRouter>
      <Nav
        userName={userName}
        setUserName={setUserName}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
        <Switch>
          <Route exact path="/">
            <Plants
              userFavorites={userFavorites}
              loadFavorites={loadFavorites}
              userName={userName}
              userIp={userIp}
              userZip={userZip}
              setUserZip={setUserZip}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          </Route>

          <Route path="/signup">
            <SignUp
              setUserName={setUserName}
            />
          </Route>

          <Route path="/login">
            <Login
              setUserName={setUserName}
            />
          </Route>

          <Route exact path="/user">
            <User 
              setUserName={setUserName}
              userName={userName}
            />
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
