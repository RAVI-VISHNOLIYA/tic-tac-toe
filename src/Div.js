import React, { Component } from 'react'
import './div.css';

export default class Div extends Component {
    render() {
        return (
            <div className='cell myDiv' onClick={(event)=>this.props.clickHandler(event,this.props.rowIndex,this.props.colIndex)}>
               <h2>{this.props.value}</h2> 
            </div>
        )
    }
}