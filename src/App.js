import React, {Component} from 'react';
import './App.css';
import RollDice from './RollDice/RollDice'
import Die from './Die/Die';

class App extends Component {
  render(){
    return (
      <div>
        <RollDice/>
      </div>
    
      );
  }
  
}

export default App;
