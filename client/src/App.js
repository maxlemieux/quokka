import React, { useState } from "react";
import Plants from "./pages/Plants";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import SignupLoginModal from "./components/SignupLoginModal";
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
  const [show, setShow] = useState(false);

  return (
    <BrowserRouter>
      <Nav />  
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
      <SignupLoginModal show={show} setShow={setShow} />
    </BrowserRouter>
  );
}

export default App;
