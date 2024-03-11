import React from 'react';
import logo from './dashboard/HolbertonLogo.png';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Email input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>

        {/* Password input */}
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>

        {/* OK button */}
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)} - {getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
