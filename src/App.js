import React, { Component } from "react";
import "./App.css";
import Row from "./Row";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      grid: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      currentPlayer: "X",
      status: "",
      count: 1,
    };
  }

  clickHandler = (event, row, col) => {
    const copyGrid = this.state.grid;
    if (copyGrid[row][col] === "" && this.state.status === "") {
      this.setState({
        count: this.state.count + 1,
      });
      copyGrid[row][col] = this.state.currentPlayer;
      this.setState({
        grid: copyGrid,
      });
      let curr = this.state.currentPlayer;
      let match = curr + curr + curr;
      if (
        copyGrid[0][0] + copyGrid[0][1] + copyGrid[0][2] === match ||
        copyGrid[1][0] + copyGrid[1][1] + copyGrid[1][2] === match ||
        copyGrid[2][0] + copyGrid[2][1] + copyGrid[2][2] === match ||
        copyGrid[0][0] + copyGrid[1][0] + copyGrid[2][0] === match ||
        copyGrid[0][1] + copyGrid[1][1] + copyGrid[2][1] === match ||
        copyGrid[0][2] + copyGrid[1][2] + copyGrid[2][2] === match ||
        copyGrid[0][0] + copyGrid[1][1] + copyGrid[1][2] === match ||
        copyGrid[0][2] + copyGrid[1][1] + copyGrid[2][0] === match
      ) {
        this.setState({
          status: `Player ${this.state.currentPlayer} Has Won`,
        });
      } else if (this.state.count === 9) {
        this.setState({
          status: `It's Draw`,
        });
      }
      this.setState({
        currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
      });
    }
  };
  palyAgain(){
    window.location.reload();
  }
  render() {
    return (
      <div className="App">
        <h1>Tic-Tok-Toe</h1>
        {this.state.grid.map((value, index) => (
          <Row
            key={index}
            rowIndex={index}
            value={value}
            clickHandler={this.clickHandler}
          />
        ))}
        {this.state.status !== "" ? <h1>{this.state.status}</h1>:<h1>It's Player {this.state.currentPlayer} Turn</h1>}
        <button className='mybtn' onClick={this.palyAgain}><h2>Play Again</h2></button>
      </div>
    );
  }
}