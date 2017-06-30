import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions/cheese';

export class AddCheese extends React.Component{
  addCheese = (e) => {
    e.preventDefault()
    this.props.dispatch(actions.addCheese(this.cheese.value));
    this.cheese.value = '';
  }

  render(){
    return(
      <form onSubmit={e=> this.addCheese(e)}>
        <input type='text' ref={input=> this.cheese = input}/>
        <button type='submit'> add cheese </button>
      </form>
    )
  }

}

export default connect()(AddCheese);