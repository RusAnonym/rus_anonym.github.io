import React from 'react';
import logo from '../SVG/logo.svg';
import '../CSS/main.css';

function main() {
  return (
    <>
    <div>
      
    </div>
    
    <div className="Main">
      <header className="Main-header">
        <img src={logo} className="Main-logo" alt="logo" />
        <p>
          Edit <code>src/Main.tsx</code> and save to reload.
        </p>
        <a
          className="Main-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default main;
