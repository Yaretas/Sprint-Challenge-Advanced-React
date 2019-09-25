import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import App from './App';
import PlayerStats from './Components/PlayerStats';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('contains text', () => {
  const text = rtl.render(<PlayerStats />);
  expect(text.getByText(/Country/i));
});