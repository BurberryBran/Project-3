import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import './App.css'
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/About" component={About} />
          <Route exact path="/Signup" component={Signup} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Logout" exact component={Logout} />
          {/* <img src="/images/plantedtankfinalproject.jpg"/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
