import React, { useEffect, useState } from "react";
import axios from "axios";

import Plants from "./pages/Plants";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { 
  BrowserRouter,
  Switch,
  Route,
  // Link,
  // useParams
} from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  const [userName, setUserName] = useState("guest");

  function getUserName() {
    axios.get("/api/auth/user_data")
      .then(res => {
        if (res.data.email) { 
          setUserName(res.data.email)
        // } else {
          // console.log('no email on response')
        }
        // console.log(res.data)
      })
  }
  useEffect(() => {
    // console.log('useeffect fired')
    getUserName()
  }, []);

  return (
    <BrowserRouter>
      <Nav userName={userName} />  
      <div>
        <Switch>
          <Route exact path="/">
            <Plants />
          </Route> 
          <Route exact path="/plants">
            <Plants />
          </Route>
          <Route path="/plants/:id" children={<Detail />} />
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
