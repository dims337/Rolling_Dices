import React, {Component} from 'react';
import Die from '../Die/Die';
import './RollDice.css'

class RollDice extends Component{
    state={
        number:'one',
        number2:'four',
        rolling:false
    }

    RollDiceHandler=()=>{
        let num, num2;
        let ranNum = Math.floor(Math.random()*6 +1)
        let ranNum2 = Math.floor(Math.random()*6 +1)
    
        if(ranNum === 1){
            num = "one"
            num2= "one"
        }else if(ranNum===2){
            num='two'
         
        }else if(ranNum===3){
            num='three'
        
        }else if(ranNum===4){
            num='four'
         
        }else if(ranNum===5){
            num="five"
         
        }else{
            num="six"
    
        };

        if(ranNum2 === 1){
       
            num2= "one"
        }else if(ranNum===2){
        
            num2='two'
        }else if(ranNum2===3){
         
            num2='three'
        }else if(ranNum2===4){
            
            num2='four'
        }else if(ranNum2===5){
       
            num2="five"
        }else{
           
            num2="six"
        };


        this.setState({number:num, number2:num2, rolling:true})

        setTimeout(()=>{
            this.setState({rolling:false})
        },1000)
    }
    render (){
        return (
            <div className="RollDice">
                <div className="RollDice-Container">
                <Die one={this.state.number} rolling={this.state.rolling}/>
                <Die one={this.state.number2} rolling={this.state.rolling}/>
                </div>
                
                <button onClick={this.RollDiceHandler} disabled={this.state.rolling}>{this.state.rolling? "Rolling..." : 'Roll'}</button> 
            </div>
            
        );
    };
}

export default RollDice;