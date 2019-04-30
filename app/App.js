import React, { Component } from "react";
import "./App.css";
import CatsGrid from "./CatsGrid";
import GameGrid from "./GameGrid";

const GAME_GRID_ROWS = 4;
const GAME_GRID_COLS = 3;

const MAX_COL = GAME_GRID_ROWS * GAME_GRID_COLS;

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentState: [],
      currentStateGrid: this.getGrid(),
      isEndGame: false
    };
    this.onCatClick = this.onCatClick.bind(this);
    this.restartGame= this.restartGame.bind(this);
  }

  getGrid () {
    const grid = new Array(GAME_GRID_ROWS);
    for (let i = 0; i < grid.length; i++) {
      grid[i] = new Array(GAME_GRID_COLS);
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j] = "";
      }
    }
    return grid;
  }
  onCatClick (catId) {
    const currentState = [...this.state.currentState];
    const currentStateGrid = [...this.state.currentStateGrid];
    const currentPos = currentState.length;

    if (currentPos >= MAX_COL) {
      alert("Game Over, Play again");
      return;
    }
    currentState.push(catId);
    const row = parseInt(currentPos / GAME_GRID_COLS, 10);
    const col = currentPos % GAME_GRID_COLS;
    currentStateGrid[row][col] = catId;
    let isWin = true;
    if (currentPos >= MAX_COL - 1) {
      for (let i = 0; i < currentStateGrid.length; i++) {
        for (let j = 0; j < currentStateGrid[i].length; j++) {
          if (
            currentStateGrid[i].indexOf(currentStateGrid[i][j]) !==
            currentStateGrid[i].lastIndexOf(currentStateGrid[i][j])
          ) {
            isWin = false;
            break;
          }
        }
      }
    }
    this.setState({
      currentState,
      currentStateGrid,
      isEndGame: currentPos >= MAX_COL - 1,
      isWin,
    });
  };

  restartGame (){
    this.setState({
      currentState: [],
      currentStateGrid: this.getGrid(),
      isEndGame: false
    });
  }

  render() {
    return (
      <div className="App">
        <CatsGrid onCatClick={this.onCatClick} />
        <GameGrid
          isEndGame={this.state.isEndGame}
          isWin={this.state.isWin}
          restartGame={this.restartGame}
          currentStateGrid={this.state.currentStateGrid}
        />
      </div>
    );
  }
}

export default App;
