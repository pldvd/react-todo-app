import React from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello David</h1>
        <Todos></Todos>
      </div>
    );
  }
}

export default App;
