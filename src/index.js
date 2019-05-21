import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicTac from './containers/TicTac';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <TicTac />,
  document.getElementById('root')
);


serviceWorker.unregister();
