import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
// import './App.css';

class Todos extends React.Component {
  render() {
    return (
      this.props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
      ))
    );
  }
}

//PropTypes - good practice, typechecking props
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todos;
