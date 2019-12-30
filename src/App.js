import React from 'react';
import './App.css';
import CountryGame from './CountryGame';

function App() {
  return (
    <div className="App">
      <header id="div-with-bg">
        <h1>Flag Freak</h1>
      </header>
      <main>
        <CountryGame />
      </main>
    </div>
  );
}

export default App;
