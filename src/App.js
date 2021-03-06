import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';


class App extends React.Component {

  state = {
    todos: []
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20")
      .then(res => res.json())
      .then(resJson => {
        this.setState({ todos: resJson })
      })
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  deleteTodo = (id) => {
    return this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  }

  addTodo = (newTodo) => {
    let lastToDoId = this.state.todos[this.state.todos.length - 1].id;
    let newTodoObj = {
      id: lastToDoId + 1,
      title: newTodo,
      completed: false
    }

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=20", { 
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodoObj),
    })
      .then(res => res.json())
      .then(resJson => this.setState({todos: this.state.todos.concat(resJson)}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={
            props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
