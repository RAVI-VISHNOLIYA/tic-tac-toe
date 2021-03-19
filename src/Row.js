import React, { Component } from 'react'
import Div from './Div'
import './div.css'

export default class Row extends Component {
    render() {
        return (
            <div className="myDiv">
                {this.props.value.map((value,index)=>(
                    <Div 
                        key={index} 
                        rowIndex={this.props.rowIndex} 
                        colIndex={index} 
                        value={value} 
                        clickHandler={this.props.clickHandler}
                    />
                ))}
                
            </div>
        )
    }
}