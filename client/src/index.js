import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const cheeseList = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
];

ReactDOM.render(
  <App cheeses={cheeseList}/>,
  document.getElementById('root')
);
