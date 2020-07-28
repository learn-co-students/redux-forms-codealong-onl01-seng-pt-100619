// 1. We made sure the React component of our application was working. We did this by building a form, and then making sure that whenever the user typed in the form's input, the state was updated.
// 2. We connected the component to Redux and designed our mapDispatchToProps
// 3. We built our reducer such that it responded to the appropriate event and concatenated the payload into our array of todos.
// remember: redux flow: action > reducer > new state


import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  
  // instead of handleChange as a class method, we could declare it
  // as a class PROPERTY and assign an arrow function to it:
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  // when the form is submitted, this.state(this.props) will be dispatched to the reducer w/ the action
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            {/* every time the user changes input field, we should call our handleChange() function */}
            <input type="text" onChange={this.handleChange} value = {this.state.text} />
          </p>

            <input type="submit" />
        </form>
  
        {this.state.text}
      </div>
    )
  }
}

// decide on how to structure our data and the related action
const mapDispatchToProps = dispatch => {
  return {
    // addTodo: formData => dispatch(<some action>)
    // sidenote: formData is the value we've captured in the local state, to be added to our Redux store
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}

// how we access adTodo:
// this.props.addTodo(this.state) --- state right now has only one property, text


// export default CreateTodo;

// the first argument of connect: mapStateToProps() ... we're not concerned with this, this component DOES NOT need state.
// we only need to DISPATCH an action here, we're not getting info from our store = we use null , instead of mapStateToProps, as our first argument
export default connect(null, mapDispatchToProps)(CreateTodo);
