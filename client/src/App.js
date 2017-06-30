import React, { Component } from 'react';
import CheeseList from './cheese-list';
import AddCheese from './addCheese';

class App extends Component {
  render() {
    return (
    <div>
      <AddCheese />
      <CheeseList />
    </div>
    );
  }
}

export default App;
