import React from 'react';

function Header() {
  return (
    <header style={headerStyles}>
      <h1>Todo List</h1>
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