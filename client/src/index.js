import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './store';

const cheeseList = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
];

ReactDOM.render(
  <Provider store={store}>
    <App cheeses={cheeseList}/>
  </Provider>,
  document.getElementById('root')
);
