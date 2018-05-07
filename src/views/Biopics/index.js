import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import NotFound from '../NotFound';
import Biopic1 from './views/Biopic1';
import Biopic2 from './views/Biopic2';

const Biopics = ({match}) => {
  console.log('match', match.url);
  return (
    <div>
      <h2>Biopics</h2>
      <hr />
      <Link to={`${match.url}/biopic1`}>Biopic 1</Link>
      <Link to={`${match.url}/biopic1`}>Biopic 2</Link>
      <Switch>
        <Route exact path="/" component={Biopic1} />
        <Route path="/biopic1" component={Biopic1} />
        <Route path="/biopic2" component={Biopic2} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Biopics;
