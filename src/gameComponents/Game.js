import React , { Component }from "react";

import GameTitle from './GameTitle';
import GameBoard from './GameBoard';

class Game extends Component 
{ render() {
    return (
        <div>
            <GameTitle />
            <GameBoard />
        </div>
    )
    
}
    
}

export default Game;