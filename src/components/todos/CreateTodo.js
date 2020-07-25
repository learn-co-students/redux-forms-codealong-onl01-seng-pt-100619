import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  
  //2. set initial state
    state = {
      text: '',
    };
   
  // change 
  handleChange = event => {
    this.setState({
        text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  };

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label> 
            {/* 1. add event handler to every input that changes */}
            {/* calls handleChange whenever user types something */}
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {/* {this.state.text} (this is a test)*/}
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
//   };
// };


export default connect()(CreateTodo);
