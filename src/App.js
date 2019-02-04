import React, { Component } from 'react';

import './App.css';
import Game from './gameComponents/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <Game />
        </header>
      </div>
    );
  }
  
}


export default App;
