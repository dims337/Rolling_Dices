import React, {Component} from 'react';
import './Die.css'

class Die extends Component{
    render (){
        return (
                <i class={`Die fas fa-dice-${this.props.one} ${this.props.rolling? 'Shaking':null}`}></i>   
        );
    };
}

export default Die;