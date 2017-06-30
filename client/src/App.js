import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CheeseList from './cheese-list'

class App extends Component {
  render() {
    return (
    <div>
      <CheeseList cheeses={this.props.cheeses} />
    </div>
    );
  }
}

export default App;
