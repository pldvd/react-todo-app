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
  render() {
    return (
      <div className="App">
        <h1>Hello David</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
