import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from './Pages/About';
import Project from './Pages/Project';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/about">
          <About/>
          </Route>
          <Route path="/project">
          <Project/>
          </Route>
          <Route path="/blog">
          <Blog/>
          </Route>
          <Route path="/contact">
          <Contact/>
          </Route>
          <Route>
          <Home/>
          </Route>
        </Switch>
      </Router>
 
    </div>
  );
}

export default App;
