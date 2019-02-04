import React , { Component }from "react";

import Card from './Card';

class GameBoard extends Component 
{
    constructor(props){
        super(props);
        this.state = {
            cards: [0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18],
            
        };
    }

    handleClick(i){
        const cards = this.state.cards.slice();
        cards[i] = 'Clicked';
        this.setState({cards: cards});
    }

    renderCard(i){
        return <Card value={this.state.cards[i]}
        onClick={()=>this.handleClick(i)} 
        />;
    }
    
    render(){
        return(
        <div>
        <div>{this.renderCard(0)}{this.renderCard(1)}{this.renderCard(2)}</div>
        <div>{this.renderCard(3)}{this.renderCard(4)}{this.renderCard(5)}</div>
        <div>{this.renderCard(6)}{this.renderCard(7)}{this.renderCard(8)}</div>
        
        </div>
        )
        
    }  
    
}
export default GameBoard;