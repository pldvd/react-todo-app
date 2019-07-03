import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Master JS',
        completed: false
      },
      {
        id: 2,
        title: 'Master Node.js',
        completed: false
      },
      {
        id: 3,
        title: 'Learn React',
        completed: false
      },
    ]
  }
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  })
  }
  render() {
    return (
      <div className="App">
        <h1>My ToDos</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
