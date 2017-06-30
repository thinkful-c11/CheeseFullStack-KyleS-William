import React from 'react';
import {connect} from 'react-redux';

export class CheeseList extends React.Component{
  render(){
    const cheeseList = this.props.cheeses.map((cheese,ind)=>{
      return <li key={ind} id={ind}>{cheese}</li>
    });
    return (
    <ul>
      {cheeseList}
    </ul>
    );
  }
}

const mapStateToProps = (state)=>({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);