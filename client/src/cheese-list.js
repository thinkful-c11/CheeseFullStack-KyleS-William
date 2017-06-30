import React from 'react';

export default class CheeseList extends React.Component{
  render(){
    console.log(this.props.cheeses);
    const cheeseList = this.props.cheeses.map((cheese,ind)=>{
      <li key={ind} index={ind}>{cheese}</li>
    });
    console.log(cheeseList);
    return (
    <ul>
      {cheeseList}
    </ul>
    );
  }
}