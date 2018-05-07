import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import Biopics from './views/Biopics';
import Topics from './views/Topics';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/biopics">Biopics</Link>
        </li>
        <li>
          <Link to="/biopic1">Biopic 1</Link>
        </li>
      </ul>
      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/biopics" component={Biopics} />
    </div>
  </Router>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default BasicExample;
