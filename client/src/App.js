import React, { useEffect, useState } from "react";
import axios from "axios";

import Plants from "./pages/Plants";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { 
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [userName, setUserName] = useState("guest");
  const [userIp, setUserIp] = useState("");

  function getUserName() {
    axios.get("/api/auth/user_data")
      .then(res => {
        if (res.data.email) { 
          setUserName(res.data.email);
          setUserIp(res.data.ip);
        } else {
          setUserIp(res.data.ip);
        }
      });
  }
  useEffect(() => {
    getUserName()
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
