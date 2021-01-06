import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import Projects from "./components/Projects";
import { Redirect, Switch, Route, Link, useRoute, Router } from "wouter";

function App() {
  return (
    <Router base="/portfolio-site">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/qualifications">
          <Qualifications />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
