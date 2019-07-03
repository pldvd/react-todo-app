import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyles}>
      <h1>Todo List</h1>
      <Link to="/" style={{color: '#fff'}}>Home</Link> | <Link to="/about" style={{color: '#fff'}}>About</Link>
    </header>
  )
}

const headerStyles = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default Header;