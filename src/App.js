import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';


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

  deleteTodo = (id) => {
    return this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
