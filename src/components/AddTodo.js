import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
    newTodo: '',
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({newTodo: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input type="text" name="newTodo" placeholder="Add Todo" value={this.state.newTodo} onChange={this.onChange} style={{ flex: '10', padding: '5px' }} />
        <input type="submit" value="Submit" className="btn" style={addButton} />
      </form>
    )
  }
}

const addButton = {
  flex: '1',
  background: '#555',
  color: '#fff',
  border: 'none',
  cursor: 'pointer'
}

export default AddTodo
