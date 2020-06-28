import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Plants from './pages/Plants';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  const [userName, setUserName] = useState('');
  const [userIp, setUserIp] = useState('');

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

  return (
    <BrowserRouter>
      <Nav userName={userName} setUserName={setUserName} />
      <div>
        <Switch>
          <Route exact path="/">
            <Plants userName={userName} userIp={userIp} />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
