import React, { Component } from 'react'
import {connect} from 'react-redux'
class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      text: ''
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add To-Do:</label><br />
            <input type="text" value={this.state.text} onChange={this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({type: 'ADD_TODO', payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo)
