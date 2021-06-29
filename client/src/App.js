import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter, Route,Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <Switch> 
      <Route exact path={["/","/book"]} >
        <Books />
      </Route>
      <Route exact path="/books/:id">
    <Detail/>
      </Route>
      <Route exact path="*">
        <NoMatch/>
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
