import React from 'react';
import ReactDOM from 'react-dom';
import AddLink from '../pages/AddLink';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddLink />, div);
  ReactDOM.unmountComponentAtNode(div);
});
