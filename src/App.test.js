import React from 'react';
import ReactDOM from 'react-dom';
import TicTac from './containers/TicTac';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicTac />, div);
  ReactDOM.unmountComponentAtNode(div);
});
