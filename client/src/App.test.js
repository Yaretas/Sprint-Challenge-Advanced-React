import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Does Nav exist?", () => {
  const navBar = <Nav />;
  expect(navBar).toBeDefined();
  expect(navBar).not.toBeUndefined();
  expect(navBar).not.toBeFalsy();
});