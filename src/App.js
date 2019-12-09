import React from 'react';
import './App.css';
import CountryGame from './CountryGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Game</h1>
        <img id="header-img" src={require('./globe.jpg')} alt="globe map" />
      </header>
      <main>
        <CountryGame />       
      </main>
    </div>
  );
}

export default App;
