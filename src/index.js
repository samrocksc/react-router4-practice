import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </BrowserRouter>,
  // eslint-disable-next-line
  document.getElementById('root')
);
registerServiceWorker();
