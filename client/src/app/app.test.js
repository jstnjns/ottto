import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


let store = {
  subscribe: () => {},
  dispatch: () => {},
  getState: () => {},
}
let history = {
  listen: () => {},
  location: { pathname: '/' },
}


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} history={history} />, div);
});
