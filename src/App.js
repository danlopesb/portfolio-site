import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Redirect, Switch, Route, Link, useRoute, Router } from "wouter";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <NavBar />
        </Route>
        <Route path="/skills">
          <NavBar />
        </Route>
        <Route path="/qualifications">
          <NavBar />
        </Route>
        <Route path="/projects">
          <NavBar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
