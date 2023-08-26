import logo from '../logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/qurantracker">
          <button className = "button-style">Quran Market Place</button>
        </Link>
      </header>
    </div>
  );
}

export default Home;
